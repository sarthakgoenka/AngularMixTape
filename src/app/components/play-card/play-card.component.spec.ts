import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayCardComponent } from './play-card.component';

describe('PlayCardComponent', () => {
  let component: PlayCardComponent;
  let fixture: ComponentFixture<PlayCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
