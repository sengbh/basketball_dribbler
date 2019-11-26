import { Component, OnInit, HostListener } from '@angular/core';
import {PlayerService} from '../player.service';


@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.dribble();
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent){
    this.playerService.playerScores(event);
  }

}
