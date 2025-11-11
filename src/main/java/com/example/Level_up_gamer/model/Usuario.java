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
@Table(name = "usuario")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_usuario;

    @Column(unique=true, nullable=false)
    private String correo;

    @Column(unique=true, nullable=false)
    private String contraseña;

    @Column(unique=true, nullable=false)
    private Date fecha;

    @Column(unique=true, nullable=false)
    private String code;

    @Column(unique=true, nullable=false)
    private Integer point;

    @Column(unique=true, nullable=false)
    private String tipo;


}

    