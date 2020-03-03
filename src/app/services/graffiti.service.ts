import {Injectable, Inject, InjectionToken} from '@angular/core';
import {IGraffiti} from '../models/graffiti.model';
import {Observable, of, throwError} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import SampleData from '../../assets/sampledata.json';

@Injectable({
  providedIn: 'root'
})
export class GraffitiService {
  constructor(@Inject(LOCAL_STORAGE_TOKEN) private storage: Storage) {
    const sampleData = <any>SampleData;
    console.log(sampleData);
  }

  public tags: string[] = [];
  private collectionKey = 'graffiti-app';

  private supported(): Observable<boolean> {
    return this.storage !== null ? of(true) : throwError('Local Storage Not Supported');
  }

  public getTags(): Observable<IGraffiti[]> {
    return this.supported().pipe(
      map(_ => this.storage.getItem(this.collectionKey)),
      map((value: string | null) => (value ? JSON.parse(value) : []))
    );
  }

  public addTag(tag: IGraffiti[]): Observable<IGraffiti[]> {
    return this.getTags().pipe(
      map((value: IGraffiti[]) => [...value, ...tag]),
      tap((value: IGraffiti[]) => this.storage.setItem(this.collectionKey, JSON.stringify(value)))
    );
  }

  public removeTag(tags: string[]): Observable<IGraffiti[]> {
    return this.getTags().pipe(
      map((arr: IGraffiti[]) => arr.filter(item => !tags.includes(item.tag))),
      tap((arr: IGraffiti[]) => this.storage.setItem(this.collectionKey, JSON.stringify(arr)))
    );
  }
}

export function storageFactory() {
  return typeof window === undefined || typeof localStorage === undefined ? null : localStorage;
}

export const LOCAL_STORAGE_TOKEN = new InjectionToken('graffiti-local-storage', {
  factory: storageFactory
});
