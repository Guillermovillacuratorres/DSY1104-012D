package com.example.dsy1104_012d.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.dsy1104_012d.models.dto.AuthResponse;
import com.example.dsy1104_012d.models.dto.LoginRequest;
import com.example.dsy1104_012d.models.entities.Usuario;
import com.example.dsy1104_012d.repository.UsuarioRepository;
import com.example.dsy1104_012d.security.JwtService;

@Service
public class AuthService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    // devuelve false si el username ya existe
    public boolean registrar(LoginRequest request){
        if (usuarioRepository.existsByUsername(request.getUsername())) {
            return false;
        }
        Usuario usuario = new Usuario();
        usuario.setUsername(request.getUsername());
        usuario.setPassword(passwordEncoder.encode(request.getPassword()));
        usuarioRepository.save(usuario);
        return true;
    }

    // devuelve null si las credenciales no son validas
    public AuthResponse login(LoginRequest request){
        Usuario usuario = usuarioRepository.findByUsername(request.getUsername()).orElse(null);
        if (usuario == null || !passwordEncoder.matches(request.getPassword(), usuario.getPassword())) {
            return null;
        }
        String token = jwtService.generarToken(usuario.getUsername());
        return new AuthResponse(token, "Bearer", jwtService.getExpiracionSegundos());
    }

}
