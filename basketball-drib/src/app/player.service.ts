import { Injectable } from '@angular/core';
import {PlayerClass} from './player';
import {PLAYERS, KEYCODES} from './player-list';
import {Router} from '@angular/router';

declare var chroma: any;
// import * as chroma from 'chroma-js';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private keyCodes: string = KEYCODES;
  // retrieve players from PlayerClass and PLAYERS
  // private players: PlayerClass[] = PLAYERS;
  private players: PlayerClass[];
  private maxScores: number = 100;
  getPlayers(): PlayerClass[]{
    if(typeof localStorage !== 'undefined' 
      && typeof localStorage.players !== 'undefined'
      && localStorage.players !== ''){
        this.players = JSON.parse(localStorage.players);
      }else{
        this.players = PLAYERS;
      }
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

    if(typeof localStorage !== 'undefined'){
      localStorage.setItem('players', JSON.stringify(this.players));  
    }
  }

  playerScores(event: KeyboardEvent): void{
    var key = String.fromCharCode(event.keyCode);
    var t = this;
    if(event.keyCode>64 && event.keyCode<91){
      (this.players).forEach(function(player){
        if(player.keyCode == key){
          player.score += 10;
          player.remain_drib += 1;
          if(player.score>t.maxScores){
            t.router.navigate(['/winner', {player:JSON.stringify(player)}]);
          }
        }
      }
        );
    }
  }

  randomKeyCodes(): void{
    var randT = this;
    randT.players.forEach(function(elem){
      randT.keyCodes = randT.keyCodes.replace(elem.keyCode, '');
    }); 
  }

  dribble(): void{
    if(typeof this.players === 'undefined'){
      this.players = this.getPlayers();
    }
    (this.players).forEach(function(player){
      player.duration = (player.remain_drib>0?1/player.remain_drib:0)+'s';
      player.remain_drib = 0;
    }
    );
    var t = this;
    setTimeout(function(){
      t.dribble();
    },1000)
  }

  constructor(private router : Router) { }
}
