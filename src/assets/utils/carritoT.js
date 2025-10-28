export default function calcularTotales(carrito) {
    let totalU = 0;
    let totalP = 0;

    carrito.forEach((item) => {
        totalU += item.cantidad;
        totalP += item.cantidad * item.precio;
    });

    return {
        totalU,
        totalP,
    };
}