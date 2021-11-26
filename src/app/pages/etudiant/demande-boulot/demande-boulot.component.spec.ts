import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeBoulotComponent } from './demande-boulot.component';

describe('DemandeBoulotComponent', () => {
  let component: DemandeBoulotComponent;
  let fixture: ComponentFixture<DemandeBoulotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeBoulotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeBoulotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
