import {Injectable, Inject, InjectionToken} from '@angular/core';
import {IGraffiti} from '../models/graffiti.model';
import {Observable, of, throwError} from 'rxjs';
import {map, tap, mergeMap} from 'rxjs/operators';
import SampleData from '../../assets/sampledata.json';

@Injectable({
  providedIn: 'root'
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
      map((value: string | null) => (value ? JSON.parse(value) : []))
    );
  }

  public getSampleTags(): Observable<IGraffiti[]> {
    const sampleData = <IGraffiti[]>SampleData;
    return this.getTags().pipe(
      map((arr: IGraffiti[]) => [...sampleData, ...arr]),
      tap((arr: IGraffiti[]) => this.storage.setItem(this.collectionKey, JSON.stringify(arr)))
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

  public deleteAll(): Observable<IGraffiti[]> {
    return this.supported().pipe(
      map(_ => this.storage.removeItem(this.collectionKey)),
      mergeMap(_ => of([]))
    );
  }

  public downloadTags(data: IGraffiti[]): void {
    var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', 'Conquest_of_the_wizardlands_graffitis.json');
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }
}

export function storageFactory() {
  return typeof window === undefined || typeof localStorage === undefined ? null : localStorage;
}

export const LOCAL_STORAGE_TOKEN = new InjectionToken('graffiti-local-storage', {
  factory: storageFactory
});
