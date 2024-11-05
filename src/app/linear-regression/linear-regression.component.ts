import { Component } from '@angular/core';
import { linearRegression } from './calculate';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-linear-regression',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './linear-regression.component.html',
  styleUrl: './linear-regression.component.css'
})
export class LinearRegressionComponent {
  xInput: string = '';
  yInput: string = '';
  predictX: number | null = null;
  slope: number | null = null;
  intercept: number | null = null;
  resultado: string | null = null;
  prediccion: string | null = null;

  calcular(): void {
    const x = this.xInput.split(',').map(num => parseFloat(num.trim()));
    const y = this.yInput.split(',').map(num => parseFloat(num.trim()));

    if (x.length !== y.length || x.some(isNaN) || y.some(isNaN)) {
      this.resultado = 'Por favor, ingrese conjuntos de números válidos y del mismo tamaño.';
      return;
    }

    const { slope, intercept } = linearRegression(x, y);
    this.slope = slope;
    this.intercept = intercept;
    this.resultado = `La pendiente es: ${this.slope.toFixed(5)}, y la intersección (intercept) es: ${this.intercept.toFixed(5)}`
  }

  predecir(): void {
    if (this.slope !== null && this.intercept !== null && this.predictX !== null) {
      const predictedY = this.slope * this.predictX + this.intercept;
      this.prediccion = `Para x = ${this.predictX}, el valor predicho de y es: ${predictedY.toFixed(5)}`;
    } else {
      this.prediccion = 'Por favor, realice el cálculo de la regresión antes de predecir.';
    }
  }
}