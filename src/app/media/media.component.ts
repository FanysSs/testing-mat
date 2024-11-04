import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  valoresInput: string = '';
  resultado: string | null = null;

  calcularMedia(valores: number[]): number {
    const suma = valores.reduce((a, b) => a + b, 0);
    const media = suma / valores.length;
    return +media.toFixed(2);
  }

  public computeAverage(numbers: number[]): number {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return parseFloat((sum / numbers.length).toFixed(2));
  }

  calcularYMostrarMedia(): void {
    const valores = this.valoresInput.split(',').map(num => parseFloat(num.trim()));
    if (valores.some(isNaN)) {
      this.resultado = 'Por favor, ingrese solo números válidos.';
      return;
    }
    const media = this.calcularMedia(valores);
    this.resultado = `La media es: ${media}`;
  }
}