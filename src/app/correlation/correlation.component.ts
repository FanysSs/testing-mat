import { Component } from '@angular/core';
import { calcularCoeficienteCorrelacion, calcularCoeficienteDeterminacion } from './calculate';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-correlation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './correlation.component.html',
  styleUrl: './correlation.component.css'
})
export class CorrelationComponent {
  xInput: string = '';
  yInput: string = '';
  coeficienteCorrelacion: number | null = null;
  coeficienteDeterminacion: number | null = null;
  resultado: string | null = null;

  calcular(): void {
    const x = this.xInput.split(',').map(num => parseFloat(num.trim()));
    const y = this.yInput.split(',').map(num => parseFloat(num.trim()));

    if (x.length !== y.length || x.some(isNaN) || y.some(isNaN)) {
      this.resultado = 'Por favor, ingrese conjuntos de números válidos y del mismo tamaño.';
      return;
    }

    this.coeficienteCorrelacion = calcularCoeficienteCorrelacion(x, y);
    this.coeficienteDeterminacion = calcularCoeficienteDeterminacion(x, y);
    this.resultado = `El coeficiente de correlación (r) es: ${this.coeficienteCorrelacion}, y el coeficiente de determinación (r²) es: ${this.coeficienteDeterminacion}`;
  }
}