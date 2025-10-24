
export function obtenerUsuarios() {
    return JSON.parse(localStorage.getItem("usuarios")) || [];
}

export function guardarUsuario(user) {
    const users = obtenerUsuarios();

    const existe = users.some(u => u.email === user.email);
    if (existe) {
        return { ok: false, mensaje: "El correo ya está registrado" };
    }else{
        users.push(user);
        localStorage.setItem("usuarios", JSON.stringify(users));
        return { ok: true, mensaje: "Usuario guardado exitosamente" };
    }
}