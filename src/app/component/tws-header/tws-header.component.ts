import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tws-header',
  templateUrl: './tws-header.component.html',
  styleUrls: ['./tws-header.component.css']
})
export class TwsHeaderComponent implements OnInit {
  headerImage = {    
    src: "/assets/images/placeholder.png",
    alt: "SMUG header logo",
    title: "Placeholder"
  };
  
  headerLabel = {
    label: "Smart and Modular Unattended Garden"
  };

  constructor() { }

  ngOnInit() {
  }

}
