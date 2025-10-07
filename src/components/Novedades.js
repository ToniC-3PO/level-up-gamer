import { Link } from "react-router-dom";

export default function Novedades() {
    return(
        <section>
            <div>
                <h2 id="novedades-g">Novedades gamer</h2>
            </div>
            <div className="container">
                <div className="blogs">
                    <hr className="border border-primary border-3 opacity-75"/>
                    <div className="blogs-body">
                        <div className="last-blogs">
                            <article className="last-blog">
                                <figure className="last-blog-img">
                                    <Link  to="/">
                                        <img src={require("../assets/fotos/blogs/ror2modsBlog.png")} alt="last blos" width="300" height="auto"/>
                                        
                                    </Link>
                                </figure>
                                <h3 class="last-blog-titulo">
                                    <Link  to="/">Risk of Rain 2 Add Mods</Link>
                                </h3>
                                <p className="last-blog-info">
                                    Blog sobre agregar mods para ROR2 con R2ModMan...
                                </p>
                            </article>

                            <article className="last-blog">
                                <figure className="last-blog-img">
                                    <Link  to="/">
                                        <img src={require("../assets/fotos/blogs/sims.jpeg")} alt="last blog2" width="300" height="auto"/>
                                    </Link>
                                </figure>
                                <h3 className="last-blog-titulo">
                                    <Link  to="/">Open Mods Sims</Link>
                                </h3>
                                <p className="last-blog-info">
                                    Blog que Integra los mejores Mods para los Sims...
                                </p>
                            </article>
                        </div>
                        <div className="more-blogs">
                            <a className="more-link" href="blogs.html">Más Blogs</a>
                        </div>
                    </div>
                </div>
            </div>
                <div className="news">
                    <hr className="border border-primary border-3 opacity-75"/>
                    <div className="news-body">
                        <div className="last-news">
                            <article className="last-new">
                                <figure className="last-news-img">
                                    <Link  to="/">
                                        <img src={require("../assets/fotos/news/onemilliondeltanews.jpg")} alt="last new" width="300" height="auto"/>
                                    </Link>
                                </figure>
                                <h3 className="last-news-titulo">
                                    <Link to="/">1M de ventas MGS Delta : Snake Eater</Link>
                                </h3>
                                <p className="last-news-info">
                                    El esperado remake de Metal Gear Solid 3, logro una ci...
                                </p>
                            </article>

                            <article className="last-new">
                                <figure className="last-news-img">
                                    <Link  to="/">
                                        <img src={require("../assets/fotos/news/Silksong.jpeg")} alt="last new2" width="300" height="auto"/>
                                    </Link>
                                </figure>
                                <h3 className="last-news-titulo">
                                    <Link  to="/">¿Hollow Knight : SilkSong rompio Steam?</Link>
                                </h3>
                                <p className="last-news-info">
                                    A salido finalmente Silksong despues de 7 años aprox...
                                </p>
                            </article>
                        </div>
                        <div className="more-news">
                            <a className="more-link" href="noticias.html">Más Noticias</a>
                        </div>
                    </div>
                </div>
                <div className="fechas">
                    <h2>Eventos</h2>
                    <div className="body-fechas">
                        <ul className="fechas-list">
                            <li className="fechas-bloque">
                                <span className="fecha-evento">01/08/2025</span>
                                <span className="evento-info">
                                    <Link to="/">Torneo Smash Ultimate</Link>
                                </span>
                            </li>
                            <li className="fechas-bloque">
                                <span className="fecha-evento">12/03/2021</span>
                                <span className="evento-info">
                                    <Link  to="/">Torneo MarvelVSCapcom</Link>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="more-eventos">
                        <Link className="more-link"  to="/">Más Eventos</Link>
                    </div>
                </div>
        </section>
    );
}