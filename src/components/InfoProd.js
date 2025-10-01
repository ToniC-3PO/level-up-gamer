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
    const [nuevoComentario, setNuevoComentario] = useState("");

    if (!producto) return <p>Producto no encontrado</p>;

    const handleAgregarComentario = (e) => {
        e.preventDefault();
        if (!nuevoComentario.trim()) return;
        setComentarios([
        ...comentarios,
        { usuario: "Anónimo", texto: nuevoComentario, rating: 5 },
        ]);
        setNuevoComentario("");
    };

    return (
        <section className="container my-4">
        <div className="mb-3">
            <Link to="/catalogo" className="btn btn-link">← Volver al catálogo</Link>
        </div>

        <div className="row producto-detalle">
            <div className="col-md-6">
                <img src={producto.imagen} alt={producto.nombre} className="img-fluid" />
            </div>
            <div className="col-md-6">
            <h1>{producto.nombre}</h1>
            <p>{producto.descripcion}</p>
            <p className="precio">${producto.precio.toLocaleString("es-CL")}</p>
            <p className="puntos">{producto.puntos} puntos Level-Up</p>

            <div className="cantidad-compra">
                <button className="btn" onClick={() => setCantidad((c) => Math.max(1, c - 1))}>
                - </button>
                <span>{cantidad}</span>
                <button className="btn" onClick={() => setCantidad((c) => c + 1)}>
                + </button>
            </div>

            <button className="btn btn-success" id="agregar-carrito">Agregar al carrito</button>
            </div>
        </div>


        <div className="calificaciones-comentarios">
            <h3>Calificaciones</h3>
            <p>{"⭐".repeat(producto.rating)}{"☆".repeat(5 - producto.rating)} ({producto.rating}/5)</p>
        </div>

        <div className="comentarios">
            <h3>Comentarios</h3>
            {comentarios.map((c, i) => (
            <div key={i} className="mb-2">
                <strong>{c.usuario}:</strong> {c.texto}
                <p>{"⭐".repeat(c.rating)}{"☆".repeat(5 - c.rating)}</p>
            </div>
            ))}

            <form onSubmit={handleAgregarComentario} className="agregar-comentario">
            <label htmlFor="nuevo-comentario">Deja tu comentario:</label>
            <textarea
                id="nuevo-comentario"
                className="form-control"
                rows="3"
                value={nuevoComentario}
                onChange={(e) => setNuevoComentario(e.target.value)}
                placeholder="Escribe tu comentario aquí..."
            />
            <button type="submit" className="btn btn-primary mt-2">Publicar</button>
            </form>
        </div>
        </section>
    );
}
