package com.excel.pet.dto;

import java.util.List;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PetsListDto {
	
	private Integer user_id;		
	
	private List<PetsDto> petsList;
	
	private String email;

}
