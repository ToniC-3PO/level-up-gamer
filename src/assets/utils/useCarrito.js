import { useState, useEffect } from "react";

export default function useCarrito() {
    const usuarioActivo = JSON.parse(sessionStorage.getItem("usuarioActivo"));

    const userKey = usuarioActivo ? `carrito_${usuarioActivo.email}` : "carrito";

    const [carrito, setCarrito] = useState(() => {
        return JSON.parse(localStorage.getItem(userKey)) || [];
    });

    useEffect(() => {
        const handleStorage = () => {
            setCarrito(JSON.parse(localStorage.getItem(userKey)) || []);
        };
        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
    }, [userKey]);

    const updateCarrito = (nuevoCarrito) => {
        localStorage.setItem(userKey, JSON.stringify(nuevoCarrito)); 
        setCarrito(nuevoCarrito);
    };

    return [carrito, updateCarrito];
}