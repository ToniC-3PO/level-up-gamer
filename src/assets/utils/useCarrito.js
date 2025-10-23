import { useState, useEffect } from "react";

export default function useCarrito() {
    const [carrito, setCarrito] = useState(() => {
        return JSON.parse(localStorage.getItem("carrito")) || [];
    });

    useEffect(() => {
        const handleStorage = () => {
            setCarrito(JSON.parse(localStorage.getItem("carrito")) || []);
        };
        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
    }, []);

    const updateCarrito = (nuevoCarrito) => {
        localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
        setCarrito(nuevoCarrito);
    };

    return [carrito, updateCarrito];
}
