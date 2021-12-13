import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalerrecruteurComponent } from './signalerrecruteur.component';

describe('SignalerrecruteurComponent', () => {
  let component: SignalerrecruteurComponent;
  let fixture: ComponentFixture<SignalerrecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalerrecruteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalerrecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
