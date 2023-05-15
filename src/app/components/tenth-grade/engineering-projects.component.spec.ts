import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringProjectsComponent } from './engineering-projects.component';

describe('EngineeringProjectsComponent', () => {
  let component: EngineeringProjectsComponent;
  let fixture: ComponentFixture<EngineeringProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineeringProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeringProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
