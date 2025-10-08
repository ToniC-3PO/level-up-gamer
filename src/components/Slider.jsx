import "../assets/styles.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function SliderProductos({ titulo, productosMostrar, sliderId }) {
    useEffect(() => {
        const slider = document.getElementById(`slider-${sliderId}`);
        const progress = document.getElementById(`slider-progress-${sliderId}`);

        if (slider && progress) {
            const updateProgress = () => {
                const scrollLeft = slider.scrollLeft;
                const maxScroll = slider.scrollWidth - slider.clientWidth;
                const percentage = (scrollLeft / maxScroll) * 100;
                progress.style.width = `${percentage}%`;
                progress.setAttribute("aria-valuenow", percentage.toFixed(0));
            };

            slider.addEventListener("scroll", updateProgress);

            return () => {
                slider.removeEventListener("scroll", updateProgress);
            };
        }
    }, [sliderId]);

    return (
        <section className="recomendados container-fluid">
            <h2>{titulo}</h2>

            <div className="slider d-flex justify-content-center" id={`slider-${sliderId}`}>
                {productosMostrar.map((producto) => (
                    <div className="producto-item item cursor-target" key={producto.id}>
                        <Link to={`/producto/${producto.id}`} className="nombre">
                            <img
                                src={producto.imagen}
                                alt={producto.nombre}
                                width="200"
                                height="200"
                            />
                            <h3>{producto.nombre}</h3>
                            <p>${producto.precio.toLocaleString("es-CL")}</p>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="progress mt-2 custom-progress" style={{ height: "2px" }}>
                <div
                    id={`slider-progress-${sliderId}`} className="progress-bar bg-success custom-progress-bar" role="progressbar" style={{ width: "0%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                ></div>
            </div>

            <div className="more-blogs">
                <Link className="volver-link cursor-target" to="/catalogo">Catálogo</Link>
            </div>
        </section>
    );
}