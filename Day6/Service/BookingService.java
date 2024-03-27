package com.example.cruise.Service;



import com.example.cruise.Entity.Booking;
import com.example.cruise.Repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class BookingService {
    @Autowired
    private  BookingRepository bookingrepo;
    public Booking saveBooking(Booking book) {
      
        return bookingrepo.save(book);
    }

    public List<Booking> getAllBooking() {
        return bookingrepo.findAll();
    }

    public void updateBooking(Booking book) {
        
        bookingrepo.save(book);
    }

    public void deleteBooking(int id) {
        bookingrepo.deleteById(id);
    }
}


