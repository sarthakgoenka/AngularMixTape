import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiWigetsComponent } from './ui-wigets.component';

describe('UiWigetsComponent', () => {
  let component: UiWigetsComponent;
  let fixture: ComponentFixture<UiWigetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiWigetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiWigetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
