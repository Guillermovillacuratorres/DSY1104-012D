package com.example.dsy1104_012d.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "*")
@RestController
public class HomeController {

@GetMapping({"/api", "/api/"})
    public Map<String, String> inicio(){
        return Map.of(
            "mensaje", "microservicio Vehiculos",
            "version", "2.0"
        );
    }

}
