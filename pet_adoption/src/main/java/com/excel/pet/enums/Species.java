package com.excel.pet.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum Species {
	
	DOG("DOG"), CAT("CAT"), RABBIT("RABBIT");
	
private final String species;
}
