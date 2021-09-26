import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitChoosingsComponent } from './fit-choosings.component';

describe('FitChoosingsComponent', () => {
  let component: FitChoosingsComponent;
  let fixture: ComponentFixture<FitChoosingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitChoosingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitChoosingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
