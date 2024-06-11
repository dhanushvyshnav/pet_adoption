package com.excel.pet.exception;

public class CustomException extends RuntimeException{
	
public static final long serialVersionUID = 1L;
	
	public CustomException(String message) {
		
		super(message);
	}

}
