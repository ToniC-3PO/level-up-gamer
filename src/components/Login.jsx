import "../assets/styles.css";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <section className="main-container mb-3 my-4">
            <div> 
                <form>
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
                    <button type="submit" className="btn btn-primary">Ingresar</button>
                </form>
            </div>
        </section>
    );
}