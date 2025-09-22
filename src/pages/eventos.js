import "../assets/styles.css";

function Eventos() {
    return (
        <div className="eventos">
        <h1>Eventos Gamer</h1>
        <section className="eventos-banner">
            <img src="/assets/fotos/eventos/banner-eventos.jpeg" alt="Eventos Banner" />
        </section>
        <section className="lista-eventos">
            <article>
            <img src="/assets/fotos/eventos/evento-poster.jpg" alt="Evento 1" />
            <h2>Expo Gamer 2025</h2>
            <p>El evento más grande del año llega con novedades impresionantes.</p>
            </article>
            <article>
            <img src="/assets/fotos/eventos/invitation1.jpg" alt="Evento 2" />
            <h2>Competencia de E-Sports</h2>
            <p>Los mejores equipos se enfrentan por la gloria.</p>
            </article>
        </section>
        </div>
    );
}

export default Eventos;
