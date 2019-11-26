import { Injectable } from '@angular/core';
import {PlayerClass} from './player';
import {PLAYERS, KEYCODES} from './player-list';

declare var chroma: any;
// import * as chroma from 'chroma-js';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private keyCodes: string = KEYCODES;
  // retrieve players from PlayerClass and PLAYERS
  private players: PlayerClass[] = PLAYERS;
  getPlayers(): PlayerClass[]{
    return this.players;
  }

  // add player dynamically to screen
  addPlayer(name: string): void{
    this.randomKeyCodes();
    var randNumber = Math.floor(Math.random()*100)%(this.keyCodes.length);
    var newKeyCode = this.keyCodes.charAt(randNumber);
    if(newKeyCode === '') return;

    var newPlayer = {name: name, keyCode: newKeyCode, color: chroma.random().hex() ,score: 0, duration: '0s', remain_drib: 0};
    this.players.push(newPlayer);
  }

  randomKeyCodes(): void{
    var randT = this;
    randT.players.forEach(function(elem){
      randT.keyCodes = randT.keyCodes.replace(elem.keyCode, '');
    }); 
  }

  constructor() { }
}
