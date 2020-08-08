import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerControllerComponent } from './player-controller.component';

describe('PlayerControllerComponent', () => {
  let component: PlayerControllerComponent;
  let fixture: ComponentFixture<PlayerControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
