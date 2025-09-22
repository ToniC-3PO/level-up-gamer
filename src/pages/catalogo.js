import "../assets/styles.css";

function Catalogo() {
    return (
        <div className="catalogo">
        <h1>Catálogo de Productos</h1>
        <section className="productos-grid">
            <div className="producto-card">
            <img src="/assets/fotos/productos/catan.jpeg" alt="Catan" />
            <h3>Catan</h3>
            <p>Juego de mesa estratégico.</p>
            </div>
            <div className="producto-card">
            <img src="/assets/fotos/productos/Carcassonne.jpeg" alt="Carcassonne" />
            <h3>Carcassonne</h3>
            <p>Construye ciudades medievales.</p>
            </div>
            <div className="producto-card">
            <img src="/assets/fotos/productos/SECRETLAB TITAN 2020 Dark Knight Edition.jpeg" alt="Silla Secretlab" />
            <h3>Secretlab Titan 2020</h3>
            <p>Silla gamer de lujo.</p>
            </div>
        </section>
        </div>
    );
}

export default Catalogo;
