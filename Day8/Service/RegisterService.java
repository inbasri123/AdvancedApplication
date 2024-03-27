package com.example.cruise.Service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.cruise.Entity.RegisterEntity;
import com.example.cruise.Repository.RegisterRepository;
@Service
public class RegisterService {
    @Autowired
    private RegisterRepository registerRepo;
    
    public void saveRegister(RegisterEntity reg)
    {
        registerRepo.save(reg);
    }
    public List<RegisterEntity> getRegister()
    {
        return registerRepo.findAll();
    }
    public void updateRegister(RegisterEntity reg)
    {
         registerRepo.save(reg);
    }
    public void deleteRegister(int id)
    {
        registerRepo.deleteById(id);
    }
}
