export default function FiltroCatalogo({ categorias, categoria, setCategoria }) {
    return (
        <div className="categoria-body">
        {categorias.map((cat) => (
            <button
            key={cat.key}
            className={`lista-categoria categorias cursor-target boton-filtro ${
                categoria === cat.key ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setCategoria(cat.key)}
            >
            {cat.label}
            </button>
        ))}
        </div>
    );
}