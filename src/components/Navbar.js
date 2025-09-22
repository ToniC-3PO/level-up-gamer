/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/fotos/Logo_full.png";
import carro from "../assets/fotos/icons/carrito.png";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" width="49" height="28" className="align-text-top" />
            </a>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link active" href="/">Inicio</a></li>
                <li className="nav-item"><a className="nav-link active" href="/Nosotros">Sobre Nosotros</a></li>
                <li className="nav-item"><a className="nav-link active" href="https://wa.me/56225555555">Servicio Técnico</a></li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Novedades gamer
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/News&Blogs">Principales</a></li>
                    <li><a className="dropdown-item" href="/blogs">Blogs</a></li>
                    <li><a className="dropdown-item" href="/noticias">Noticias</a></li>
                    <li><a className="dropdown-item" href="/eventos">Eventos</a></li>
                </ul>
                </li>
                <li className="nav-item"><a className="nav-link active" href="/Catalogo">Catálogo</a></li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" href="/carrito">
                    <img src={carro} alt="Carrito" />
                </a>
                </li>
                <li className="nav-item"><a className="nav-link active" href="/login">Iniciar sesión</a></li>
            </ul>
            </div>
        </div>
        </nav>
    );
}