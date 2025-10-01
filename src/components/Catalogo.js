import { useState } from "react";
import productos from "../datos/dataP";
import { Link } from "react-router-dom";

export default function Catalogo() {
    const [busqueda, setBusqueda] = useState("");
    const [categoria, setCategoria] = useState("all");

    const categorias = [
        { key: "all", label: "Todo" },
        { key: "juegos-Mesa", label: "Juegos de Mesa" },
        { key: "accesorios", label: "Accesorios" },
        { key: "consolas", label: "Consolas" },
        { key: "computadores", label: "Computadores Gamers" },
        { key: "sillas", label: "Sillas Gamers" },
        { key: "mouse", label: "Mouse" },
        { key: "mousepad", label: "Mousepad" },
        { key: "poleras", label: "Poleras Gamers Personalizadas" },
    ];


    const productosFiltrados = productos.filter((x) => {
        const CCategoria = categoria === "all" || x.categoria === categoria;
        const CBusqueda = x.nombre.toLowerCase().includes(busqueda.toLowerCase());
        return CCategoria && CBusqueda;
    });

    return (
        <section className="catalogo">
            <h1>Catalogo</h1>


            <div className="catalogo-busacador">
                <input type="text" className="form-control cursor-target" placeholder="Silla, Mouse, Polera..." value={busqueda} onChange={(y) => setBusqueda(y.target.value)}/>
            </div>

            <div className="categoria-body">
                {categorias.map((cat) => (
                <button key={cat.key}
                    className={`lista-categoria categorias cursor-target btn ${categoria === cat.key ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setCategoria(cat.key)}>
                {cat.label}
                </button>
                ))}
            </div>

            <div className="productos">
                {productosFiltrados.length === 0 ? (
                <p>No se encontró el producto</p>
                ) : (
                productosFiltrados.map((p) => (
                    <div className="producto-item cursor-target" key={p.id}>
                        <div>
                            <Link to={`/producto/${p.id}`}>
                            <img src={p.imagen} alt={p.nombre} width="200" height="200"/>
                            </Link>
                            <div className="card-body cursor-target">
                            <Link to={`/producto/${p.id}`} className="nombre">
                            {p.nombre}
                            </Link>
                            <p>${p.precio.toLocaleString("es-CL")}</p>
                            <button className="cursor-target">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                ))
                )}
            </div>
        </section>
    );
}
