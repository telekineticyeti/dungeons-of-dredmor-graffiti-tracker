import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraffitiTagComponent } from './graffiti-tag.component';

describe('GraffitiTagComponent', () => {
  let component: GraffitiTagComponent;
  let fixture: ComponentFixture<GraffitiTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraffitiTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraffitiTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
