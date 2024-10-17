export function sumX(values: number[]): number {
    return values.reduce((acc, val) => acc + val, 0);
  }
  
  export function sumYY(values: number[]): number {
    return values.reduce((acc, val) => acc + val ** 2, 0);
  }
  
  export function sumXY(xValues: number[], yValues: number[]): number {
    return xValues.reduce((acc, x, i) => acc + x * yValues[i], 0);
  }
  
  export function linearRegression(x: number[], y: number[]): { slope: number; intercept: number } {
    const n = x.length;
    const sumXVal = sumX(x);
    const sumYVal = sumX(y);
    const sumXYVal = sumXY(x, y);
    const sumXXVal = sumYY(x);
  
    const slope = (n * sumXYVal - sumXVal * sumYVal) / (n * sumXXVal - sumXVal ** 2);
    const intercept = (sumYVal - slope * sumXVal) / n;
  
    return { slope, intercept };
  }