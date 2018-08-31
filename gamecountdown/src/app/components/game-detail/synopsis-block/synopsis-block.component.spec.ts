import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynopsisBlockComponent } from './synopsis-block.component';

describe('SynopsisBlockComponent', () => {
  let component: SynopsisBlockComponent;
  let fixture: ComponentFixture<SynopsisBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynopsisBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynopsisBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
