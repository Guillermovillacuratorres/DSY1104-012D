package com.example.dsy1104_012d.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dsy1104_012d.models.dto.AuthResponse;
import com.example.dsy1104_012d.models.dto.LoginRequest;
import com.example.dsy1104_012d.services.AuthService;


@CrossOrigin(origins = "*")
@RequestMapping("/api/auth")
@RestController
public class AuthController {

    @Autowired
    private AuthService authService;


    @PostMapping("/registro")
    public ResponseEntity<Map<String, String>> registrar(@RequestBody LoginRequest request){
        if (!authService.registrar(request)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("mensaje", "El usuario ya existe"));
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of("mensaje", "Usuario registrado"));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request){
        AuthResponse respuesta = authService.login(request);
        if (respuesta == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        return ResponseEntity.ok(respuesta);
    }


}
