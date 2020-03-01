import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraffitiDetailsComponent } from './graffiti-details.component';

describe('GraffitiDetailsComponent', () => {
  let component: GraffitiDetailsComponent;
  let fixture: ComponentFixture<GraffitiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraffitiDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraffitiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
