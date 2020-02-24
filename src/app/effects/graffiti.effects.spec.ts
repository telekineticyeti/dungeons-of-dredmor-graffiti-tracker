import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GraffitiEffects } from './graffiti.effects';

describe('GraffitiEffects', () => {
  let actions$: Observable<any>;
  let effects: GraffitiEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GraffitiEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<GraffitiEffects>(GraffitiEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
