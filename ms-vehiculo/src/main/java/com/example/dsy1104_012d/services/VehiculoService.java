package com.example.dsy1104_012d.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dsy1104_012d.models.entities.Vehiculo;
import com.example.dsy1104_012d.repository.CategoriaRepository;
import com.example.dsy1104_012d.repository.VehiculoRepository;

@Service
public class VehiculoService {

    @Autowired
    private VehiculoRepository vehiculoRepository;

    @Autowired
    private CategoriaRepository categoriaRepository;

    public List<Vehiculo> obtenerTodo(){
        return vehiculoRepository.findAll();
    }

    public Vehiculo obtenerPorId(int id){
        return vehiculoRepository.findById(id).orElse(null);
    }

    public Vehiculo guardar(Vehiculo vehiculo){
        vehiculo.setCategoria(categoriaRepository.findById(vehiculo.getCategoria().getIdCategoria()).orElse(null));
        return vehiculoRepository.save(vehiculo);
    }

    public Vehiculo actualizar(int id, Vehiculo vehiculo){
        Vehiculo existente = vehiculoRepository.findById(id).orElse(null);
        if (existente == null) {
            return null;
        }
        existente.setMarca(vehiculo.getMarca());
        existente.setColor(vehiculo.getColor());
        existente.setCategoria(categoriaRepository.findById(vehiculo.getCategoria().getIdCategoria()).orElse(null));
        return vehiculoRepository.save(existente);
    }

    public boolean eliminar(int id){
        if (!vehiculoRepository.existsById(id)) {
            return false;
        }
        vehiculoRepository.deleteById(id);
        return true;
    }

}
