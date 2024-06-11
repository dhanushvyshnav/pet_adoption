package com.excel.pet.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AdminDto {
	
	private Boolean applicationStatus;
	
	private String adminId;
	
	private String password;
	
	private String name;

}
