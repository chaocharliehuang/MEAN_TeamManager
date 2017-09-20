import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  player = {
    name: '',
    position: ''
  }

  constructor(private _playerService: PlayerService, private _router: Router) { }

  addPlayer() {
    this._playerService.addPlayer(this.player, () => {
      this.player = {name: '', position: ''};
      this._router.navigateByUrl('/players/list');
    });
  }

  ngOnInit() {
  }

}
