import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistSongsPlayableComponent } from './playlist-songs-playable.component';

describe('PlaylistSongsPlayableComponent', () => {
  let component: PlaylistSongsPlayableComponent;
  let fixture: ComponentFixture<PlaylistSongsPlayableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistSongsPlayableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistSongsPlayableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
