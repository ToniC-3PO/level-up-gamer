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

import com.example.Level_up_gamer.model.News;
import com.example.Level_up_gamer.service.NewsService;

@RestController
@RequestMapping("/api/v1/news")
public class NewsController {

    @Autowired
    private NewsService newsService;

    @GetMapping
    public ResponseEntity<List<News>> listar() {
        List<News> news  = newsService.findAll();
        if (news.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(news);
    }

    @PostMapping
    public ResponseEntity<News> guardar(@RequestBody News news) {
        News newsNuevo = newsService.save(news);
        return ResponseEntity.status(HttpStatus.CREATED).body(newsNuevo);
    }

    @GetMapping("/{id}")
    public ResponseEntity<News> buscar(@PathVariable Long id) {
        try {
            News news = newsService.findById(id);
            return ResponseEntity.ok(news);
        } catch ( Exception e ) {
            return  ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<News> actualizar(@PathVariable Long id, @RequestBody News news) {
        try {
            News ne = newsService.findById(id);

            ne.setTitulo(news.getTitulo());
            ne.setFecha(news.getFecha());
            ne.setDescripcion(news.getDescripcion());
            ne.setImg(news.getImg());
            ne.setContenido(news.getContenido());

            
            
            
            newsService.save(ne);
            return ResponseEntity.ok(ne);
        } catch ( Exception e ) {
            return  ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Long id) {
        try {
            newsService.delete(id);
            return ResponseEntity.noContent().build();
        } catch ( Exception e ) {
            return  ResponseEntity.notFound().build();
        }
    }
}
