import { calcularMedia } from "../media/calcularMedia";

export function calcularCoeficienteCorrelacion(x: number[], y: number[]): number {
    const mediaX = calcularMedia(x);
    const mediaY = calcularMedia(y);

    let numerador = 0;
    let sumatoriaCuadradosX = 0;
    let sumatoriaCuadradosY = 0;

    for (let i = 0; i < x.length; i++) {
        const diffX = x[i] - mediaX;
        const diffY = y[i] - mediaY;

        numerador += diffX * diffY;
        sumatoriaCuadradosX += diffX * diffX;
        sumatoriaCuadradosY += diffY * diffY;
    }

    const denominador = Math.sqrt(sumatoriaCuadradosX * sumatoriaCuadradosY);
    const r = numerador / denominador;

    return parseFloat(r.toFixed(5));
}


export function calcularCoeficienteDeterminacion(x: number[], y: number[]): number {
    const r = calcularCoeficienteCorrelacion(x, y);

    const r2 = Math.pow(r, 2);

    return parseFloat(r2.toFixed(5)); 
}