import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitChoosingHeaderComponent } from './fit-choosing-header.component';

describe('FitChoosingHeaderComponent', () => {
  let component: FitChoosingHeaderComponent;
  let fixture: ComponentFixture<FitChoosingHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitChoosingHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitChoosingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
