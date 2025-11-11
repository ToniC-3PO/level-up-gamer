package com.example.Level_up_gamer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Level_up_gamer.model.Blogs;
import com.example.Level_up_gamer.repository.BlogsRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class BlogsService {

    @Autowired
    private BlogsRepository blogsRepository;

    public List<Blogs> findAll() {
        return blogsRepository.findAll();
    }

    public Blogs findById(Long id) {
        return blogsRepository.findById(id).get();
    }

    public Blogs save(Blogs blogs) {
        return blogsRepository.save(blogs);
    }

    public void delete(Long id) {
        blogsRepository.deleteById(id);
    }
}
