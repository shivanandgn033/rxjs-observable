import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttprequestretryComponent } from './httprequestretry.component';

describe('HttprequestretryComponent', () => {
  let component: HttprequestretryComponent;
  let fixture: ComponentFixture<HttprequestretryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttprequestretryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttprequestretryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
