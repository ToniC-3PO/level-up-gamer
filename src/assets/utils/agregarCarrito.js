export default function agregarCarrito(x, y) {
    const carritoLive = JSON.parse(localStorage.getItem("carrito")) || [];
    const pExistente = carritoLive.find((p) => p.id === x.id);

    if (pExistente) {
        pExistente.cantidad += y;
    } else {
        carritoLive.push({ ...x, cantidad: y });
    }

    localStorage.setItem("carrito", JSON.stringify(carritoLive));
    alert("Producto agregado al carrito");
}