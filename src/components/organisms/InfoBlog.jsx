import { useParams, Link } from "react-router-dom";
import blogs from "../../datos/dataBlogs";

export default function InfoBlog() {
    const { id } = useParams();
    const blog = blogs.find((b) => b.id === parseInt(id));

    if (!blog) return <p>Blog no encontrado</p>;

    return (
        <section className="container-fluid my-5">
            <div className="more-blogs">
                <Link className="volver-link cursor-target" to="/blogs">
                Volver a Blogs
                </Link>
            </div>

            <div className="container-fluid">
                <div className="wrap">
                    <div className="mains-blog">
                        <h1 className="eventos-titulo">{blog.titulo}</h1>
                        <div className="info-blog">
                            <div className="body-info-blog">
                                <div className="publi-fecha">
                                    <p className="fecha-publi">Publicado el {blog.fecha}</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="info-blog">
                            <p className="contenido">{blog.contenido}</p>
                        </div>
                    </div>
                    <div className="imagen_blog">
                        <figure>
                        <img src={blog.imagen} alt={blog.titulo} width="1200" className="img-fluid shadow mb-3"/>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}
