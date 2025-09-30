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
        <section className="container" class="catalogo">
            <h1>Catalogo</h1>


            <div class="catalogo-busacador">
                <input type="text" className="form-control" placeholder="Silla, Mouse, Polera..." value={busqueda} onChange={(y) => setBusqueda(y.target.value)}/>
            </div>

            <div class="categoria-body">
                {categorias.map((cat) => (
                <button class="lista-categoria categorias" key={cat.key}
                    className={`btn ${categoria === cat.key ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setCategoria(cat.key)}>
                {cat.label}
                </button>
                ))}
            </div>

            <div className="row" class="productos">
                {productosFiltrados.length === 0 ? (
                <p>No se encontró el producto</p>
                ) : (
                productosFiltrados.map((p) => (
                    <div class="producto-item" key={p.id}>
                        <div>
                            <Link to={`/producto/${p.id}`}>
                            <img src={p.imagen} alt={p.nombre} width="200" height="200"/>
                            </Link>
                            <div className="card-body">
                            <Link to={`/producto/${p.id}`} className="nombre">
                            {p.nombre}
                            </Link>
                            <p>${p.precio.toLocaleString("es-CL")}</p>
                            <button>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                ))
                )}
            </div>
        </section>
    );
}
