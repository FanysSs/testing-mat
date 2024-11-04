import { Component } from '@angular/core';
import { SimpsonRule } from './simpson_rule';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simpson',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css']
})
export class SimpsonComponent {
  x0: number | null = null;
  x1: number | null = null;
  numSeg: number | null = null;
  error: number | null = null;
  dof: number | null = null;
  resultadoSimpson: number | null = null;
  resultadoTStudent: number | null = null;
  resultado: string | null = null;

  calcularSimpson(): void {
    if (this.x0 !== null && this.x1 !== null && this.numSeg !== null && this.error !== null) {
      this.resultadoSimpson = SimpsonRule.simpson(this.x0, this.x1, this.numSeg, this.error, SimpsonRule.fx_2x);
      this.resultado = `Resultado de Simpson: ${this.resultadoSimpson}`;
    } else {
      this.resultado = 'Por favor, ingrese todos los valores necesarios.';
    }
  }

  calcularTStudent(): void {
    if (this.x1 !== null && this.numSeg !== null && this.dof !== null && this.error !== null) {
      this.resultadoTStudent = SimpsonRule.TStudent(this.x1, this.numSeg, this.dof, this.error);
      this.resultado = `Resultado de T-Student: ${this.resultadoTStudent}`;
    } else {
      this.resultado = 'Por favor, ingrese todos los valores necesarios.';
    }
  }
}