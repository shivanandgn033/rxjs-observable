import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringOperatorsComponent } from './filtering-operators.component';

describe('FilteringOperatorsComponent', () => {
  let component: FilteringOperatorsComponent;
  let fixture: ComponentFixture<FilteringOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilteringOperatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteringOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
