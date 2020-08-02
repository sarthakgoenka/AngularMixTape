import { TestBed, inject } from '@angular/core/testing';

import { ArtistsAlbumService } from './artists-album.service';

describe('ArtistsAlbumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtistsAlbumService]
    });
  });

  it('should be created', inject([ArtistsAlbumService], (service: ArtistsAlbumService) => {
    expect(service).toBeTruthy();
  }));
});
