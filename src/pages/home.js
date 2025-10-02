import Hero from "../components/Hero";
import CarouselNoticias from "../components/CarouselNoticias";
import productos from "../datos/dataP";
import SliderH from "../components/Slider";
import SliderP from "../assets/utils/sliderP";

export default function Home() {
    const destacados = SliderP(productos, 12);
    const recomendados = SliderP(productos, 12);
    return (
        <>
        <Hero />
        <CarouselNoticias />
        <SliderH titulo="Destacados" productosMostrar={destacados} sliderId="destacados" />
        <SliderH titulo="Recomendados para ti" productosMostrar={recomendados} sliderId="recomendados" />
        </>
    );
}
