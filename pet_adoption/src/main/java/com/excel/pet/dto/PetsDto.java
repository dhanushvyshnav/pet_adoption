package com.excel.pet.dto;


import com.excel.pet.enums.Breed;
import com.excel.pet.enums.Gender;
import com.excel.pet.enums.Species;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PetsDto {
	
	private Integer petId;
	
	private Species species;
	
	private Breed breed;
	
	private Gender gender;
	
	private String photoUrl;
	
	private String email;
	
	private String location;
	
	private Double adoptionFee;
	
	private String description;


}
