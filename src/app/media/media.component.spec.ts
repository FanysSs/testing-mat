import { ComponentFixture, TestBed } from '@angular/core/testing';
import { calcularMedia } from './calcularMedia';

describe('MediaComponent', () => {
  it('should return media = 550.6 if input is [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]', () => {
    const result = calcularMedia([160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]);
    expect(result).toBe(550.6);
});

  it('should return media = 60.32 if input is [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', () => {
    const result = calcularMedia([15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    expect(result).toBe(60.32);
  });
});