import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles.css";
import eventos from "../datos/dataEventos";

export default function Eventoc() {
    return (
        <section className="eventos-section">
        <div className="container-fluid">
            <div className="wrap">
                <div className="mains-eventos">
                    <h2 className="eventos-titulo">Eventos</h2>
                </div>
                <div className="body-eventos">
                    {eventos.length === 0 ? (
                    <p>No hay eventos disponibles</p>
                    ) : (
                    eventos.map((e) => (
                    <article className="dia-evento cursor-target" key={e.id}>
                        <span className="evento-date">{e.fecha}</span>
                        <div>
                            <h3>
                            <Link to={`/evento/${e.id}`}>{e.titulo}</Link>
                            </h3>
                            <p>{e.descripcion}</p>
                            <figure className="last-evento-img">
                            <Link to={`/evento/${e.id}`}>
                                <img src={e.imagen} alt={e.titulo} width="300" className="img-fluid"/>
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