/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../../assets/fotos/Logo_full.png";
import { useEffect, useState } from "react";
import carro from "../../assets/fotos/icons/carrito.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const [usuario, setUsuario] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const usuarioActivo = sessionStorage.getItem("usuarioActivo");
        if (usuarioActivo) {
            setUsuario(JSON.parse(usuarioActivo));
        }
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem("usuarioActivo");
        setUsuario(null);
        navigate("/");
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" width="49" height="28" className="align-text-top" />
            </a>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link active cursor-target" href="/">Inicio</a></li>
                <li className="nav-item"><a className="nav-link active cursor-target" href="/Nosotros">Sobre Nosotros</a></li>
                <li className="nav-item"><a className="nav-link active cursor-target" href="https://wa.me/56225555555">Servicio Técnico</a></li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active cursor-target" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Novedades gamer
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item cursor-target" href="/novedadesp">Principales</a></li>
                    <li><a className="dropdown-item cursor-target" href="/blogs">Blogs</a></li>
                    <li><a className="dropdown-item cursor-target" href="/noticias">Noticias</a></li>
                    <li><a className="dropdown-item cursor-target" href="/eventos">Eventos</a></li>
                </ul>
                </li>
                <li className="nav-item"><a className="nav-link active cursor-target" href="/Catalogo">Catálogo</a></li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active cursor-target" href="/carrito">
                    <img src={carro} alt="Carrito" />
                </a>
                </li>
                {usuario ? (
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle active cursor-target"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {usuario.nombre || "Cuenta"}
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><button className="dropdown-item cursor-target" onClick={handleLogout}>Cerrar sesión</button></li>
                                </ul>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <a className="nav-link active cursor-target" href="/login">Iniciar sesión</a>
                            </li>
                        )}
            </ul>
            </div>
        </div>
        </nav>
    );
}