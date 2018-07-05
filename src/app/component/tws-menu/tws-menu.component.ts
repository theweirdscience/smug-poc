import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tws-menu',
  templateUrl: './tws-menu.component.html',
  styleUrls: ['./tws-menu.component.css']
})
export class TwsMenuComponent implements OnInit {
  navButtons = [ 
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

  constructor() { }

  ngOnInit() {
  }

}
