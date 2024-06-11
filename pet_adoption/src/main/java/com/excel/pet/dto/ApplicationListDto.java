package com.excel.pet.dto;

import java.util.List;

import com.excel.pet.enums.Breed;
import com.excel.pet.enums.Gender;
import com.excel.pet.enums.Species;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ApplicationListDto {

	private Integer user_id;
	
	private Integer petId;
	
	private String email;
	
	private Species species;

	private Breed breed;

	private Gender gender;
	
	private Boolean applicationStatus;
	
	private List<ApplicationDto> applicationList;
}
