package com.example.dsy1104_012d.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dsy1104_012d.models.entities.Vehiculo;
import com.example.dsy1104_012d.services.VehiculoService;


@RequestMapping("/vehiculo")
@RestController
public class VehiculoController {
    
    @Autowired
    private VehiculoService vehiculoService;


    @GetMapping("")
    public List<Vehiculo> obtenerTodosLosVehiculos(){
        return vehiculoService.obtenerTodo();
    }


}
