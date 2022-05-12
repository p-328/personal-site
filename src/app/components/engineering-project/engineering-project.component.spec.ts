import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringProjectComponent } from './engineering-project.component';

describe('EngineeringProjectComponent', () => {
  let component: EngineeringProjectComponent;
  let fixture: ComponentFixture<EngineeringProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineeringProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeringProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
