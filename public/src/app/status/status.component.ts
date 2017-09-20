import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PlayerService } from '../player.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  gameNum = 1;

  constructor(private _playerService: PlayerService) { }

  setGameNum(n) {
    this.gameNum = n;
  }

  ngOnInit() {
  }

}
