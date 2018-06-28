import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tws-nav-tiles',
  templateUrl: './tws-nav-tiles.component.html',
  styleUrls: ['./tws-nav-tiles.component.css']
})
export class TwsNavTilesComponent implements OnInit {
  @Input() buttons: any[];

  constructor() { }

  ngOnInit() {
  }

}
