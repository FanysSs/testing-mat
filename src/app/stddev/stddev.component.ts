import { Component } from '@angular/core';
import { MediaComponent } from '../media/media.component';
import { calcularDesviacionEstandar } from './calcularDesviacionEstandar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stddev',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stddev.component.html',
  styleUrls: ['./stddev.component.css']
})
export class StddevComponent {
  valoresInput: string = '';
  resultadoDesviacion: number | null = null;
  resultado: string | null = null;

  calcular(): void {
    const valores = this.valoresInput.split(',').map(num => parseFloat(num.trim()));

    if (valores.some(isNaN)) {
      this.resultado = 'Por favor, ingrese solo números válidos.';
      return;
    }

    this.resultadoDesviacion = calcularDesviacionEstandar(valores);
    this.resultado = `La desviación estándar es: ${this.resultadoDesviacion}`;
  }
}