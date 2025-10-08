

export default function Carrito() {
    return (
        <section class="container-fluid">
            <div id="carrito">
                <div class="tarjeta-producto">
                    <a href="producto.html" class="nombre">
                    <img src="assets/fotos/productos/audifonosHyperx.jpeg" href="producto.html" alt="Producto" width="200" height="200"/></a>
                    <h3>Auriculares Gamer HyperX Cloud II</h3>
                    <span id="precioUnitario">$79990</span>
                    <div>
                        <button onclick="restCantidad()">-</button>
                        <span class="cantidad" id="cantidad">1</span>
                        <button onclick="sumCantidad()">+</button>
                    </div>
                </div>

                <div id="total">
                    <p>Total unidades:
                        <span id="total-u"></span>
                    </p>
                        <p>Total precio: $
                        <span id="total-p"></span>
                    </p>
                    <button>Pagar</button>
                    <button id="vaciar">Vaciar</button>
                </div>
            </div>
        </section>
    );
}