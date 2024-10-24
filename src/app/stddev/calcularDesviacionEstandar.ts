import { calcularMedia } from '../media/calcularMedia';

export function calcularDesviacionEstandar(valores: number[]): number {
  const media = calcularMedia(valores);
  const sumaCuadrados = valores.reduce((acc, val) => acc + Math.pow(val - media, 2), 0);

  const desviacionEstandar = Math.sqrt(sumaCuadrados / valores.length);

  return +desviacionEstandar.toFixed(2);
}