import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class PlayerService {

  players;

  constructor(private _http: Http) { }

  retrievePlayers(callback) {
    this._http.get('/players').subscribe(
      (response) => {
        this.players = response.json();
        callback(this.players);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addPlayer(player, callback) {
    let body = JSON.stringify(player);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    this._http.post('/players', body, options).subscribe(
      (response) => {
        callback();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updatePlayer(id, gameNum, body, callback) {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    this._http.put('/players/' + id, bodyString, options).subscribe(
      (response) => {
        this.players = response.json();
        callback(this.players);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  deletePlayer(id, callback) {
    this._http.delete('/players/' + id).subscribe(
      (response) => {
        this.players = response.json();
        callback(this.players);
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
