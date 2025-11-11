package com.example.Level_up_gamer.model;

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
@Table(name = "producto")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_producto;

    @Column(unique=true, nullable=false)
    private String nombre;
    
    @Column(unique=true, nullable=false)
    private Double precio;

    @Column(unique=true, nullable=false)
    private String categoria;
    
    @Column(unique=true, nullable=false)
    private String img;

    @Column(unique=true, nullable=false)
    private String descripcion;

    @Column(unique=true, nullable=false)
    private Integer puntos;

    @Column(unique=true, nullable=false)
    private Integer rating;


    
    

}

