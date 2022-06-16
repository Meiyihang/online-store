import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurpoliciesComponent } from './ourpolicies.component';

describe('OurpoliciesComponent', () => {
  let component: OurpoliciesComponent;
  let fixture: ComponentFixture<OurpoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurpoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurpoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
