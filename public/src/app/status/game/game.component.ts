import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  players;
  gameNum;

  constructor(private _route: ActivatedRoute, private _playerService: PlayerService) {
    this._route.params.subscribe((params) => {
      this.gameNum = params.gameNum;
      this.getPlayers();
    });
  }

  getPlayers() {
    this._playerService.retrievePlayers((players) => {
      this.players = players;
    });
  }

  playing(id, gameNum) {
    let game = "game" + gameNum;
    let body = {};
    body[game] = true;
    this._playerService.updatePlayer(id, gameNum, body, (players) => {
      this.players = players;
    });
  }

  notplaying(id, gameNum) {
    let game = "game" + gameNum;
    let body = {};
    body[game] = false;
    this._playerService.updatePlayer(id, gameNum, body, (players) => {
      this.players = players;
    });
  }

  undecided(id, gameNum) {
    let game = "game" + gameNum;
    let body = {};
    body[game] = null;
    this._playerService.updatePlayer(id, gameNum, body, (players) => {
      this.players = players;
    });
  }

  ngOnInit() {
  }

}
