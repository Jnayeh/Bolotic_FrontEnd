import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscritEtudiantComponent } from './inscrit-etudiant.component';

describe('InscritEtudiantComponent', () => {
  let component: InscritEtudiantComponent;
  let fixture: ComponentFixture<InscritEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscritEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscritEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
