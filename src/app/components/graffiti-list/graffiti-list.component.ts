import {Component, Input, EventEmitter, Output} from '@angular/core';
import {IGraffiti} from 'src/app/models/graffiti.model';

@Component({
  selector: 'graffiti-list',
  templateUrl: './graffiti-list.component.html',
  styleUrls: ['./graffiti-list.component.scss']
})
export class GraffitiListComponent {
  @Output() public removeEvent: EventEmitter<IGraffiti> = new EventEmitter();
  @Input('tags') public tags: IGraffiti;

  public remove(removeTarget: IGraffiti): void {
    this.removeEvent.emit(removeTarget);
  }
}
