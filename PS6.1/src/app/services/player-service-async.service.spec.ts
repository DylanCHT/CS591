import { TestBed } from '@angular/core/testing';

import { PlayerServiceAsyncService } from './player-service-async.service';

describe('ContactServiceAsyncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerServiceAsyncService = TestBed.get(PlayerServiceAsyncService);
    expect(service).toBeTruthy();
  });
});
