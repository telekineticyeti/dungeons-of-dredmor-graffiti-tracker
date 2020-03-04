import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {State} from './reducers/graffiti.reducer';
import {GraffitiActions} from './actions';
import {IGraffiti} from './models/graffiti.model';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {GraffitiService} from './services/graffiti.service';
import {IMenuClick} from './components/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public tag: string = '';
  public GraffitiSubscription: Subscription;
  private graffiti$: Observable<State>;
  public GraffitiList: IGraffiti[] = [];
  @ViewChild('uploader') private uploader: ElementRef;

  constructor(private store: Store<{graffitis}>, private service: GraffitiService) {
    this.graffiti$ = store.pipe(select('graffitis'));
  }

  public ngOnInit(): void {
    this.GraffitiSubscription = this.graffiti$
      .pipe(
        map(x => {
          this.GraffitiList = x.graffitis;
        })
      )
      .subscribe();
    this.store.dispatch(GraffitiActions.loadGraffitis());
  }

  public addGraffiti(savedGraffiti: IGraffiti): void {
    const newGraffiti: IGraffiti = savedGraffiti;
    this.store.dispatch(GraffitiActions.addGraffiti({payload: [newGraffiti]}));
  }

  public removeGraffiti(target: IGraffiti): void {
    this.store.dispatch(GraffitiActions.removeGraffiti({payload: target}));
  }

  public uploadFile(event: HTMLInputEvent): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const reader = new FileReader();
      reader.onload = () => {
        const content = JSON.parse(reader.result as string);
        this.store.dispatch(GraffitiActions.addGraffiti({payload: content}));
      };
      reader.readAsText(file);
    }
  }

  public onToolbarMenuClick(rawEvent: IMenuClick) {
    switch (rawEvent.item) {
      case 'Load':
        const event = new MouseEvent('click');
        this.uploader.nativeElement.dispatchEvent(event);
        break;
      case 'Export':
        this.service.downloadTags(this.GraffitiList);
        break;
      case 'Samples':
        this.store.dispatch(GraffitiActions.loadSampleGraffitis());
        break;
      case 'RemoveAll':
        this.store.dispatch(GraffitiActions.removeAllGraffiti());
    }
  }
}

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
