import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  players;

  constructor(private _playerService: PlayerService) {
    this.getPlayers();
  }

  getPlayers() {
    this._playerService.retrievePlayers((players) => {
      this.players = players;
    });
  }

  deletePlayer(id) {
    if (confirm("Are you sure you want to delete this player?")) {
      this._playerService.deletePlayer(id, (players) => {
        this.players = players;
      });
    }
  }

  ngOnInit() {
  }

}
