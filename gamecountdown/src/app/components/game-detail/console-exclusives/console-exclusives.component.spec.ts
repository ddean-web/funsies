import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleExclusivesComponent } from './console-exclusives.component';

describe('ConsoleExclusivesComponent', () => {
  let component: ConsoleExclusivesComponent;
  let fixture: ComponentFixture<ConsoleExclusivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleExclusivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleExclusivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
