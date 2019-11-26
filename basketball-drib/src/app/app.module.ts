import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { PlaygroundComponent } from './playground/playground.component';
import { WinnerComponent } from './winner/winner.component';
import {PlayerService} from './player.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlaygroundComponent,
    WinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
