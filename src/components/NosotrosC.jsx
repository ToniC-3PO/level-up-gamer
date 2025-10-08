export default function Nosotros() {
    return (
        <section className="main-container" id="nosotros">
        <div className="logo-container">
            <label>
            <img
                src={require("../assets/fotos/Logo_name.png")} alt="Logo name"
            />
            </label>
        </div>

        <div className="contenido-nosotros">
            <div className="contenido">
            <h2>Sobre Nosotros</h2>
                <p>
                    Somos una tienda online dedicada a satisfacer las necesidades de nuestros entusiastas de los
                    videojuegos en Chile. En Level-Up Gamer ofrecemos una amplia gama de productos para gamers,
                    desde consolas y accesorios hasta computadores y sillas especializada, aunque no contamos con una
                    ubicación física, realiza despachos a todo el país.
                </p>
            </div>

            <div className="contenido">
            <h2>Misión</h2>
                <p>
                    Nuestra misión es proporcionar productos de alta calidad para gamers en todo Chile, ofreciendo
                    una experiencia de compra única y personalizada, con un enfoque en la satisfacción del cliente
                    y el crecimiento de la comunidad gamer.
                </p>
            </div>

            <div className="contenido">
            <h2>Visión</h2>
                <p>
                    Queremos ser la tienda online líder en productos para gamers en Chile, reconocida por su innovación, 
                    servicio al cliente excepcional, y un programa de fidelización basado en gamificación que recompense a
                    nuestros clientes más fieles.
                </p>
            </div>

            <div className="contenido">
            <h2>Contáctanos</h2>
                <p>
                    Queremos ser la tienda online líder en productos para gamers en Chile, reconocida por su innovación, 
                    servicio al cliente excepcional, y un programa de fidelización basado en gamificación que recompense a
                    nuestros clientes más fieles.
                    <br />
                    Puedes escribirnos a nuestro correo{" "}
                    <a href="mailto:info@levelupgamer.com" className="cursor-target">info@levelupgamer.com</a>{" "}
                    o si necesitas ayuda contamos con un servicio técnico al{" "}
                    <a href="https://wa.me/56225555555" target="_blank" className="footer-link cursor-target" rel="noreferrer">+56225555555</a>.
                </p>
            </div>
        </div>
        </section>
    );
}
