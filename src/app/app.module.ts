import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TwsTileButtonComponent } from './component/tws-tile-button/tws-tile-button.component';
import { TwsNavTilesComponent } from './component/tws-nav-tiles/tws-nav-tiles.component';
import { TwsFrontPageHeaderComponent } from './component/tws-front-page-header/tws-front-page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    TwsTileButtonComponent,
    TwsNavTilesComponent,
    TwsFrontPageHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
