import "../assets/styles.css";
import { Link } from "react-router-dom";
import { validarFormulario } from "../assets/utils/Validaciones";
import ojito from "../assets/utils/ojito";
import ojoA from "../assets/fotos/icons/eye_open.png";
import ojoC from "../assets/fotos/icons/eye_closed.png";

export default function NewAccount() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      email: document.getElementById("exampleInputEmail2").value,
      password: document.getElementById("InputPassword2").value,
      confirmPassword: document.getElementById("InputPassword2.1").value,
      birthDay: document.getElementById("FechNac").value,
    };

    const errors = validarFormulario(formData);

    if (Object.keys(errors).length === 0) {
      alert("✅ Cuenta creada");
    } else {
      alert("⚠️ Corrige los errores:\n" + JSON.stringify(errors, null, 2));
    }
  };
    
    return (
    <div> 
        <form className="">
            <div className="mb-3 container-fluid">
                <label htmlfor="InputEmail2" className="form-label">Ingresa tu correo electronico:</label>
                <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" required/>
                <div id="emailHelp" className="form-text">Nunca compartiremos tu correo o información personal y si eres parte de DuocUC ingresa con
                    tu correo para obtener un 20% de descuentos en todos nuestros productos.</div>
                
            </div>
            <div className="mb-3 container-fluid">
                <label htmlfor="InputPassword2" className="form-label">Contraseña:</label>
                <div className="password-container">
                    <input type="password" className="form-control" id="InputPassword2" aria-describedby="passwordHelpInline" required/>
                    <img src={ojoC} id="coniconMostrar" className="icon" onClick={ojito} alt="Mostrar contraseña"/>
                </div>
                <div id="passwordHelpBlock" className="form-text">Condición contraseña</div>
            </div>
            <div className="mb-3 container-fluid">
                <label htmlfor="InputPassword2.1" className="form-label">Confirmar contraseña:</label>
                <input type="password" className="form-control" id="InputPassword2.1" required/>
                
                
            </div>
            <div className="mb-3 container-fluid">
                <label htmlfor="InputBday1" className="form-label">Fecha de nacimiento</label>
                <input type="date" name="bday" id="FechNac" aria-describedby="bdayHelp" required max="2017-04-30"/> 
                <div id="bdayHelp" className="form-text">Para obtener puntos LevelUp en tu cumpleaños ✨</div>
                <div id="bdayHelp" className="form-text">Solo mayores de 18 años.</div>
                
            </div>
            <div className="row g-3 align-items-center container-fluid">
                <div className="col-auto">
                    <label htmlfor="PuntosLevelUp" className="col-form-label">LevelUp-REF</label>
                </div>
                <div className="col-auto">
                    <input type="text" id="PuntosLevelUp" className="form-control" aria-describedby="infoPuntos1"/>
                </div>
                <div className="col-auto">
                    <span id="infoPuntos1" className="form-text">
                    Si tienes un código LevelUp-REF, ingesalo aquí.
                    </span>
                </div>
            </div>
            <div className="mb-3 container-fluid">
                    <ul>
                        <li ><Link to="/login">Ya tienes una cuenta</Link></li>
                    </ul>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Crear</button>
        </form>
    </div>
    );
}