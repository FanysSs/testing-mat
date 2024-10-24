import { calcularDesviacionEstandar } from './calcularDesviacionEstandar'; 
describe('calcularDesviacionEstandar', () => {

    it('should return stddev = 572.03 if input is [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]', () => {
        const result = calcularDesviacionEstandar([160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]);
        expect(result).toBe(542.67);
    });

    it('should return stddev = 62.26 if input is [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', () => {
        const result = calcularDesviacionEstandar([15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
        expect(result).toBe(59.06);
    });

});