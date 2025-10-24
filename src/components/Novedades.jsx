import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles.css";
import blogs from "../datos/dataBlogs";
import noticias from "../datos/dataNews";
import eventos from "../datos/dataEventos";

export default function Novedades() {
    const ultimosBlogs = [...blogs]
        .sort((a, b) => b.id - a.id)
        .slice(0, 2); 

    const ultimasNoticias = [...noticias]
        .sort((a, b) => b.id - a.id)
        .slice(0, 2);

    const ultimosEventos = [...eventos]
        .sort((a, b) => b.id - a.id)
        .slice(0, 8);

    return (
        <section className="mb-5">
            <div>
                <h2 id="novedades-g">Novedades gamer</h2>
            </div>

            <div className="container">

                {/* Blogs */}
                <div className="blogs mt-5">
                    <div>
                        <h4>Blogs</h4>
                    </div>
                    <hr className="border border-primary border-3 opacity-75"/>
                    <div className="blogs-body">
                        <div className="last-blogs">
                            {ultimosBlogs.map(b => (
                                <article className="last-blog cursor-target" key={b.id}>
                                    <figure className="last-blog-img">
                                        <Link to={`/blog/${b.id}`}>
                                            <img src={b.imagen} alt={b.titulo} width="300" className="img-fluid"/>
                                        </Link>
                                    </figure>
                                    <h3 className="last-blog-titulo">
                                        <Link to={`/blog/${b.id}`}>{b.titulo}</Link>
                                    </h3>
                                    <p className="last-blog-info">{b.descripcion}</p>
                                </article>
                            ))}
                        </div>
                        <div className="more-blogs">
                            <Link className="more-link cursor-target" to="/blogs">
                                Más Blogs
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Noticias */}
                <div className="news mt-5">
                    <div>
                        <h4>Noticias</h4>
                    </div>
                    <hr className="border border-primary border-3 opacity-75" />
                    <div className="news-body">
                        <div className="last-news">
                            {ultimasNoticias.map(n => (
                                <article className="last-new cursor-target" key={n.id}>
                                    <figure className="last-news-img">
                                        <Link to={`/noticia/${n.id}`}>
                                            <img src={n.imagen} alt={n.titulo} width="300" className="img-fluid"/>
                                        </Link>
                                    </figure>
                                    <h3 className="last-news-titulo">
                                        <Link to={`/noticia/${n.id}`}>{n.titulo}</Link>
                                    </h3>
                                    <p className="last-news-info">{n.descripcion}</p>
                                </article>
                            ))}
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
                            {ultimosEventos.map(e => (
                                <li className="fechas-bloque cursor-target" key={e.id}>
                                    <span className="fecha-evento">{e.fecha}</span>
                                    <span className="evento-info">
                                        <Link to={`/evento/${e.id}`}>{e.titulo}</Link>
                                    </span>
                                </li>
                            ))}
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
