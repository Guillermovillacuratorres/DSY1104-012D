package com.example.dsy1104_012d.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dsy1104_012d.models.entities.Vehiculo;
import com.example.dsy1104_012d.repository.VehiculoRepository;

@Service
public class VehiculoService {

    @Autowired
    private VehiculoRepository vehiculoRepository;

    public List<Vehiculo> obtenerTodo(){
        return vehiculoRepository.findAll();
    }
    
}
