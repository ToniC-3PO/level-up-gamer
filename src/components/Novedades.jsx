import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles.css";

export default function Novedades() {
    return (
        <section className="mb-5">
            <div>
                <h2 id="novedades-g">Novedades gamer</h2>
            </div>

            <div className="container">

                {/* Blogs */}
                <div className="blogs mt-5">
                    <div>
                        <h4 id="novedades-g">Blogs</h4>
                    </div>
                <hr className="border border-primary border-3 opacity-75"/>
                <div className="blogs-body">
                    <div className="last-blogs">
                    <article className="last-blog cursor-target">
                        <figure className="last-blog-img">
                        <Link to="/">
                            <img
                            src={require("../assets/fotos/blogs/ror2modsBlog.png")} alt="Risk of Rain 2 Add Mods" width="300" className="img-fluid"/>
                        </Link>
                        </figure>
                        <h3 className="last-blog-titulo">
                        <Link to="/">Risk of Rain 2 Add Mods</Link>
                        </h3>
                        <p className="last-blog-info">
                        Blog sobre agregar mods para ROR2 con R2ModMan...
                        </p>
                    </article>

                    <article className="last-blog cursor-target">
                        <figure className="last-blog-img">
                        <Link to="/">
                            <img
                            src={require("../assets/fotos/blogs/sims.jpeg")} alt="Open Mods Sims" width="300" className="img-fluid"/>
                        </Link>
                        </figure>
                        <h3 className="last-blog-titulo">
                        <Link to="/">Open Mods Sims</Link>
                        </h3>
                        <p className="last-blog-info">
                        Blog que integra los mejores Mods para los Sims...
                        </p>
                    </article>
                    </div>

                    <div className="more-blogs">
                    <Link className="more-link cursor-target" to="/blogs">
                        Más Blogs
                    </Link>
                    </div>
                </div>
                </div>

                {/* Noticas */}
                <div className="news mt-5">
                    <div>
                        <h4 id="novedades-g">Noticias</h4>
                    </div>
                <hr className="border border-primary border-3 opacity-75" />
                <div className="news-body">
                    <div className="last-news">
                    <article className="last-new cursor-target">
                        <figure className="last-news-img">
                        <Link to="/">
                            <img
                            src={require("../assets/fotos/news/onemilliondeltanews.jpg")} alt="MGS Delta 1M Ventas" width="300" className="img-fluid"/>
                        </Link>
                        </figure>
                        <h3 className="last-news-titulo">
                        <Link to="/">1M de ventas MGS Delta : Snake Eater</Link>
                        </h3>
                        <p className="last-news-info">
                        El esperado remake de Metal Gear Solid 3, logró una ci...
                        </p>
                    </article>

                    <article className="last-new cursor-target">
                        <figure className="last-news-img">
                        <Link to="/">
                            <img
                            src={require("../assets/fotos/news/Silksong.jpeg")} alt="Silksong Steam" width="300" className="img-fluid"/>
                        </Link>
                        </figure>
                        <h3 className="last-news-titulo">
                        <Link to="/">¿Hollow Knight : Silksong rompió Steam?</Link>
                        </h3>
                        <p className="last-news-info">
                        Ha salido finalmente Silksong después de 7 años aprox...
                        </p>
                    </article>
                    </div>

                    <div className="more-news">
                    <Link className="more-link cursor-target" to="/noticias">
                        Más Noticias
                    </Link>
                    </div>
                </div>
                </div>

                {/* Eventos */}
                <div className="fechas mt-5">
                <h2>Eventos</h2>
                <div className="body-fechas">
                    <ul className="fechas-list">
                    <li className="fechas-bloque cursor-target">
                        <span className="fecha-evento">01/08/2025</span>
                        <span className="evento-info">
                        <Link to="/">Torneo Smash Ultimate</Link>
                        </span>
                    </li>
                    <li className="fechas-bloque cursor-target">
                        <span className="fecha-evento">12/03/2021</span>
                        <span className="evento-info">
                        <Link to="/">Torneo MarvelVSCapcom</Link>
                        </span>
                    </li>
                    </ul>
                </div>
                <div className="more-eventos">
                    <Link className="more-link cursor-target" to="/eventos">
                    Más Eventos
                    </Link>
                </div>
                </div>
            </div>
        </section>
    );
}