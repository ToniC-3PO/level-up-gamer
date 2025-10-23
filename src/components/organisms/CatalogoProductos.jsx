import ProductoItem from "../atoms/ProductoItem";

export default function CatalogoProductos({ productosFiltrados, carrito, updateCarrito }) {
    return (
        <div className="productos">
        {productosFiltrados.length === 0 ? (
            <p>No se encontró el producto</p>
        ) : (
            productosFiltrados.map((p) => (
            <ProductoItem key={p.id} producto={p} carrito={carrito} updateCarrito={updateCarrito} />
            ))
        )}
        </div>
    );
}