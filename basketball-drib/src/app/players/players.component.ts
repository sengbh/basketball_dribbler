import { Component, OnInit } from '@angular/core';
import {PlayerClass} from '../player';
import {PLAYERS} from '../player-list';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  //hardcode data
  // private player: PlayerClass = {
  //   keyCode: 'A',
  //   name: 'player 1',
  //   color: '#BD10E0'
  // };
  private players: PlayerClass[] = PLAYERS;

  constructor() { }

  ngOnInit() {
  }

}
