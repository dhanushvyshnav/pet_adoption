package com.excel.pet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.excel.pet.entity.Admin;
import com.excel.pet.repo.AdminRepo;

@SpringBootApplication
public class PetAdoptionApplication {
//implements CommandLineRunner {

	  @Autowired
      private AdminRepo adminRepo;
	
	
	public static void main(String[] args) {
		SpringApplication.run(PetAdoptionApplication.class, args);
		
}

//	@Override
//	public void run(String... args) throws Exception {
//		
//		String name ="admin";
//		String password ="1234";
//		
//		Admin byNameAndPassword = adminRepo.findByNameAndPassword(name, password);
//		 if (byNameAndPassword != null) {
//	            System.out.println("Admin found: " + byNameAndPassword.getName());
//	        } else {
//	            adminRepo.save(Admin.builder().name("admin").password("1234").build());
//	        }
//	}
}
