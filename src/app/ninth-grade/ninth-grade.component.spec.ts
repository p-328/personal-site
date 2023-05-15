import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinthGradeComponent } from './ninth-grade.component';

describe('NinthGradeComponent', () => {
  let component: NinthGradeComponent;
  let fixture: ComponentFixture<NinthGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NinthGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NinthGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
