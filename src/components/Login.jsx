import "../assets/styles.css";
import { Link, useNavigate } from "react-router-dom";
import { obtenerUsuarios } from "../datos/dataUser";

export default function Login() {
    const navigate = useNavigate();
    
    const handleLogin = (e) => {
        e.preventDefault(); // evita recargar

        const email = document.getElementById("exampleInputEmail1").value;
        const password = document.getElementById("exampleInputPassword1").value;

        const usuarios = obtenerUsuarios();

        const usuario = usuarios.find(u => u.email === email && u.password === password);

        if (usuario) {
        // guarda usuario activo en sessionStorage
        sessionStorage.setItem("usuarioActivo", JSON.stringify(usuario));
        alert("✅ Inicio de sesión exitoso");
        // aquí podrías redirigir usando navigate de react-router
        navigate("/home");
        } else {
        alert("⚠️ Email o contraseña incorrectos");
        }
    };
    return (
        <section className="main-container mb-3 my-4">
            <div> 
                <form onSubmit={handleLogin}>
                    <div className="mb-3 container-fluid">
                        <label htmlfor="InputEmail1" className="form-label" style={{pointerEvents: "none" }}>Corre electronico:</label>
                        <input type="email" className="form-control cursor-target" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    </div>
                    <div className="mb-3 container-fluid">
                        <label htmlfor="InputPassword1" className="form-label" style={{pointerEvents: "none" }}>Contraseña:</label>
                        <input type="password" className="form-control cursor-target" id="exampleInputPassword1" required/>
                    </div>
                    <div className="mb-3 container-fluid">
                            <ul>
                                <li ><Link to="/newaccount" className="cursor-target">Eres nuevo</Link></li>
                                <li style={{ color: "#ffffff", pointerEvents: "none" }}>|</li>
                                <li ><Link to="/" className="cursor-target">¿Olvidaste tu contraseña?</Link></li>
                            </ul>
                    </div>
                    <button type="submit" className="btn btn-primary cursor-target">Ingresar</button>
                </form>
            </div>
        </section>
    );
}