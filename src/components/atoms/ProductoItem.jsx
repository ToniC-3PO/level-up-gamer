import { Link } from "react-router-dom";
import agregarCarrito from "../../assets/utils/agregarCarrito";

export default function ProductoItem({ producto, carrito, updateCarrito }) {
    return (
        <div className="producto-item cursor-target" key={producto.id}>
        <div>
            <Link to={`/producto/${producto.id}`}>
            <img src={producto.imagen} alt={producto.nombre} width="200" height="200" />
            </Link>
            <div className="card-body cursor-target">
            <Link to={`/producto/${producto.id}`} className="nombre">
                {producto.nombre}
            </Link>
            <p>${producto.precio.toLocaleString("es-CL")}</p>
            <button
                className="cursor-target"
                id="agregar-carrito"
                onClick={() => agregarCarrito(producto, 1, carrito, updateCarrito)}
            >
                Agregar al carrito
            </button>
            </div>
        </div>
        </div>
    );
}