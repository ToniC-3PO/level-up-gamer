package com.example.Level_up_gamer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Level_up_gamer.model.Eventos;
import com.example.Level_up_gamer.service.EventosService;

@RestController
@RequestMapping("/api/v1/eventos")
public class EventosController {

    @Autowired
    private EventosService eventosService;

    @GetMapping
    public ResponseEntity<List<Eventos>> listar() {
        List<Eventos> eventos  = eventosService.findAll();
        if (eventos.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(eventos);
    }

    @PostMapping
    public ResponseEntity<Eventos> guardar(@RequestBody Eventos eventos) {
        Eventos eventosNuevo = eventosService.save(eventos);
        return ResponseEntity.status(HttpStatus.CREATED).body(eventosNuevo);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Eventos> buscar(@PathVariable Long id) {
        try {
            Eventos eventos = eventosService.findById(id);
            return ResponseEntity.ok(eventos);
        } catch ( Exception e ) {
            return  ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Eventos> actualizar(@PathVariable Long id, @RequestBody Eventos eventos) {
        try {
            Eventos eve = eventosService.findById(id);

            eve.setTitulo(eventos.getTitulo());
            eve.setFecha(eventos.getFecha());
            eve.setHora(eventos.getHora());
            eve.setDescripcion(eventos.getDescripcion());
            eve.setImg(eventos.getImg());
            eve.setDetalle(eventos.getDescripcion());
            
            
            
            eventosService.save(eve);
            return ResponseEntity.ok(eve);
        } catch ( Exception e ) {
            return  ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Long id) {
        try {
            eventosService.delete(id);
            return ResponseEntity.noContent().build();
        } catch ( Exception e ) {
            return  ResponseEntity.notFound().build();
        }
    }
}
