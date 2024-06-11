package com.excel.pet.service;

import java.util.List;

import com.excel.pet.dto.AdminDto;
import com.excel.pet.dto.ApplicationDto;
import com.excel.pet.dto.PetsDto;
import com.excel.pet.dto.UsersDto;

public interface PetService {
	
	public Integer addUser(UsersDto dto);
	
	public UsersDto signIn(UsersDto dto);
	
	public Integer registerUser(UsersDto dto);
	
	public Integer addPet(PetsDto dto);
	
	public String addApplication(ApplicationDto dto);
	
	public List<UsersDto> getAllUsers();
	
	public List<PetsDto> getAllPets();
	
	public List<ApplicationDto> findAllApplications( );
	
	public Integer setApplicationStatus(ApplicationDto dto);
	
	public Integer reverseApplication(ApplicationDto dto);
	
	public Integer adminLogin(AdminDto dto);
	
	//public 	UsersDto userLogin(UsersDto dto);

	
	
	
	

}
