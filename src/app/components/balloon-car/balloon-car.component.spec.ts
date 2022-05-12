import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalloonCarComponent } from './balloon-car.component';

describe('BalloonCarComponent', () => {
  let component: BalloonCarComponent;
  let fixture: ComponentFixture<BalloonCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalloonCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalloonCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
