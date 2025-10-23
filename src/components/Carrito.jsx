import { Link } from "react-router-dom";
import useCarrito from "../assets/utils/useCarrito";

export default function Carrito() {
    const [carrito, updateCarrito] = useCarrito();

    const vaciarCarrito = () => updateCarrito([]);

    return (
        <section class="container-fluid">
            <div id="carrito">
                {carrito.length === 0 ? (
                    <section className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
                            <div
                                className="text-center p-5">
                                <p className="mb-4">
                                    Parece que tu carrito está vacío, prueba visitar nuestro cátalogo.
                                </p>
                                <Link to="/catalogo" type="button" className="btn btn-primary cursor-target">Cátalogo</Link>
                            </div>
                    </section>
                ) : (
                carrito.map((p) => (
                    <div className="tarjeta-producto" key={p.id}>
                        <img src={p.imagen} alt={p.nombre} width="200" height="200" />
                        <h3>{p.nombre}</h3>
                        <span>${p.precio.toLocaleString("es-CL")}</span>
                        <div>
                            <button>-</button>
                            <span className="cantidad">{p.cantidad}</span>
                            <button>+</button>
                        </div>
                    </div>
                ))
                )}

                {carrito.length > 0 && (
                    <div id="total">
                        <p id="total-u">Total unidades: <strong>X</strong></p>
                        <p id="total-p">Total precio: <strong></strong></p>
                        <button>Pagar</button>
                        <button id="vaciar" onClick={vaciarCarrito}>Vaciar</button>
                    </div>
                    )}
            </div>
        </section>
    );
}