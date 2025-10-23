import { toast } from "react-toastify";

export default function agregarCarrito(producto, cantidad, carrito, updateCarrito) {
    const carritoLive = [...carrito];
    const pExistente = carritoLive.find(p => p.id === producto.id);

    if (pExistente) {
        pExistente.cantidad += cantidad;
    } else {
        carritoLive.push({ ...producto, cantidad });
    }

    updateCarrito(carritoLive);
    toast.success("Producto agregado al carrito");
}