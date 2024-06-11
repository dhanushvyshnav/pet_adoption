package com.excel.pet.service;

import static com.excel.pet.constant.UserConstant.ACCOUNT_NOT_FOUND_MESSAGE;
import static com.excel.pet.constant.UserConstant.LOGIN_FAILED_MESSAGE;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.excel.pet.constant.UserConstant;
import com.excel.pet.dto.AdminDto;
import com.excel.pet.dto.ApplicationDto;
import com.excel.pet.dto.PetsDto;
import com.excel.pet.dto.UsersDto;
import com.excel.pet.entity.Admin;
import com.excel.pet.entity.Application;
import com.excel.pet.entity.Pets;
import com.excel.pet.entity.Users;
import com.excel.pet.exception.CustomException;
import com.excel.pet.repo.AdminRepo;
import com.excel.pet.repo.ApplicationRepo;
import com.excel.pet.repo.PetsRepo;
import com.excel.pet.repo.UserRepo;
import com.excel.pet.utils.ObjectUtil;


@Service
public class PetServiceImpl implements PetService {

	private static final String DEFAULT_ADMIN_USERNAME = "admin";
	private static final String DEFAULT_ADMIN_PASSWORD = "admin123";


	@Autowired
	private AdminRepo adminRepo;

	@Autowired
	private UserRepo userRepo;

	public PetServiceImpl(UserRepo userRepo) {
		this.userRepo = userRepo;
	}
	@Autowired
	private PetsRepo petsRepo;

	@Autowired
	private ApplicationRepo applicationRepo;


	/*Add user*/
	@Override
	public Integer addUser(UsersDto dto) {
		if(!userRepo.findById(dto.getId()).isPresent())
		{
			Users usersInfoDto = ObjectUtil.usersInfoDto(dto);
			Users save = userRepo.save(usersInfoDto);
			return save.getId();
		}
		else {
			throw new CustomException("User already exists!!");
		}
	}
	

	/** user register and login pop-ups */
	public static final String REGISTRATION_FAILED_MESSAGE = "Registration failed. Please try again.";
	public static final String EMAIL_ALREADY_REGISTERED_MESSAGE = "Email is already registered.";

	
	/*------------------------------------------user register-----------------------------------*/
	@Override
	public Integer registerUser(UsersDto dto) {
		// Check if the email is already registered
		if (userRepo.findByEmail(dto.getEmail()).isPresent()) {
			throw new CustomException(EMAIL_ALREADY_REGISTERED_MESSAGE);
		}
		// Create a new user entity and save it to the database
		Users newUser = new Users();
		newUser.setId(dto.getId());
		newUser.setUsername(dto.getUsername());
		newUser.setEmail(dto.getEmail());
		newUser.setPassword(dto.getPassword());
		try {
			userRepo.save(newUser);
		} catch (Exception e) {
			throw new CustomException(REGISTRATION_FAILED_MESSAGE);
		}
		return null;
	}

	/*----------------------------------user Login---------------------------------------*/
	@Override
	public UsersDto signIn(UsersDto dto) {
		Optional<Users> email = userRepo.findByEmail(dto.getEmail());
		if(email.isPresent()) {
			Users info=email.get();
			if(info.getPassword().equals(dto.getPassword())) {
				return ObjectUtil.entityToDto(info);
			}		
		}
		throw new CustomException(ACCOUNT_NOT_FOUND_MESSAGE);
	}

	/*------------------------Add new pet------------------------*/
	@Override
	public Integer addPet(PetsDto dto) {
		Optional<Users> byUserId = userRepo.findByEmail(dto.getEmail());

		System.out.println(byUserId);
		
		if (byUserId.isPresent()) {
			Users user = byUserId.get();
			
			Pets pets = Pets.builder()
			.species(dto.getSpecies())
			.breed(dto.getBreed())
			.gender(dto.getGender())
			.photoUrl(dto.getPhotoUrl())
			.location(dto.getLocation())
			.adoptionFee(dto.getAdoptionFee())
			.description(dto.getDescription())
			.petId(dto.getPetId())
			.email(dto.getEmail())
			.users(user)
			.build();
			petsRepo.save(pets);
			return pets.getPetId();
		} else {
			throw new CustomException("User not found for the provided ID");
		}
	}

	@Override
	public List<UsersDto> getAllUsers() {
		return userRepo.findAll().stream()
				.map(ObjectUtil::entityToDto).collect(Collectors.toList());
	}

	@Override
	public List<PetsDto> getAllPets() {
		return petsRepo.findAll().stream().map(ObjectUtil :: petsEntityToDto)
				.collect(Collectors.toList());
	}

		/*Update status*/
	  @Override
	    public Integer setApplicationStatus(ApplicationDto dto) {
	        Optional<Application> byId = applicationRepo.findById(dto.getId());
	        try {
	            if (byId.isPresent()) {
	                Application application = byId.get();
	                application.setApplicationStatus(true);
	                applicationRepo.save(application);
	                return 1; // Indicate success
	            } else {
	                throw new CustomException(UserConstant.UPDATE_UNSUCCESSFUL); 
	            }
	        } catch (Exception e) {
	            throw new CustomException(UserConstant.UPDATE_UNSUCCESSFUL);
	        }
	    }
	  
	  @Override
	  public Integer reverseApplication(ApplicationDto dto) {
	      Optional<Application> byId = applicationRepo.findById(dto.getId());
	      try {
	          if (byId.isPresent()) {
	              Application application = byId.get();
	              application.setApplicationStatus(false);
	              applicationRepo.save(application);
	              return 1;
	          } else {
	              throw new CustomException(UserConstant.UPDATE_UNSUCCESSFUL);
	          }
	      } catch (Exception e) {
	          throw new CustomException(UserConstant.UPDATE_UNSUCCESSFUL); 
	      }
	  }
	  
	  /** -------------------------APPLY for PET ADOPTION---------------------------------*/
	  @Override
	  public String addApplication(ApplicationDto dto) {
	      Optional<Users> byUserEmail = userRepo.findByEmail(dto.getEmail());
	      Optional<Pets> byPetBreed = petsRepo.findByBreed(dto.getBreed());

	      if (byUserEmail.isPresent() && byPetBreed.isPresent()) {
	          Users user = byUserEmail.get();
	          Pets pet = byPetBreed.get();

	          // Check if the email in ApplicationDto matches the email in PetsDto for the same breed
	          if (dto.getEmail().equals(pet.getEmail()) && dto.getBreed().equals(pet.getBreed())) {
	              return "Can't apply for the same breed you added";
	          }

	          // Add new application
	          Application application = ObjectUtil.applicationDtoToEntity(dto);
	          user.getApplications().add(application);
	          pet.getApplications().add(application);
	          application.setUsers(user);
	          application.setPets(pet);

	          userRepo.save(user);
	          petsRepo.save(pet);

	          return "Application added successfully";
	      } else {
	          throw new CustomException("User or pet not found with the provided details.");
	      }
	  }

	/*GetAllApplications*/
	@Override
	public List<ApplicationDto> findAllApplications() {
		return applicationRepo.findAll().stream()
				.map(a->ApplicationDto.builder().id(a.getId()).user_id(a.getUsers().getId()).petId(a.getPets().getPetId())
						.applicationStatus(a.getApplicationStatus()).breed(a.getBreed()).applicationDate(a.getApplicationDate())
						.species(a.getSpecies()).gender(a.getGender()).email(a.getEmail()).build())
				.collect(Collectors.toList());
	}

	/*------------------------------Admin-login------------------------------------------------*/
	@Override
	public Integer adminLogin(AdminDto dto) {
		if (!DEFAULT_ADMIN_USERNAME.equals(dto.getName()) || !DEFAULT_ADMIN_PASSWORD.equals(dto.getPassword())) {
			throw new CustomException(LOGIN_FAILED_MESSAGE);
		}
		Admin admin = new Admin();
		admin.setName(dto.getName());
		admin.setPassword(dto.getPassword());

		try {
			adminRepo.save(admin);
		} catch (Exception e) {
			throw new CustomException(LOGIN_FAILED_MESSAGE);
		}
		return null;
	}
}









