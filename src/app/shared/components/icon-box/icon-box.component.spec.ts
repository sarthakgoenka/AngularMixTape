import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBoxComponent } from './icon-box.component';

describe('IconBoxComponent', () => {
  let component: IconBoxComponent;
  let fixture: ComponentFixture<IconBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
