import "../assets/styles.css";

function NewAccount() {
    return (
        <div className="new-account">
        <h1>Crear Cuenta</h1>
        <form>
            <div className="form-group">
            <label htmlFor="name">Nombre completo</label>
            <input type="text" id="name" required />
            </div>
            <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" required />
            </div>
            <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" required />
            </div>
            <button type="submit">Registrarse</button>
        </form>
        </div>
    );
}

export default NewAccount;
