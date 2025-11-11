package com.example.Level_up_gamer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Level_up_gamer.model.News;

public interface NewsRepository extends JpaRepository<News, Long> {

}
