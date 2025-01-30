import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityOperatorsComponent } from './utility-operators.component';

describe('UtilityOperatorsComponent', () => {
  let component: UtilityOperatorsComponent;
  let fixture: ComponentFixture<UtilityOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilityOperatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilityOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
