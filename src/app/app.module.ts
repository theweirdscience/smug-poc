import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TwsMenuComponent } from './component/tws-menu/tws-menu.component';
import { TwsHeaderComponent } from './component/tws-header/tws-header.component';
import { PracticeCardsComponent } from './component/practice-cards/practice-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    TwsMenuComponent,
    TwsHeaderComponent,
    PracticeCardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
