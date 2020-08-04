import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerBoxComponent } from './viewer-box.component';

describe('ViewerBoxComponent', () => {
  let component: ViewerBoxComponent;
  let fixture: ComponentFixture<ViewerBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
