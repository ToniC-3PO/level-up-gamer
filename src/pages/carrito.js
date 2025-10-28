import CarritoC from '../components/organisms/Carrito';
import SliderProductos from "../components/organisms/SliderProduct";
import productos from "../datos/dataP";
import SliderP from "../assets/utils/sliderP";

export default function Carrito() {
    const recomendados = SliderP(productos, 6);
    return (
        <>
        <CarritoC />
        <SliderProductos titulo="Recomendados para ti" productosMostrar={recomendados} sliderId="recomendados" />
        </>
    );
}