import "../assets/styles.css";
import { Link, useNavigate} from "react-router-dom";
import { validarFormulario } from "../assets/utils/Validaciones";
import ojito from "../assets/utils/ojito";
import ojoC from "../assets/fotos/icons/eye_closed.png";
import { useState } from "react";
import { guardarUsuario } from "../datos/dataUser";
import { toast } from "react-toastify";

export default function NewAccount() {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
        email: document.getElementById("exampleInputEmail2").value,
        password: document.getElementById("InputPassword2").value,
        confirmPassword: document.getElementById("InputPassword2.1").value,
        birthDay: document.getElementById("FechNac").value,
        };  

        const errores = validarFormulario(formData);
        setErrors(errores);

        if (Object.keys(errores).length === 0) {
            const usuario = {
            email: formData.email,
            password: formData.password,
            birthDay: formData.birthDay,
            refCode: document.getElementById("PuntosLevelUp").value || null,
            };

            const resultado = guardarUsuario(usuario);

        if (resultado.ok) {
            toast.success(resultado.mensaje || "Cuenta creada con éxito");
            
            setTimeout(() => {
                navigate("/login");
            }, 1500);
        } else {
            toast.error(resultado.mensaje || "Error al crear la cuenta");
            console.log("Errores detectados:", errores);
        }
    }
};
    
    
    return (
    <div> 
        <form className="">
            <div className="mb-3 container-fluid">
                <label htmlfor="InputEmail2" className="form-label" style={{pointerEvents: "none" }}>Ingresa tu correo electronico:</label>
                <input type="email" className="form-control cursor-target" id="exampleInputEmail2" aria-describedby="emailHelp" required/>
                <div id="emailHelp" className="form-text">Nunca compartiremos tu correo o información personal y si eres parte de DuocUC ingresa con
                    tu correo para obtener un 20% de descuentos en todos nuestros productos.</div>
                    {errors.email && <div className="text-danger small mt-1">{errors.email}</div>}
                
            </div>
            <div className="mb-3 container-fluid">
                <label htmlfor="InputPassword2" className="form-label" style={{pointerEvents: "none" }}>Contraseña:</label>
                <div className="password-container">
                    <input type="password" className="form-control cursor-target" id="InputPassword2" aria-describedby="passwordHelpInline" required/>
                    <img src={ojoC} id="coniconMostrar" className="icon end-0 translate-middle-y me-3 cursor-pointer cursor-target" onClick={ojito} alt="Mostrar contraseña"/>
                </div>
                {errors.password && <div className="text-danger small mt-1">{errors.password}</div>}
            </div>
            <div className="mb-3 container-fluid">
                <label htmlfor="InputPassword2.1" className="form-label" style={{pointerEvents: "none" }}>Confirmar contraseña:</label>
                <input type="password" className="form-control cursor-target" id="InputPassword2.1" required/>
                {errors.confirmPassword && (
            <div className="text-danger small mt-1">{errors.confirmPassword}</div>
                )}

            </div>
            <div className="mb-3 container-fluid">
                <label htmlfor="InputBday1" className="form-label" style={{pointerEvents: "none" }}>Fecha de nacimiento</label>
                <input type="date" name="bday" id="FechNac" aria-describedby="bdayHelp" className="cursor-target" required max="2017-04-30"/> 
                <div id="bdayHelp" className="form-text">Para obtener puntos LevelUp en tu cumpleaños ✨</div>
                {errors.birthDay && <div className="text-danger small mt-1">{errors.birthDay}</div>}
                
            </div>
            <div className="row g-3 align-items-center container-fluid">
                <div className="col-auto">
                    <label htmlfor="PuntosLevelUp" className="col-form-label" style={{pointerEvents: "none" }}>LevelUp-REF</label>
                    <div className="col-auto">
                    <span id="infoPuntos1" className="form-text">
                    Si tienes un código LevelUp-REF, ingesalo aquí.
                    </span>
                </div>
                </div>
                <div className="col-auto">
                    <input type="text" id="PuntosLevelUp" className="form-control cursor-target" aria-describedby="infoPuntos1"/>
                </div>
            </div>
            <div className="mb-3 container-fluid">
                    <ul>
                        <li ><Link to="/login" className="cursor-target">Ya tienes una cuenta</Link></li>
                    </ul>
            </div>
            <button type="button" className="btn btn-primary cursor-target" onClick={handleSubmit}>Crear</button>
        </form>
    </div>
    );
}