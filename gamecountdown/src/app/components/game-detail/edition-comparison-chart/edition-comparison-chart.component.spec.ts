import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionComparisonChartComponent } from './edition-comparison-chart.component';

describe('EditionComparisonChartComponent', () => {
  let component: EditionComparisonChartComponent;
  let fixture: ComponentFixture<EditionComparisonChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditionComparisonChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionComparisonChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
