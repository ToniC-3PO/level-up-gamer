import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles.css";
import news from "../datos/dataNews";

export default function Newsc () {
    const sortedData = [...news].sort((a, b) => b.id - a.id);

    return (
        <section className="container-fluid">
        <div className="wrap">
            <div className="mains-news">
                <h2 className="noticias-titulo">Noticias</h2>
            <div className="body-news">
                {sortedData.length === 0 ? (
                <p>No hay noticias disponibles</p>
                ) : (
                sortedData.map((n) => (
                    <article className="news-fecha cursor-target" key={n.id}>
                        <span className="publicacion">{n.fecha}</span>
                    <div>
                        <h3>
                        <Link to={`/noticia/${n.id}`}>{n.titulo}</Link>
                        </h3>
                        <p>{n.descripcion}</p>
                        <figure className="last-blog-img">
                        <Link to={`/noticia/${n.id}`}>
                            <img src={n.imagen} alt={n.titulo} width="300" className="img-fluid"/>
                        </Link>
                        </figure>
                    </div>
                    </article>
                ))
                )}
            </div>
            </div>
        </div>
        </section>
    );
}