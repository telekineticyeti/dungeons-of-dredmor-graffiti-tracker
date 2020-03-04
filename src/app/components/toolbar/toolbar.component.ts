import {Component, Output, EventEmitter} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output() public menuClickEvent: EventEmitter<IMenuClick> = new EventEmitter();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'github',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icon_github.svg')
    );
    iconRegistry.addSvgIcon(
      'load',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icon_load.svg')
    );
    iconRegistry.addSvgIcon(
      'import',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icon_import.svg')
    );
  }
  public navigateGithub(): void {
    window.open(
      'https://github.com/telekineticyeti/dungeons-of-dredmor-graffiti-tracker',
      '_blank'
    );
  }
  public menuClick(event: MouseEvent, item: MenuItemTypes): void {
    this.menuClickEvent.emit({event, item});
  }
}

export interface IMenuClick {
  event: MouseEvent;
  item: MenuItemTypes;
}

export type MenuItemTypes = 'Export' | 'Load' | 'Samples' | 'RemoveAll';
