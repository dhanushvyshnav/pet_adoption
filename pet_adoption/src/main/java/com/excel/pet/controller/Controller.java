
package com.excel.pet.controller;


import static com.excel.pet.constant.UserConstant.USER_INFO_SAVED;
import static com.excel.pet.constant.UserConstant.LOGIN_SUCCESSFUL;
import static com.excel.pet.constant.UserConstant.ADMIN_LOGIN_SUCCESS;

import java.util.List;
import java.util.Optional;

import static com.excel.pet.constant.UserConstant.PETS_INFO_ADDED;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.excel.pet.dto.AdminDto;
import com.excel.pet.dto.ApplicationDto;
import com.excel.pet.dto.PetsDto;
import com.excel.pet.dto.UsersDto;
import com.excel.pet.entity.Admin;
import com.excel.pet.exception.CustomException;
import com.excel.pet.repo.AdminRepo;
import com.excel.pet.response.Success;
import com.excel.pet.service.PetService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins="*")
public class Controller {
	
	@Autowired
	private final PetService petService;
	
	@Autowired
	private final AdminRepo  adminRepo;
	
	
	@PostMapping("/admin-login")
    public ResponseEntity<Success<Integer>> adminLogin(@RequestBody AdminDto dto) {
        try {
            Integer result = petService.adminLogin(dto);
            return ResponseEntity.ok(Success.<Integer>builder()
                    .data(result)
                    .isError(false)
                    .message("Admin login successful")
                    .build());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Success.<Integer>builder()
                            .isError(true)
                            .message("Admin login failed: " + e.getMessage())
                            .build());
        }
    }

	
	/*----------------------------USER REGISTER-----------------------------------*/
    @PostMapping("/register")
    public ResponseEntity<Success<Integer>> registerUser(@RequestBody UsersDto dto) {
        Integer result = petService.registerUser(dto);
        return ResponseEntity.status(HttpStatus.OK).body(Success.<Integer>builder()
				.data(result).isError(false).message(USER_INFO_SAVED).build());
    }
	
    /**----------------------------USER LOGIN--------------------------------------*/
	@PostMapping("/signin")
	@CrossOrigin(origins="*")
	 public ResponseEntity<Success<UsersDto>> signIn(@RequestBody UsersDto dto){
		UsersDto signIn = petService.signIn(dto);
		return ResponseEntity.status(HttpStatus.OK).body(Success.<UsersDto>builder()
				.data(signIn).isError(false).message("Login Successfully!!").build());		
	}
	
	/**-----------------------------ADDING A NEW PET----------------------------------------------*/
	 @PostMapping(path = "/addPet")
	    public ResponseEntity<Success<Integer>> postPetsInfo(@RequestBody PetsDto dto) {
	        Integer userId = petService.addPet(dto); 
	        return ResponseEntity.status(HttpStatus.CREATED).body(Success.<Integer>builder()
	                .data(userId).message(PETS_INFO_ADDED).build());        
	    }
	      

	 /**-------------------------------APPLYING FOR ADOPTION----------------------------------------------*/
	 @PostMapping(path = "/application-info")
	 public ResponseEntity<Success<String>> postApplicationInfo(@RequestBody ApplicationDto dto){
		 String applicationId = petService.addApplication(dto);
		 return ResponseEntity.status(HttpStatus.OK).body(Success.<String>builder().data(applicationId)
				 .message(applicationId).build());
	 }
	 
	 
	 
	@GetMapping("/getAll")
	public ResponseEntity<List<UsersDto>> fetchAllUsers() {
		return ResponseEntity.ok(petService.getAllUsers()) ;
	}

	@GetMapping("/getAllPets")
	public ResponseEntity<List<PetsDto>> fetchAllPets() {
		return ResponseEntity.ok(petService.getAllPets()) ;
	}
	
	/**----------------------GET APPL*/
	@GetMapping("/getAllApplications")
    public ResponseEntity<List<ApplicationDto>> getAllApplications() {
        List<ApplicationDto> applications = petService.findAllApplications();
        return ResponseEntity.ok(applications);
    }

	
	@PutMapping("/updateStatus")
	public ResponseEntity<String> updateStatus(@RequestBody ApplicationDto dto) {
	    try {
	        Integer result = petService.setApplicationStatus(dto);
	        if (result == 1) {
	            return ResponseEntity.ok("Status updated successfully");
	        } else {
	            return ResponseEntity.status(404).body("Application not found");
	        }
	    } catch (CustomException e) {
	        return ResponseEntity.status(500).body(e.getMessage());
	    }
	}

	@PutMapping("/reverseStatus")
	public ResponseEntity<String> reverseStatus(@RequestBody ApplicationDto dto) {
	    try {
	        Integer result = petService.reverseApplication(dto);
	        if (result == 1) {
	            return ResponseEntity.ok("Status updated successfully");
	        } else {
	            return ResponseEntity.status(404).body("Application not found");
	        }
	    } catch (CustomException e) {
	        return ResponseEntity.status(500).body(e.getMessage());
	    }
	}

}


