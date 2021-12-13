import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultrecruteurComponent } from './consultrecruteur.component';

describe('ConsultrecruteurComponent', () => {
  let component: ConsultrecruteurComponent;
  let fixture: ComponentFixture<ConsultrecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultrecruteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultrecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
