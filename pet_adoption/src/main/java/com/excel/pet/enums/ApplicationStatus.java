package com.excel.pet.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum ApplicationStatus {
	
	PENDING("PENDING"), APPROVED("APPROVED"), REJECTED("REJECTED");
	
	private final String status;

}
