import React from "react";
import "../assets/styles.css";

export default function Hero() {
    return (
        <header className="hero">
        <div className="hero-content">
            <h1>Bienvenido a Level-Up Gamer</h1>
            <p>Explora noticias, blogs, eventos y productos recomendados</p>
            <a href="/Catalogo" className="btn-hero">Ver Catálogo</a>
        </div>
        </header>
    );
}
