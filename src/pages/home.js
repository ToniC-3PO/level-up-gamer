import Hero from "../components/organisms/Hero";
import CarouselNoticias from "../components/organisms/CarouselNoticias";
import SliderProductos from "../components/organisms/SliderProduct";
import productos from "../datos/dataP";
import SliderP from "../assets/utils/sliderP";

export default function Home() {
    const destacados = SliderP(productos, 12);
    const recomendados = SliderP(productos, 12);

    return (
        <>
        <Hero />
        <CarouselNoticias />
        <SliderProductos titulo="Destacados" productosMostrar={destacados} sliderId="destacados" />
        <SliderProductos titulo="Recomendados para ti" productosMostrar={recomendados} sliderId="recomendados" />
        </>
    );
}
