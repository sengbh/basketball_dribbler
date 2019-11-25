import { Injectable } from '@angular/core';
import {PlayerClass} from './player';
import {PLAYERS} from './player-list';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  // retrieve players from PlayerClass and PLAYERS
  private players: PlayerClass[] = PLAYERS;
  getPlayers(): PlayerClass[]{
    return this.players;
  }

  // add player dynamically to screen
  addPlayer(name: string): void{
    var newPlayer = {name: name, keyCode: 'D', color: '#541288'};
    this.players.push(newPlayer);
  }

  constructor() { }
}
