import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeCounterInputComponent } from './custome-counter-input.component';

describe('CustomeCounterInputComponent', () => {
  let component: CustomeCounterInputComponent;
  let fixture: ComponentFixture<CustomeCounterInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomeCounterInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeCounterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
