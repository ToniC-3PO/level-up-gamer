package com.example.Level_up_gamer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Level_up_gamer.model.Eventos;
import com.example.Level_up_gamer.repository.EventosRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class EventosService {

    @Autowired
    private EventosRepository eventosRepository;

    public List<Eventos> findAll() {
        return eventosRepository.findAll();
    }

    public Eventos findById(Long id) {
        return eventosRepository.findById(id).get();
    }

    public Eventos save(Eventos eventos) {
        return eventosRepository.save(eventos);
    }

    public void delete(Long id) {
        eventosRepository.deleteById(id);
    }
}
