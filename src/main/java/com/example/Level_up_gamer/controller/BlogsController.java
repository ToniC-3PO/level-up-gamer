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

import com.example.Level_up_gamer.model.Blogs;
import com.example.Level_up_gamer.service.BlogsService;

@RestController
@RequestMapping("/api/v1/blogs")
public class BlogsController {

    @Autowired
    private BlogsService blogsService;

    @GetMapping
    public ResponseEntity<List<Blogs>> listar() {
        List<Blogs> blogs  = blogsService.findAll();
        if (blogs.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(blogs);
    }

    @PostMapping
    public ResponseEntity<Blogs> guardar(@RequestBody Blogs blogs) {
        Blogs blogsNuevo = blogsService.save(blogs);
        return ResponseEntity.status(HttpStatus.CREATED).body(blogsNuevo);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Blogs> buscar(@PathVariable Long id) {
        try {
            Blogs blogs = blogsService.findById(id);
            return ResponseEntity.ok(blogs);
        } catch ( Exception e ) {
            return  ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Blogs> actualizar(@PathVariable Long id, @RequestBody Blogs blogs) {
        try {
            Blogs blo = blogsService.findById(id);
            
            blo.setTitulo(blogs.getTitulo());
            blo.setFecha(blogs.getFecha());
            blo.setDescripcion(blogs.getDescripcion());
            blo.setImg(blogs.getImg());
            blo.setContenido(blogs.getContenido());
            
            blogsService.save(blo);
            return ResponseEntity.ok(blo);
        } catch ( Exception e ) {
            return  ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Long id) {
        try {
            blogsService.delete(id);
            return ResponseEntity.noContent().build();
        } catch ( Exception e ) {
            return  ResponseEntity.notFound().build();
        }
    }
}
