package com.excel.pet.handler;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.excel.pet.exception.CustomException;

@RestControllerAdvice
public class Handler {


	@ExceptionHandler(CustomException.class)
	public ResponseEntity<String> customException(RuntimeException exe)
	{
		return ResponseEntity.ok(exe.getMessage());
	}

}

