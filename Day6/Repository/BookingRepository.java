package com.example.cruise.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.cruise.Entity.Booking;

public interface BookingRepository extends JpaRepository<Booking,Integer>{

}
