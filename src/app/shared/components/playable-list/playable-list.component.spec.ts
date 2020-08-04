import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayableListComponent } from './playable-list.component';

describe('PlayableListComponent', () => {
  let component: PlayableListComponent;
  let fixture: ComponentFixture<PlayableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
