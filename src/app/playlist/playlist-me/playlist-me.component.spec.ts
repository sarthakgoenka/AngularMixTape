import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistMeComponent } from './playlist-me.component';

describe('PlaylistMeComponent', () => {
  let component: PlaylistMeComponent;
  let fixture: ComponentFixture<PlaylistMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
