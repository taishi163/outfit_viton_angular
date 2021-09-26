import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefTopComponent } from './ref-top.component';

describe('RefTopComponent', () => {
  let component: RefTopComponent;
  let fixture: ComponentFixture<RefTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
