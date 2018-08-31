import { TestBed, inject } from '@angular/core/testing';

import { FetchGameDetailService } from './fetch-game-detail.service';

describe('FetchGameDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchGameDetailService]
    });
  });

  it('should be created', inject([FetchGameDetailService], (service: FetchGameDetailService) => {
    expect(service).toBeTruthy();
  }));
});
