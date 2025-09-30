import "../assets/styles.css";
import productos from "../datos/dataP";

const productosDestacados = [
    { img: "/fotos/audifonosHyperx.jpeg", nombre: "Auriculares Gamer HyperX Cloud II", precio: "$79.990" },
    { img: "/fotos/LogitechMouse.jpeg", nombre: "Mouse Gamer Logitech G502 HERO", precio: "$49.99" },
    { img: "/fotos/PCASUSStrix.jpeg", nombre: "PC ASU", precio: "$59.990" },
    { img: "/fotos/Asus.jpeg", nombre: "PC ASU", precio: "$149.990" },
];

const productosRecomendados = [
    { img: "/fotos/controlxbox.jpeg", nombre: "Control Xbox", precio: "$49.990" },
    { img: "/fotos/catan.jpeg", nombre: "Catan", precio: "$29.990" },
    { img: "/fotos/wii.jpeg", nombre: "Wii", precio: "$59.990" },
    { img: "/fotos/SillaGamerThunder.jpeg", nombre: "Silla Gamer", precio: "$149.990" },
];

export default function Productos() {
    return (
        <div>
        <section className="recomendados container-fluid">
            <h2>Destacados</h2>
            <div className="slider d-flex justify-content-center">
            {productosDestacados.map((producto, i) => (
                <div className="producto-item item cursor-target" key={i}>
                <a href="producto.html" className="nombre">
                    <img
                    src={producto.img}
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
                <div className="producto-item item cursor-target" key={i}>
                <a href="/producto.html" className="nombre">
                    <img
                    src={producto.img}
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