import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerClass } from '../player';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {

  private winner : PlayerClass;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.winner = JSON.parse(this.route.snapshot.paramMap.get('player'));
    localStorage.removeItem('players');
;  }

}
