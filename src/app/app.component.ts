import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  
  tile = [
    {
      navClass: "navButton"
    }
  ];

  headerImage = {
    src: "/assets/images/placeholder.png",
    alt: "image1",
    height: 300,
    width: 300,
    title: "Placeholder",
  };
  
  headerLabel = "Smart and Modular Unattended Garden";
  
}