import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultetudiantComponent } from './consultetudiant.component';

describe('ConsultetudiantComponent', () => {
  let component: ConsultetudiantComponent;
  let fixture: ComponentFixture<ConsultetudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultetudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
