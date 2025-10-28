import { Link } from "react-router-dom";
import useCarrito from "../../assets/utils/useCarrito";
import calcularT from "../../assets/utils/carritoT";

export default function Carrito() {
    const [carrito, updateCarrito] = useCarrito();

    const vaciarCarrito = () => updateCarrito([]);

    const { totalU, totalP } = calcularT(carrito);

    const mas = (id) => {
        updateCarrito(carrito.map(p => p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p));
    };

    const menos = (id) => {
        updateCarrito(carrito.map(p => p.id === id && p.cantidad > 1 ? { ...p, cantidad: p.cantidad - 1 } : p));
    };
    return (
        <section className="container-fluid">
            <div id="carrito" className="d-flex flex-column gap-3 mx-auto" style={{ maxWidth: "800px" }}>
                {carrito.length === 0 ? (
                    <section className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
                        <div className="text-center p-5">
                            <p className="mb-4">
                                Parece que tu carrito está vacío, prueba visitar nuestro cátalogo.
                            </p>
                            <Link to="/catalogo" type="button" className="btn btn-primary cursor-target">Cátalogo</Link>
                        </div>
                    </section>
                ) : (
                    carrito.map((p) => (
                        <div className="tarjeta-producto" key={p.id}>
                            <img src={p.imagen} alt={p.nombre} />
                            <h3>{p.nombre}</h3>
                            <span>${p.precio.toLocaleString("es-CL")}</span>
                            <div>
                                <button onClick={() => menos(p.id)}>-</button>
                                <span className="cantidad">{p.cantidad}</span>
                                <button onClick={() => mas(p.id)}>+</button>
                            </div>
                        </div>
                    ))
                )}

                {carrito.length > 0 && (
                    <div id="total">
                        <p id="total-u">Total unidades: <strong>{totalU}</strong></p>
                        <p id="total-p">Total precio: <strong>${totalP.toLocaleString("es-CL")}</strong></p>
                        <button>Pagar</button>
                        <button id="vaciar" onClick={vaciarCarrito}>Vaciar</button>
                    </div>
                )}
            </div>
        </section>
    );
}