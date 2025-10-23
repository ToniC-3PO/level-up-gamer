export default function BuscadorProducts({ busqueda, setBusqueda }) {
    return (
        <div className="catalogo-busacador">
        <input
            type="text"
            className="form-control cursor-target"
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
        />
        </div>
    );
}