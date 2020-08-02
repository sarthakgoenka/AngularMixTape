import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsButtonsComponent } from './icons-buttons.component';

describe('IconsButtonsComponent', () => {
  let component: IconsButtonsComponent;
  let fixture: ComponentFixture<IconsButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
