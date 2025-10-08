import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles.css";
import blogs from "../datos/dataBlogs";

export default function Blogsc() {
    return (
        <section className="container-fluid">
        <div className="wrap">
            <div className="mains-blogs">
                <h2 className="blogs-titulo">Blogs</h2>
            <div className="body-blogs">
                {blogs.length === 0 ? (
                <p>No hay blogs disponibles</p>
                ) : (
                blogs.map((b) => (
                    <article className="blog-fecha cursor-target" key={b.id}>
                        <span className="publicacion">{b.fecha}</span>
                    <div>
                        <h3>
                        <Link to={`/blog/${b.id}`}>{b.titulo}</Link>
                        </h3>
                        <p>{b.descripcion}</p>
                        <figure className="last-blog-img">
                        <Link to={`/blog/${b.id}`}>
                            <img src={b.imagen} alt={b.titulo} width="300" className="img-fluid"/>
                        </Link>
                        </figure>
                    </div>
                    </article>
                ))
                )}
            </div>
            </div>
        </div>
        </section>
    );
}