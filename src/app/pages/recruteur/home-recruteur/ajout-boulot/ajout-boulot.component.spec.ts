import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutBoulotComponent } from './ajout-boulot.component';

describe('AjoutBoulotComponent', () => {
  let component: AjoutBoulotComponent;
  let fixture: ComponentFixture<AjoutBoulotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutBoulotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutBoulotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
