import "../assets/styles.css";

function Carrito() {
    return (
        <div className="carrito">
        <h1>Tu Carrito</h1>
        <section className="carrito-items">
            <div className="carrito-item">
            <img src="/assets/fotos/productos/controlxbox.jpeg" alt="Xbox Controller" />
            <div>
                <h3>Control Xbox</h3>
                <p>$59.990</p>
            </div>
            </div>
            <div className="carrito-item">
            <img src="/assets/fotos/productos/controlps2.jpeg" alt="PS2 Controller" />
            <div>
                <h3>Control PS2</h3>
                <p>$29.990</p>
            </div>
            </div>
        </section>
        <button className="checkout-btn">Finalizar compra</button>
        </div>
    );
}

export default Carrito;
