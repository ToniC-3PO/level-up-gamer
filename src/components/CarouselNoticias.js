import React from "react";
import "../assets/styles.css";

export default function CarouselNoticias() {
    return (
        <div className="container-fluid">
        <div id="carouselNoticias" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselNoticias" data-bs-slide-to="0" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselNoticias" data-bs-slide-to="1" className="active" aria-current="true" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselNoticias" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">
            <div className="carousel-item" data-bs-interval="4000">
                <a href="/noticias">
                <img
                    src={require("../assets/fotos/news/onemilliondeltanews.jpg")}
                    className="d-block w-100 H-100 img-carousel"
                    alt="Noticia 1"
                />
                <div className="carousel-caption d-block">
                    <h6 className="fs-6">Revisa las ultimas noticias</h6>
                    <p className="small">1M de ventas MGS Delta : Snake Eater</p>
                </div>
                </a>
            </div>

            <div className="carousel-item active" data-bs-interval="4000">
                <a href="/Catalogo">
                <img
                    src={require("../assets/fotos/productos/headset-banner.jpeg")}
                    className="d-block w-100 img-carousel"
                    alt="Producto nuevo"
                />
                <div className="carousel-caption d-block">
                    <h6>Nuevos productos en el catálogo</h6>
                    <p className="small">Revisa lo último en hardware gamer.</p>
                </div>
                </a>
            </div>

            <div className="carousel-item" data-bs-interval="4000">
                <a href="/eventos">
                <img
                    src={require("../assets/fotos/eventos/banner-eventos.jpeg")}
                    className="d-block w-100 img-carousel"
                    alt="Evento gamer"
                />
                <div className="carousel-caption d-block">
                    <h6 className="fs-6">Eventos gamer este mes</h6>
                    <p className="small">Asiste y gana puntos, no olvides revisar las fechas.</p>
                </div>
                </a>
            </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselNoticias" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselNoticias" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
        </div>
    );
}