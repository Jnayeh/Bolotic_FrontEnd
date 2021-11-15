import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRecruteurComponent } from './home-recruteur.component';

describe('HomeRecruteurComponent', () => {
  let component: HomeRecruteurComponent;
  let fixture: ComponentFixture<HomeRecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRecruteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
