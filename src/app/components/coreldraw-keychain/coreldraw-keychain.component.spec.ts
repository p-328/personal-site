import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreldrawKeychainComponent } from './coreldraw-keychain.component';

describe('CoreldrawKeychainComponent', () => {
  let component: CoreldrawKeychainComponent;
  let fixture: ComponentFixture<CoreldrawKeychainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreldrawKeychainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreldrawKeychainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
