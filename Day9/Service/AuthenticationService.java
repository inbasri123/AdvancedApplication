package com.example.cruise.Service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.cruise.DtoRequest.AuthenticationRequest;
import com.example.cruise.DtoRequest.RegisterDtoRequest;
import com.example.cruise.DtoResponse.AuthenticationResponse;
import com.example.cruise.Entity.Login;
import com.example.cruise.Entity.RegisterEntity;
import com.example.cruise.Repository.LoginRepository;
import com.example.cruise.Repository.RegisterRepository;
import java.util.List;

@Service
public class AuthenticationService {
    private final RegisterRepository repository;
    private final LoginRepository loginRepository;
    private final PasswordEncoder passwordEncoder;
    private final JWTService jwtservice;
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(RegisterRepository repository,
                                  LoginRepository loginRepository,
                                  PasswordEncoder passwordEncoder,
                                  JWTService jwtservice,
                                  AuthenticationManager authenticationManager) {
        this.repository = repository;
        this.loginRepository = loginRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtservice = jwtservice;
        this.authenticationManager = authenticationManager;
    }

    public AuthenticationResponse register(RegisterDtoRequest request) {
        var user = RegisterEntity.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole())
                .build();
        repository.save(user);
        var jwtToken = jwtservice.generateToken(user);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );
        var user = repository.findByUsername(request.getUsername())
                .orElseThrow();

        var jwtToken = jwtservice.generateToken(user);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public List<RegisterEntity> getRegister() {
        return repository.findAll();
    }

    public void updateRegister(RegisterEntity registerEntity) {
        repository.save(registerEntity);
    }

    public void deleteRegister(int id) {
        repository.deleteById(id);
    }

    public List<Login> getUser() {
        return loginRepository.findAll();
    }

    public void updateUser(Login login) {
        loginRepository.save(login);
    }

    public void deleteUser(int userId) {
        loginRepository.deleteById(userId);
    }
}
