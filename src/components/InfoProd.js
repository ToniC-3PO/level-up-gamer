import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import productos from "../datos/dataP";

export default function InfoProd() {
    const { id } = useParams();
    const producto = productos.find((p) => p.id === parseInt(id));
    const [cantidad, setCantidad] = useState(1);
    const [comentarios, setComentarios] = useState([
        { usuario: "Usuario1", texto: "¡Excelente producto, llegó rápido!", rating: 4 },
        { usuario: "Usuario2", texto: "Buen precio y calidad, lo recomiendo.", rating: 4 },
    ]);


    const [nuevoRating, setNuevoRating] = useState(0);
    const [nuevoComentario, setNuevoComentario] = useState("");

    if (!producto) return <p>Producto no encontrado</p>;

    const handleAgregarComentario = (e) => {
        e.preventDefault();
        if (!nuevoComentario.trim()) return;
        setComentarios([
        ...comentarios,
        { usuario: "Anónimo", texto: nuevoComentario, rating: nuevoRating || 5 },
        ]);
        setNuevoComentario("");
        setNuevoRating(0);
    };

    return (
        <section className="container-fluid">
        <div className="more-blogs">
            <Link className="volver-link cursor-target" to="/catalogo">Catálogo</Link>
        </div>

        <div className="producto-detalle">
            <div className="imagen-producto">
            <img src={producto.imagen} alt={producto.nombre} />
            </div>

            <div className="info-producto">
            <h1>{producto.nombre}</h1>
            <p className="descripcion">{producto.descripcion}</p>
            <p className="precio">${producto.precio.toLocaleString("es-CL")}</p>
            <p className="puntos">{producto.puntos} puntos Level-Up</p>

            <div className="cantidad-compra">
                <button onClick={() => setCantidad((c) => Math.max(1, c - 1))}>-</button>
                <span id="cantidad">{cantidad}</span>
                <button onClick={() => setCantidad((c) => c + 1)}>+</button>
            </div>

            <button className="cursor-target" id="agregar-carrito" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Agregar al carrito </button>
            </div>
        </div>

        <div className="calificaciones-comentarios">
            <h3>Calificaciones</h3>
            <p>
            {"⭐".repeat(producto.rating)}
            {"☆".repeat(5 - producto.rating)} ({producto.rating}/5)
            </p>

            <h3>Comentarios</h3>
            {comentarios.map((c, i) => (
            <div key={i} className="comentario">
                <strong>{c.usuario}:</strong> {c.texto}
                <p>{"⭐".repeat(c.rating)}{"☆".repeat(5 - c.rating)}</p>
            </div>
            ))}
        </div>

        <div className="cursor-target">
            <form onSubmit={handleAgregarComentario} className="agregar-comentario container-fluid">
            <label htmlFor="nuevo-comentario">Deja tu comentario:</label>
            <div className="puntaje">
            {[5, 4, 3, 2, 1].map((star) => (
                <span key={star} className="stars" style={{color: star <= nuevoRating ? "lime" : "gray", fontSize: "30px"}} onClick={() => setNuevoRating(star)}
                >
                ★
                </span>
            ))}
            </div>
            <textarea
                id="nuevo-comentario"
                rows="3"
                placeholder="Escribe tu comentario aquí..."
                value={nuevoComentario}
                onChange={(e) => setNuevoComentario(e.target.value)}
            />
            <button className="cursor-target" type="submit">Publicar</button>
            </form>
        </div>
        </section>
    );
}