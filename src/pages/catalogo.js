import { useState } from "react";
import productos from "../datos/dataP";
import useCarrito from "../assets/utils/useCarrito";

import FiltroProductos from "../components/molecules/FiltroCatalogo";
import BuscadorProductos from "../components/molecules/BuscadorProducts";
import CatalogoProductos from "../components/organisms/CatalogoProductos";

export default function Catalogo() {
    const [busqueda, setBusqueda] = useState("");
    const [categoria, setCategoria] = useState("all");
    const [carrito, updateCarrito] = useCarrito();

    const categorias = [
        { key: "all", label: "Todo" },
        { key: "juegos-Mesa", label: "Juegos de Mesa" },
        { key: "accesorios", label: "Accesorios" },
        { key: "consolas", label: "Consolas" },
        { key: "computadores", label: "Computadores Gamers" },
        { key: "sillas", label: "Sillas Gamers" },
        { key: "mouse", label: "Mouse" },
        { key: "mousepad", label: "Mousepad" },
        { key: "poleras", label: "Poleras Gamers Personalizadas" },
    ];

    const productosFiltrados = productos.filter((x) => {
        const CCategoria = categoria === "all" || x.categoria === categoria;
        const CBusqueda = x.nombre.toLowerCase().includes(busqueda.toLowerCase());
        return CCategoria && CBusqueda;
    });

    return (
        <section className="catalogo">
        <h1>Catálogo</h1>

        <BuscadorProductos busqueda={busqueda} setBusqueda={setBusqueda} />
        <FiltroProductos categorias={categorias} categoria={categoria} setCategoria={setCategoria} />
        <CatalogoProductos productosFiltrados={productosFiltrados} carrito={carrito} updateCarrito={updateCarrito} />
        </section>
    );
}