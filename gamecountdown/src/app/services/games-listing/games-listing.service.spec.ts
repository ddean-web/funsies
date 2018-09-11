import { TestBed, inject } from '@angular/core/testing';

import { FetchGamesListService } from './games-listing.service';

describe('FetchGamesListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchGamesListService]
    });
  });

  it('should be created', inject([FetchGamesListService], (service: FetchGamesListService) => {
    expect(service).toBeTruthy();
  }));
});
