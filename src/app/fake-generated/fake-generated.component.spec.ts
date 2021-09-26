import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeGeneratedComponent } from './fake-generated.component';

describe('FakeGeneratedComponent', () => {
  let component: FakeGeneratedComponent;
  let fixture: ComponentFixture<FakeGeneratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeGeneratedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeGeneratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
