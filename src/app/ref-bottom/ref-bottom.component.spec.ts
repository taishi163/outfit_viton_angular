import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefBottomComponent } from './ref-bottom.component';

describe('RefBottomComponent', () => {
  let component: RefBottomComponent;
  let fixture: ComponentFixture<RefBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
