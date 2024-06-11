package com.excel.pet.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class UsersDto {

	private Integer id;
	private String username;
	private String email;
	private String password;
	private LocalDate createdAt;
}
