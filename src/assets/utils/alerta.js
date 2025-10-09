export default function alerta({ type, message, onClose }) {
    const alertStyles = {
        padding: '15px',
        marginBottom: '10px',
        borderRadius: '5px',
        backgroundColor: getBackgroundColor(type)
    };

    return (
        <div style={alertStyles}>
        {message}
        <button onClick={onClose}>Cerrar</button>
        </div>
    );
}