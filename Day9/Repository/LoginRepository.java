package com.example.cruise.Repository;

 import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.cruise.Entity.Login;
@Repository

public interface LoginRepository extends JpaRepository<Login,Integer>{
    
}
