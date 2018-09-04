import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedReleasesComponent } from './featured-releases.component';

describe('FeaturedReleasesComponent', () => {
  let component: FeaturedReleasesComponent;
  let fixture: ComponentFixture<FeaturedReleasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedReleasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
