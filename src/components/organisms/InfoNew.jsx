import { useParams, Link } from "react-router-dom";
import news from "../../datos/dataNews";

export default function InfoNew() {
    const { id } = useParams();
    const newss = news.find((b) => b.id === parseInt(id));

    if (!newss) return <p>Noticia no encontrado</p>;

    return (
        <section className="container-fluid my-5">
        <div className="more-news">
            <Link className="volver-link cursor-target" to="/noticias">
            Volver a Noticias
            </Link>
        </div>


        <div className="container-fluid">
            <div className="wrap">

                <div className="main-news">
				<h1 className="eventos-titulo">{newss.titulo}</h1>
                    <div className="info-news">
                        <div className="body-info-news">
                            <div className="publi-fecha">
                                <p className="fecha-publi">Publicado el {newss.fecha}</p>
                            </div>
                            <div className="info-news">
                                <p className="info-news-desc">{newss.contenido}</p>
                            </div>
                        </div>

                        <div className="imagen_news">
                            <figure>
                                <img src={newss.imagen} alt={newss.titulo} width="1200" className="img-fluid shadow mb-3"/>    
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}