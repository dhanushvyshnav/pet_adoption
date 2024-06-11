package com.excel.pet.repo;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.excel.pet.entity.Admin;

public interface AdminRepo extends JpaRepository<Admin, Integer> {
    Optional<Admin> findByName(String name);
}
