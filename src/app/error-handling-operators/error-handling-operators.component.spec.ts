import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHandlingOperatorsComponent } from './error-handling-operators.component';

describe('ErrorHandlingOperatorsComponent', () => {
  let component: ErrorHandlingOperatorsComponent;
  let fixture: ComponentFixture<ErrorHandlingOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorHandlingOperatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorHandlingOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
