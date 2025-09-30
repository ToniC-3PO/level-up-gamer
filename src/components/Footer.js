export default function Footer() {
    return (
        <footer>
        <section className="footer-container">
            <div className="footer-col">
            <h2 className="footer-title">Contacto</h2>
                <p>
                    Correo: <a href="mailto:info@levelupgamer.com" className="footer-link">info@levelupgamer.com</a><br />
                    Servicio Técnico: <a href="https://wa.me/56225555555" target="_blank" rel="noreferrer" className="footer-link">+56225555555</a>
                </p>
            </div>
            <div className="footer-col">
                <h2 className="footer-title">Menú</h2>
                <ul className="footer-menu">
                    <li><a href="/Nosotros" className="footer-link">Sobre nosotros</a></li>
                    <li><a href="/Catalogo" className="footer-link">Catálogo</a></li>
                    <li><a href="/noticias" className="footer-link">Noticias</a></li>
                    <li><a href="/blogs" className="footer-link">Blogs</a></li>
                    <li><a href="/eventos" className="footer-link">Eventos</a></li>
                </ul>
            </div>
        </section>
        <p className="footer-creditos">© Level-Up Gamer NACC.</p>
        </footer>
    );
}
