import { Component, OnInit, Input } from '@angular/core';
import {PlayerClass} from '../player';
//import {PLAYERS} from '../player-list';
import {PlayerService} from '../player.service';


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
  //this is being removed as we used PlayerService instead
  //private players: PlayerClass[] = PLAYERS;

  @Input('screenOne') screenOne : any = true;

  constructor( private playerService: PlayerService) { }

  ngOnInit() {
  }

}
