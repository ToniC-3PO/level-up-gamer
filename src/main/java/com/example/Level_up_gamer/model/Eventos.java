package com.example.Level_up_gamer.model;

import java.sql.Date;
import java.time.LocalTime;

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
@Table(name = "eventos")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Eventos     {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_eventos;
    
    @Column(unique=true, nullable=false)
    private String titulo;

    @Column(unique=true, nullable=false)
    private Date fecha;

    @Column(unique=true, nullable=false)
    private LocalTime hora;

    @Column(unique=true, nullable=false)
    private String descripcion;

    @Column(unique=true, nullable=false)
    private String img;

    @Column(unique=true, nullable=false)
    private String detalle;
    

}

