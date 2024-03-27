package com.example.cruise.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.cruise.Entity.Contact;
@Repository
public interface ContactRepository extends JpaRepository<Contact, Integer>{
    
}