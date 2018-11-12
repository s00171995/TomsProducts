import { TestBed } from '@angular/core/testing';

import { ClipArtApiService } from './clip-art-api.service';

describe('ClipArtApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClipArtApiService = TestBed.get(ClipArtApiService);
    expect(service).toBeTruthy();
  });
});
