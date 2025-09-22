import "../assets/styles.css";

function Login() {
    return (
        <div className="login">
        <h1>Iniciar Sesión</h1>
        <form>
            <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" placeholder="ejemplo@correo.com" required />
            </div>
            <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="********" required />
            </div>
            <button type="submit">Entrar</button>
        </form>
        <p>
            ¿No tienes cuenta? <a href="/newaccount">Regístrate aquí</a>
        </p>
        </div>
    );
}

export default Login;
