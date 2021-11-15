import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscritRecruteurComponent } from './inscrit-recruteur.component';

describe('InscritRecruteurComponent', () => {
  let component: InscritRecruteurComponent;
  let fixture: ComponentFixture<InscritRecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscritRecruteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscritRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
