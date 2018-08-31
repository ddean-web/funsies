import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerPageLinksComponent } from './inner-page-links.component';

describe('InnerPageLinksComponent', () => {
  let component: InnerPageLinksComponent;
  let fixture: ComponentFixture<InnerPageLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerPageLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerPageLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
