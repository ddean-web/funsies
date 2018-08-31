import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallBreakdownComponent } from './overall-breakdown.component';

describe('OverallBreakdownComponent', () => {
  let component: OverallBreakdownComponent;
  let fixture: ComponentFixture<OverallBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallBreakdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
