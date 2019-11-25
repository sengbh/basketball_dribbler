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

  constructor() { }
}
