import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graffiti',
  templateUrl: './graffiti.component.html',
  styleUrls: ['./graffiti.component.sass']
})
export class GraffitiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export interface IGraffiti {
  tag: string;
  notes: string | null;
}