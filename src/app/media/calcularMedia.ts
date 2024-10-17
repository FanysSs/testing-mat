export function calcularMedia(valores: number[]): number {
    const suma = valores.reduce((a, b) => a + b, 0);
    const media = suma / valores.length;
    return +media.toFixed(2);
  }