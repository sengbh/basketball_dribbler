import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { PlaygroundComponent } from './playground/playground.component';
import { WinnerComponent } from './winner/winner.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlaygroundComponent,
    WinnerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }