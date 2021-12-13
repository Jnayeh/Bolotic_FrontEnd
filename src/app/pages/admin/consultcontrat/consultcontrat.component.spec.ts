import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultcontratComponent } from './consultcontrat.component';

describe('ConsultcontratComponent', () => {
  let component: ConsultcontratComponent;
  let fixture: ComponentFixture<ConsultcontratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultcontratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultcontratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
