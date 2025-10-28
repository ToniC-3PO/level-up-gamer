/* eslint-disable jsx-a11y/iframe-has-title */
import { useParams, Link } from "react-router-dom";
import eventos from "../../datos/dataEventos";

export default function InfoEvento() {
    const { id } = useParams();
    const evento = eventos.find((b) => b.id === parseInt(id));

    if (!evento) return <p>Evento no encontrado</p>;

    return (
        <section className="container-fluid my-5">
            <div className="more-eventos">
                <Link className="volver-link cursor-target" to="/eventos">
                Volver a Eventos
                </Link>
            </div>

            <div className="container-fluid">
                <div className="wrap">
                    <div className="mains-evento">
                        <h1 className="eventos-titulo">{evento.titulo}</h1>
                        <div>
                            <div className="imagen_evento">
                                <figure>
                                <img src={evento.imagen} alt={evento.titulo} width="1200" className="img-fluid shadow mb-3"/>
                                </figure>
                            </div>
                        </div>
                        <div className="info-evento">
                            <div className="body-info-evento">
                                <div className="info-evento-fecha">
                                    <h3>Fecha</h3>
                                    <p className="info-evento-detalle">{evento.fecha}</p>
                                </div>
                                <div className="info-evento-hora">
                                    <h3>Hora</h3>
                                    <p className="info-evento-detalle">{evento.hora}</p>
                                </div>
                                <div className="info-evento-lugar">
                                    <h3>Lugar</h3>
                                    <p className="info-evento-detalle">
                                        <div className="mapa-evento">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.620012416804!2d-70.61799192446692!3d-33.43314977339645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf7b8af466fd%3A0xc8fd2d768e783103!2sDuoc%20UC%3A%20Antonio%20Varas!5e0!3m2!1sen!2scl!4v1757180194015!5m2!1sen!2scl" 
                                            width="500" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="img-fluid"></iframe>
                                        </div>
                                    </p>
                                </div>
                                <div className="info-evento-more">
                                    <h3>Detalles</h3>
                                    <p className="info-evento-detalle">{evento.detalle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}