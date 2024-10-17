import { Component } from '@angular/core';
import { linearRegression } from './calculate';

@Component({
  selector: 'app-linear-regression',
  standalone: true,
  imports: [],
  templateUrl: './linear-regression.component.html',
  styleUrl: './linear-regression.component.css'
})
export class LinearRegressionComponent {
  xValues: number[] = [1, 2, 3, 4, 5];
  yValues: number[] = [2, 4, 6, 8, 10];
  result: { slope: number; intercept: number } | null = null;

  calculateRegression() {
    this.result = linearRegression(this.xValues, this.yValues);
  }
}
