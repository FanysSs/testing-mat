import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaComponent } from './media.component';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return media = 550.6 for the first input', (done) => {
    const file = new File(["160,591,114,229,230,270,128,1657,624,1503\n15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2"], "numbers.txt", { type: 'text/plain' });
    component.calculateMedia(file);
    
    setTimeout(() => {
      expect(component.media1).toBe(550.6);
      done();
    }, 100);
  });

  it('should return media = 60.32 for the second input', (done) => {
    const file = new File(["160,591,114,229,230,270,128,1657,624,1503\n15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2"], "numbers.txt", { type: 'text/plain' });
    component.calculateMedia(file);
    
    setTimeout(() => {
      expect(component.media2).toBe(60.32);
      done();
    }, 100);
  });
});