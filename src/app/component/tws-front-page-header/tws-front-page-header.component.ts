import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tws-front-page-header',
  templateUrl: './tws-front-page-header.component.html',
  styleUrls: ['./tws-front-page-header.component.css']
})
export class TwsFrontPageHeaderComponent implements OnInit {
  @Input ()
    headerImage: Object= {    
    src: "src/assets/images/placeholder.png",
    alt: "SMUG header logo",
    title: "Placeholder",
  };
  
  @Input ()
    headerLabel: Object= {
      label: "Smart and Modular Unattended Garden"
  };

  constructor() { }

  ngOnInit() {
  }

}
