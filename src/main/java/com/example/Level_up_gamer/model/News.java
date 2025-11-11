package com.example.Level_up_gamer.model;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "news")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class News {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_news;
    
    @Column(unique=true, nullable=false)
    private String titulo;

    @Column(unique=true, nullable=false)
    private Date fecha;

    @Column(unique=true, nullable=false)
    private String descripcion;

    @Column(unique=true, nullable=false)
    private String img;

    @Column(unique=true, nullable=false)
    private String contenido;

}

