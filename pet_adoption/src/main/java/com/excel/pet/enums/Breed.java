package com.excel.pet.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum Breed {
	
	PERSIAN_CAT("PERSIAN_CAT"), MANX("MANX"), WILD_MANX("WILD_MANX"), LITTLE_MANX("LITTLE_MANX"),
	
	
	WHITE_BUNNY("WHITE_BUNNY"), BROWN_BUNNY("BROWN_BUNNY"), PARIS_BUNNY("PARIS_BUNNY"),
	
	HUSKY("HUSKY"), GOLDEN_RETRIVER("GOLDEN_RETRIVER"), AMERICAN_BULLY("AMERICAN_BULLY"), 
	YORKIE("YORKIE"), LABRADOR("LABRADOR");
	private final String breed;

}
