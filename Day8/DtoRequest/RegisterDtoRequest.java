package com.example.cruise.DtoRequest;

import com.example.cruise.Enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class RegisterDtoRequest {
    private String username;
    private String email;
    private String password;
    private Role role;
   
}
