import React from "react";
import "../assets/styles.css";

const productosDestacados = [
    { img: "audifonosHyperx.jpeg", nombre: "Auriculares Gamer HyperX Cloud II", precio: "$79.990" },
    { img: "LogitechMouse.jpeg", nombre: "Mouse Gamer Logitech G502 HERO", precio: "$49.99" },
    { img: "PCASUSStrix.jpeg", nombre: "PC ASU", precio: "$59.990" },
    { img: "Asus.jpeg", nombre: "PC ASU", precio: "$149.990" },
];

const productosRecomendados = [
    { img: "controlxbox.jpeg", nombre: "Control Xbox", precio: "$49.990" },
    { img: "catan.jpeg", nombre: "Catan", precio: "$29.990" },
    { img: "wii.jpeg", nombre: "Wii", precio: "$59.990" },
    { img: "SillaGamerThunder.jpeg", nombre: "Silla Gamer", precio: "$149.990" },
];

export default function Productos() {
    return (
        <div>
        <section className="recomendados container-fluid">
            <h2>Destacados</h2>
            <div className="slider d-flex justify-content-center">
            {productosDestacados.map((producto, i) => (
                <div className="producto-item item" key={i}>
                <a href="producto.html" className="nombre">
                    <img
                    src={require(`../assets/fotos/productos/${producto.img}`)}
                    alt={producto.nombre}
                    width="200"
                    height="200"
                    />
                    <h3>{producto.nombre}</h3>
                    <p>{producto.precio}</p>
                </a>
                </div>
            ))}
            </div>
        </section>

        <section className="recomendados container-fluid">
            <h2>Recomendados para ti</h2>
            <div className="slider d-flex justify-content-center">
            {productosRecomendados.map((producto, i) => (
                <div className="producto-item item" key={i}>
                <a href="producto.html" className="nombre">
                    <img
                    src={require(`../assets/fotos/productos/${producto.img}`)}
                    alt={producto.nombre}
                    width="200"
                    height="200"
                    />
                    <h3>{producto.nombre}</h3>
                    <p>{producto.precio}</p>
                </a>
                </div>
            ))}
            </div>
        </section>
        </div>
    );
}