import { Link } from "react-router-dom";

export default function SliderItem({ producto }) {
    return (
        <div className="producto-item item cursor-target">
        <Link to={`/producto/${producto.id}`} className="nombre">
            <img src={producto.imagen} alt={producto.nombre} width="200" height="200" />
            <h3>{producto.nombre}</h3>
            <p>${producto.precio.toLocaleString("es-CL")}</p>
        </Link>
        </div>
    );
}
