import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorExclusivesComponent } from './vendor-exclusives.component';

describe('VendorExclusivesComponent', () => {
  let component: VendorExclusivesComponent;
  let fixture: ComponentFixture<VendorExclusivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorExclusivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorExclusivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
