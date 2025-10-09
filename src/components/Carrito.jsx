import { useState, useEffect } from "react";

export default function Carrito() {
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        const carritoSave = JSON.parse(localStorage.getItem("carrito")) || []; setCarrito(carritoSave);
        }, []);

    const updateCarrito = (newPCarrito) => {
        setCarrito(newPCarrito);
        localStorage.setItem("carrito", JSON.stringify(newPCarrito));
    };

    return (
        <section class="container-fluid">
            <div id="carrito">
                {carrito.length === 0 ? (
                <p>Tu carrito está vacío</p>
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
                        <button id="vaciar">Vaciar</button>
                    </div>
                    )}
            </div>
        </section>
    );
}