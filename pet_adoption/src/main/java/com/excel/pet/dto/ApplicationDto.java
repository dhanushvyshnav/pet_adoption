package com.excel.pet.dto;

import java.time.LocalDate;

import com.excel.pet.enums.ApplicationStatus;
import com.excel.pet.enums.Breed;
import com.excel.pet.enums.Gender;
import com.excel.pet.enums.Species;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class ApplicationDto {

	private Integer id;

	private Integer user_id;

	private Integer petId;

	private Boolean applicationStatus;

	private String email;

	private Species species;

	private Breed breed;

	private Gender gender;

	private LocalDate applicationDate;

}
