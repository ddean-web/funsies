import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHeroComponent } from './game-hero.component';

describe('GameHeroComponent', () => {
  let component: GameHeroComponent;
  let fixture: ComponentFixture<GameHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
