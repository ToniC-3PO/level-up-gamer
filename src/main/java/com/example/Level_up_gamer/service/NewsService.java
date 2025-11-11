package com.example.Level_up_gamer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Level_up_gamer.model.News;
import com.example.Level_up_gamer.repository.NewsRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class NewsService {

    @Autowired
    private NewsRepository eventosRepository;

    public List<News> findAll() {
        return eventosRepository.findAll();
    }

    public News findById(Long id) {
        return eventosRepository.findById(id).get();
    }

    public News save(News eventos) {
        return eventosRepository.save(eventos);
    }

    public void delete(Long id) {
        eventosRepository.deleteById(id);
    }
}
