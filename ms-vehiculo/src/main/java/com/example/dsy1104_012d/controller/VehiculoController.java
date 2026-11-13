package com.example.dsy1104_012d.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dsy1104_012d.models.entities.Vehiculo;
import com.example.dsy1104_012d.services.VehiculoService;


@CrossOrigin(origins = "*")
@RequestMapping("/api/vehiculo")
@RestController
public class VehiculoController {

    @Autowired
    private VehiculoService vehiculoService;


    @GetMapping("")
    public List<Vehiculo> obtenerTodosLosVehiculos(){
        return vehiculoService.obtenerTodo();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Vehiculo> obtenerVehiculoPorId(@PathVariable int id){
        Vehiculo vehiculo = vehiculoService.obtenerPorId(id);
        if (vehiculo == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(vehiculo);
    }

    @PostMapping("")
    public ResponseEntity<Vehiculo> crearVehiculo(@RequestBody Vehiculo vehiculo){
        return ResponseEntity.status(HttpStatus.CREATED).body(vehiculoService.guardar(vehiculo));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Vehiculo> actualizarVehiculo(@PathVariable int id, @RequestBody Vehiculo vehiculo){
        Vehiculo actualizado = vehiculoService.actualizar(id, vehiculo);
        if (actualizado == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(actualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarVehiculo(@PathVariable int id){
        if (!vehiculoService.eliminar(id)) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.noContent().build();
    }


}
