import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultsignalerComponent } from './consultsignaler.component';

describe('ConsultsignalerComponent', () => {
  let component: ConsultsignalerComponent;
  let fixture: ComponentFixture<ConsultsignalerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultsignalerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultsignalerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
