import { Component } from '@angular/core';
import { MediaComponent } from '../media/media.component';

@Component({
  selector: 'app-stddev',
  standalone: true,
  imports: [],
  templateUrl: './stddev.component.html',
  styleUrls: ['./stddev.component.css']
})
export class StddevComponent {
  stddev1: number | null = null;
  stddev2: number | null = null;

  constructor(private mediaComponent: MediaComponent) {}

  calculateStddev(file: File): void {
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      const content = event.target?.result as string;
      const lines = content.split('\n');

      const numbers1 = lines[0].split(',').map(num => parseFloat(num.trim()));
      const media1 = this.mediaComponent.computeAverage(numbers1);
      this.stddev1 = this.computeStddev(numbers1, media1);

      const numbers2 = lines[1].split(',').map(num => parseFloat(num.trim()));
      const media2 = this.mediaComponent.computeAverage(numbers2);
      this.stddev2 = this.computeStddev(numbers2, media2);
    };
    reader.readAsText(file);
  }

  private computeStddev(numbers: number[], media: number): number {
    const variance = numbers.reduce((acc, curr) => acc + Math.pow(curr - media, 2), 0) / numbers.length;
    const stddev = Math.sqrt(variance);
    return parseFloat(stddev.toFixed(2));
  }
  
}