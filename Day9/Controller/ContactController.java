package com.example.cruise.Controller;

import com.example.cruise.Service.ContactService;
import com.example.cruise.Entity.Contact;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/contact")
public class ContactController {
    

    
    @Autowired
    private ContactService contactser;

    @GetMapping("/getcontact")
    public List<Contact> getContactDetails() {
        return contactser.getAllContact();
    }
    
    @PostMapping("/contacting")
    public String contacting(@RequestBody Contact contact) {
    contactser.saveContact(contact);
    return "Contact Successfully Saved";
}
 
    @PutMapping("/updatecontact")
    public String updateContactDetails(@RequestBody Contact contact, @RequestParam int id) {
         contact.setId(id);
         contactser.updateContact(contact);
         return "Contact Successfully Updated";
    }

    @DeleteMapping("/deletecontact")
    public String deleteContactDetails(@RequestParam int id) {
        contactser.deleteContact(id);
        return "Successfully deleted";
    }
}