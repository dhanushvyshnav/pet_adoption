package com.excel.pet.utils;



import com.excel.pet.dto.ApplicationDto;
import com.excel.pet.dto.PetsDto;
import com.excel.pet.dto.UsersDto;
import com.excel.pet.entity.Application;
import com.excel.pet.entity.Pets;
import com.excel.pet.entity.Users;

public class ObjectUtil {
	
	private ObjectUtil() {
		
	}
	
	public static Users usersInfoDto(UsersDto dto)
	{
		return Users.builder()
				.id(dto.getId())
				.username(dto.getUsername()).email(dto.getEmail())
				.password(dto.getPassword()).createdAt(dto.getCreatedAt())
				.build();
	}
	
	public static UsersDto entityToDto(Users dto){
		return UsersDto.builder().username(dto.getUsername()).
				id(dto.getId()).email(dto.getEmail()).
				password(dto.getPassword()).createdAt(dto.getCreatedAt()).build();
				
	}
	
	public static Pets petsToDto(PetsDto p){
		return Pets.builder().petId(p.getPetId())
				.species(p.getSpecies()).breed(p.getBreed()).gender(p.getGender())
				.photoUrl(p.getPhotoUrl()).location(p.getLocation())
				.adoptionFee(p.getAdoptionFee()).description(p.getDescription())
				.build();
	}
	
	public static PetsDto petsEntityToDto(Pets dto)
	{
		return PetsDto.builder().petId(dto.getPetId()).species(dto.getSpecies()).
				breed(dto.getBreed()).gender(dto.getGender()).photoUrl(dto.getPhotoUrl()).
				location(dto.getLocation()).adoptionFee(dto.getAdoptionFee()).email(dto.getEmail()).build();
	}

	public static Application applicationDtoToEntity(ApplicationDto dto) {

		return Application.builder().species(dto.getSpecies()).
				breed(dto.getBreed()).gender(dto.getGender())
				.applicationDate(dto.getApplicationDate()).applicationStatus(false).email(dto.getEmail()).build();
	}
	
//	public static UsersDto dtoToEntity(Users dto)
//	{
//		return UsersDto.builder().username(dto.getUsername()).
//				email(dto.getEmail()).build();
//		
//	}

}
