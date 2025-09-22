import '../assets/styles.css';

function Producto() {
    return (
        <div className="producto-detalle">
        <h1>Detalle del Producto</h1>
        <div className="producto-info">
            <img src="/assets/fotos/productos/SecretlabTITANChair.jpeg" alt="Silla Gamer" />
            <div>
            <h2>Silla Gamer Secretlab TITAN</h2>
            <p>
                Ergonomía de lujo para tus sesiones de juego más largas.
            </p>
            <p><strong>Precio:</strong> $399.990</p>
            <button>Añadir al carrito</button>
            </div>
        </div>
        </div>
    );
}

export default Producto;
