import "../assets/styles.css";

function Noticias() {
    return (
        <div className="noticias">
        <h1>Noticias Gamer</h1>
        <article>
            <img src="/assets/fotos/news/Silksong.jpeg" alt="Silksong" />
            <h2>Silksong finalmente llega</h2>
            <p>Los fans celebran el lanzamiento más esperado.</p>
        </article>
        <article>
            <img src="/assets/fotos/news/onemilliondeltanews.jpg" alt="One Million Delta" />
            <h2>One Million Delta rompe récords</h2>
            <p>El nuevo título multijugador supera todas las expectativas.</p>
        </article>
        </div>
    );
}

export default Noticias;
