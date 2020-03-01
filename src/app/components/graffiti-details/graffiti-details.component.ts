import {Component, Output, EventEmitter} from '@angular/core';
import {IGraffiti} from 'src/app/models/graffiti.model';

@Component({
  selector: 'graffiti-details',
  templateUrl: './graffiti-details.component.html',
  styleUrls: ['./graffiti-details.component.scss']
})
export class GraffitiDetailsComponent {
  @Output() public saveEvent: EventEmitter<IGraffiti> = new EventEmitter();

  selectedTag: IGraffiti = {
    tag: '',
    notes: null
  };

  public save(): void {
    if (this.selectedTag.tag) {
      this.saveEvent.emit(this.selectedTag);
      this.selectedTag = {tag: '', notes: null};
    }
  }
}
