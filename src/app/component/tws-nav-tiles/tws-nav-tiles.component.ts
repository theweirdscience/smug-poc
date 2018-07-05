import { Component, OnInit, Input } from '@angular/core';
// import { TwsTileButtonComponent } from '../tws-tile-button/tws-tile-button.component';

@Component({
  selector: 'tws-nav-tiles',
  templateUrl: './tws-nav-tiles.component.html',
  styleUrls: ['./tws-nav-tiles.component.css']
})
export class TwsNavTilesComponent implements OnInit {
  @Input()
  navButtons:Object= [ 
    {
      label: "Dashboard",
      iconClass: "fab fa-envira",
      url: ""
    }, {
      label: "Profile",
      iconClass: "fas fa-user-circle",
      url: ""
    }, {
      label: "Settings",
      iconClass: "fas fa-sliders-h",
      url: ""
    }, {
      label: "Share",
      iconClass: "fas fa-share-alt",
      url: ""
    }, {
      label: "Expand",
      iconClass: "fas fa-shopping-cart",
      url: ""
    }, {
      label: "Something",
      iconClass: "fas fa-question-circle",
      url: ""
    }
  ];

  @Input() 
  button:Object = [
    {
      navClass: "navButtons"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
