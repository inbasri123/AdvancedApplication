package com.example.cruise.Repository;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;
import com.example.cruise.Entity.RegisterEntity;
@Repository
public interface RegisterRepository extends JpaRepository<RegisterEntity,Integer>{
    Optional<RegisterEntity>findByUsername(String username);
}
