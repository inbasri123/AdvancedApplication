package com.example.cruise.Controller;

import com.example.cruise.Entity.Booking;
import com.example.cruise.Service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/book")

public class BookingController {
    @Autowired
    private  BookingService bookingservice;
    @GetMapping("/getbooking")
    public List<Booking> getBookingDetails()
    {
        return bookingservice.getAllBooking();
    }
    
    @PostMapping("/booking")
    public String booking(@RequestBody Booking book) 
    {
    bookingservice.saveBooking(book);
    return "Successfully Saved";
    }
 
    @PutMapping("/updatebooking")
    public String updateBookingDetails(@RequestBody Booking book, @RequestParam int id) {
         book.setId(id);
         bookingservice.updateBooking(book);
         return "Successfully Updated";
    }

    @DeleteMapping("/deletebooking")
    public String deleteBookingDetails(@RequestParam int id) {
        bookingservice.deleteBooking(id);
        return "Successfully deleted";
    }
    }

