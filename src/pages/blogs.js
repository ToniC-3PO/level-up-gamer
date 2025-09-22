import "../assets/styles.css";

function Blogs() {
    return (
        <div className="blogs">
        <h1>Blogs de la Comunidad</h1>
        <section className="blog-list">
            <article>
            <img src="/assets/fotos/blogs/ror2modsBlog.png" alt="Mods ROR2" />
            <h2>Los mejores mods de Risk of Rain 2</h2>
            <p>Descubre cómo transformar tu experiencia en el juego.</p>
            </article>
            <article>
            <img src="/assets/fotos/blogs/sims.jpeg" alt="Sims Blog" />
            <h2>Historias locas en Los Sims</h2>
            <p>Jugadores comparten anécdotas divertidas y únicas.</p>
            </article>
        </section>
        </div>
    );
}

export default Blogs;
