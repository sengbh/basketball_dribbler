import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PlayersComponent} from './players/players.component';
import {PlaygroundComponent} from './playground/playground.component';
import { WinnerComponent } from './winner/winner.component';

const routes: Routes = [
  {path: '', component: PlayersComponent},
  {path: 'play', component: PlaygroundComponent},
  {path: 'winner', component: WinnerComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
