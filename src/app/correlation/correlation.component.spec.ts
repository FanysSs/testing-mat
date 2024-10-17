import { calcularCoeficienteCorrelacion, calcularCoeficienteDeterminacion } from "./calculate";

describe('Pruebas de correlación y determinación', () => {
  const dataTest1 = {
    proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
    actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
  };

  const dataTest2 = {
    proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
    actual_develop: [15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
  };

  const dataTest3 = {
    plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
    actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
  };

  const dataTest4 = {
    plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
    actual_develop: [15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
  };

  it('Should return r=0.9545 with the dataset Data_Test1', () => {
    const r = calcularCoeficienteCorrelacion(dataTest1.proxy_size, dataTest1.actual_added);
    expect(r).toBeCloseTo(0.9545, 4);
  });

  it('Should return rr=0.9111 with the dataset Data_Test1', () => {
    const r2 = calcularCoeficienteDeterminacion(dataTest1.proxy_size, dataTest1.actual_added);
    expect(r2).toBeCloseTo(0.9111, 4);
  });

  it('Should return r=0.9333 with the dataset Data_Test2', () => {
    const r = calcularCoeficienteCorrelacion(dataTest2.proxy_size, dataTest2.actual_develop);
    expect(r).toBeCloseTo(0.9333, 4);
  });

  it('Should return rr=0.8711 with the dataset Data_Test2', () => {
    const r2 = calcularCoeficienteDeterminacion(dataTest2.proxy_size, dataTest2.actual_develop);
    expect(r2).toBeCloseTo(0.8711, 4);
  });

  it('Should return r=0.9631 with the dataset Data_Test3', () => {
    const r = calcularCoeficienteCorrelacion(dataTest3.plan_added, dataTest3.actual_added);
    expect(r).toBeCloseTo(0.9631, 4);
  });

  it('Should return rr=0.9276 with the dataset Data_Test3', () => {
    const r2 = calcularCoeficienteDeterminacion(dataTest3.plan_added, dataTest3.actual_added);
    expect(r2).toBeCloseTo(0.9276, 4);
  });

  it('Should return r=0.9480 with the dataset Data_Test4', () => {
    const r = calcularCoeficienteCorrelacion(dataTest4.plan_added, dataTest4.actual_develop);
    expect(r).toBeCloseTo(0.9480, 4);
  });

  it('Should return rr=0.8988 with the dataset Data_Test4', () => {
    const r2 = calcularCoeficienteDeterminacion(dataTest4.plan_added, dataTest4.actual_develop);
    expect(r2).toBeCloseTo(0.8988, 4);
  });
});