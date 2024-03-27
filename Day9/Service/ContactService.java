package com.example.cruise.Service;
import com.example.cruise.Entity.Contact;
import com.example.cruise.Repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {
    
    @Autowired
    private ContactRepository contactrepo;

    public Contact saveContact(Contact contact) {
        return contactrepo.save(contact);
    }

    public List<Contact> getAllContact() {
        return contactrepo.findAll();
    }

    public void updateContact(Contact contact) {
        contactrepo.save(contact);
    }

    public void deleteContact(int id) {
        contactrepo.deleteById(id);
    }
}
