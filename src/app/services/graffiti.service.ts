import {Injectable, Inject, InjectionToken} from '@angular/core';
import {IGraffiti} from '../components/graffiti/graffiti.component';
import {Observable, of, throwError} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GraffitiService {
  constructor(@Inject(LOCAL_STORAGE_TOKEN) private storage: Storage) {}

  public tags: string[] = [];
  private collectionKey = 'graffiti-app';

  private supported(): Observable<boolean> {
    return this.storage !== null ? of(true) : throwError('Local Storage Not Supported');
  }

  public getTags(): Observable<IGraffiti[]> {
    return this.supported().pipe(
      map(_ => this.storage.getItem(this.collectionKey)),
      map((value: string | null) => (value ? JSON.parse(value) : [])),
    );
  }

  addTag(graffitis: IGraffiti[]): Observable<IGraffiti[]> {
    return this.getTags().pipe(
      map((value: IGraffiti[]) => [...value, ...graffitis]),
      tap((value: IGraffiti[]) => this.storage.setItem(this.collectionKey, JSON.stringify(value))),
    );
  }
}

export function storageFactory() {
  return typeof window === undefined || typeof localStorage === undefined ? null : localStorage;
}

export const LOCAL_STORAGE_TOKEN = new InjectionToken('graffiti-local-storage', {
  factory: storageFactory,
});
