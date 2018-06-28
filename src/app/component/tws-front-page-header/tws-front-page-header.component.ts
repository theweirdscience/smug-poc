import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tws-front-page-header',
  templateUrl: './tws-front-page-header.component.html',
  styleUrls: ['./tws-front-page-header.component.css']
})
export class TwsFrontPageHeaderComponent implements OnInit {
  @Input() headerImage: any;
  @Input() headerLabel: string;

  constructor() { }

  ngOnInit() {
  }

}
