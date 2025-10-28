import Loginc from "../components/Login";
import SliderProductos from "../components/organisms/SliderProduct";
import productos from "../datos/dataP";
import SliderP from "../assets/utils/sliderP";

export default function Login() {
    const destacados = SliderP(productos, 6);
    return (
        <>
        <Loginc />
        <SliderProductos titulo="Destacados" productosMostrar={destacados} sliderId="recomendados" />
        </>
    );
}