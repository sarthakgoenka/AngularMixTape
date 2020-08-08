import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistAddSongComponent } from './playlist-add-song.component';

describe('PlaylistAddSongComponent', () => {
  let component: PlaylistAddSongComponent;
  let fixture: ComponentFixture<PlaylistAddSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistAddSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistAddSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
