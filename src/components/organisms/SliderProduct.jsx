import { useEffect } from "react";
import SliderItem from "../atoms/SliderItem";
import { Link } from "react-router-dom";

export default function SliderProductos({ titulo, productosMostrar, sliderId }) {
    useEffect(() => {
        const slider = document.getElementById(`slider-${sliderId}`);
        const progress = document.getElementById(`slider-progress-${sliderId}`);
        if (!slider || !progress) return;

        const updateProgress = () => {
        const scrollLeft = slider.scrollLeft;
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        const percentage = (scrollLeft / maxScroll) * 100;
        progress.style.width = `${percentage}%`;
        progress.setAttribute("aria-valuenow", percentage.toFixed(0));
        };

        slider.addEventListener("scroll", updateProgress);
        return () => slider.removeEventListener("scroll", updateProgress);
    }, [sliderId]);

    return (
        <section className="recomendados container-fluid">
        <h2>{titulo}</h2>
        <div className="slider d-flex justify-content-center" id={`slider-${sliderId}`}>
            {productosMostrar.map((p) => <SliderItem key={p.id} producto={p} />)}
        </div>
        <div className="progress mt-2 custom-progress" style={{ height: "2px" }}>
            <div
            id={`slider-progress-${sliderId}`}
            className="progress-bar bg-success custom-progress-bar"
            role="progressbar"
            style={{ width: "0%" }}
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
            />
        </div>
        <div className="more-blogs">
            <Link className="volver-link cursor-target" to="/catalogo">Catálogo</Link>
        </div>
        </section>
    );
}