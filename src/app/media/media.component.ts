import { Component } from '@angular/core';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [],
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  media1: number | null = null;
  media2: number | null = null;

  calculateMedia(file: File): void {
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      const content = event.target?.result as string;
      const lines = content.split('\n');

      const numbers1 = lines[0].split(',').map(num => parseFloat(num.trim()));
      this.media1 = this.computeAverage(numbers1);

      const numbers2 = lines[1].split(',').map(num => parseFloat(num.trim()));
      this.media2 = this.computeAverage(numbers2);
    };
    reader.readAsText(file);
  }

  public computeAverage(numbers: number[]): number {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return Math.round((sum / numbers.length) * 100) / 100;
  }
}