import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleTourComponent } from './little-tour.component';

describe('LittleTourComponent', () => {
  let component: LittleTourComponent;
  let fixture: ComponentFixture<LittleTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LittleTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
