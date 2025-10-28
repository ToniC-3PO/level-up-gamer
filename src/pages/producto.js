import "../assets/styles.css";
import InfoProd from "../components/InfoProd";
import SliderProductos from "../components/organisms/SliderProduct";
import productos from "../datos/dataP";
import SliderP from "../assets/utils/sliderP";

export default function Producto() {
    const recomendados = SliderP(productos, 6);
    return (
        <>
        <InfoProd />
        <SliderProductos titulo="Similares" productosMostrar={recomendados} sliderId="recomendados" />
        </>
    );
}

