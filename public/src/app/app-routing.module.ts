import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersComponent } from './players/players.component';
import { ListComponent } from './players/list/list.component';
import { AddPlayerComponent } from './players/add-player/add-player.component';

import { StatusComponent } from './status/status.component';
import { GameComponent } from './status/game/game.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'players/list' },
  { path: 'players', component: PlayersComponent, children: [
    { path: 'list', component: ListComponent },
    { path: 'addplayer', component: AddPlayerComponent }
  ]},
  { path: 'status', component: StatusComponent, children: [
    { path: 'game/:gameNum', component: GameComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
