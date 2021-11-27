import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterRecruteurComponent } from './consulter-recruteur.component';

describe('ConsulterRecruteurComponent', () => {
  let component: ConsulterRecruteurComponent;
  let fixture: ComponentFixture<ConsulterRecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterRecruteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
