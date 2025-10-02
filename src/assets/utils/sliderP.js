export default function SliderP(arr, n) {
    const copia = [...arr];
    const r = [];
    for (let i = 0; i < n && copia.length > 0; i++) {
        const indice = Math.floor(Math.random() * copia.length);
        r.push(copia[indice]);
        copia.splice(indice, 1);
    }
    return r;
}