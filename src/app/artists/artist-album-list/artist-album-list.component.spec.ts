import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistAlbumListComponent } from './artist-album-list.component';

describe('ArtistAlbumListComponent', () => {
  let component: ArtistAlbumListComponent;
  let fixture: ComponentFixture<ArtistAlbumListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistAlbumListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistAlbumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
