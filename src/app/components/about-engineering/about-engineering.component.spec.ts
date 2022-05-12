import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEngineeringComponent } from './about-engineering.component';

describe('AboutEngineeringComponent', () => {
  let component: AboutEngineeringComponent;
  let fixture: ComponentFixture<AboutEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutEngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
