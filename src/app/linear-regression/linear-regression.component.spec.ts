import { linearRegression } from '../linear-regression/calculate';

describe('LinearRegressionComponent', () => {
  const Data_Test1 = {
    proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
    actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
  };

  const Data_Test2 = {
    proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
    actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
  };

  const Data_Test3 = {
    plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
    actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
  };

  const Data_Test4 = {
    plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
    actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
  };

  function predict(slope: number, intercept: number, x: number): number {
    return slope * x + intercept;
  }

  it('Should return B0=-22.55 and B1=1.7279 with Data_Test1', () => {
    const { slope, intercept } = linearRegression(Data_Test1.proxy_size, Data_Test1.actual_added);
    expect(intercept).toBeCloseTo(-22.55, 2);
    expect(slope).toBeCloseTo(1.7279, 4);
  });

  it('Should return yk=644.429 with Data_Test1 if x=386', () => {
    const { slope, intercept } = linearRegression(Data_Test1.proxy_size, Data_Test1.actual_added);
    const yk = predict(slope, intercept, 386);
    expect(yk).toBeCloseTo(644.429, 3);
  });

  it('Should return B0=-4.039 and B1=0.1681 with Data_Test2', () => {
    const { slope, intercept } = linearRegression(Data_Test2.proxy_size, Data_Test2.actual_develop);
    expect(intercept).toBeCloseTo(-4.039, 3);
    expect(slope).toBeCloseTo(0.1681, 4);
  });

  it('Should return yk=60.858 with Data_Test2 if x=386', () => {
    const { slope, intercept } = linearRegression(Data_Test2.proxy_size, Data_Test2.actual_develop);
    const yk = predict(slope, intercept, 386);
    expect(yk).toBeCloseTo(60.858, 3);
  });

  it('Should return B0=-23.92 and B1=1.43097 with Data_Test3', () => {
    const { slope, intercept } = linearRegression(Data_Test3.plan_added, Data_Test3.actual_added);
    expect(intercept).toBeCloseTo(-23.92, 2);
    expect(slope).toBeCloseTo(1.43097, 5);
  });

  it('Should return yk=528.4294 with Data_Test3 if x=386', () => {
    const { slope, intercept } = linearRegression(Data_Test3.plan_added, Data_Test3.actual_added);
    const yk = predict(slope, intercept, 386);
    expect(yk).toBeCloseTo(528.4294, 4);
  });

  it('Should return B0=-4.604 and B1=0.16064 with Data_Test4', () => {
    const { slope, intercept } = linearRegression(Data_Test4.plan_added, Data_Test4.actual_develop);
    expect(intercept).toBeCloseTo(-4.604, 3);
    expect(slope).toBeCloseTo(0.14016, 4);
  });

  it('Should return yk=49.4994 with Data_Test4 if x=386', () => {
    const { slope, intercept } = linearRegression(Data_Test4.plan_added, Data_Test4.actual_develop);
    const yk = predict(slope, intercept, 386);
    expect(yk).toBeCloseTo(49.4994, 4);
  });
});
