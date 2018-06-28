import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tws-tile-button',
  templateUrl: './tws-tile-button.component.html',
  styleUrls: ['./tws-tile-button.component.css']
})
export class TwsTileButtonComponent implements OnInit {
  @Input() button: any;

  constructor() { }

  ngOnInit() {
  }

}
