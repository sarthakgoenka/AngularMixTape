import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsAlbumPlayableComponent } from './artists-album-playable.component';

describe('ArtistsAlbumPlayableComponent', () => {
  let component: ArtistsAlbumPlayableComponent;
  let fixture: ComponentFixture<ArtistsAlbumPlayableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistsAlbumPlayableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsAlbumPlayableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
