import { Component, OnInit } from '@angular/core';

import { GamesService } from "../../services/games.service";
import { Games } from 'src/app/intefaces/games';
import { Router } from "@angular/router";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {


  games: any = [];
  filterGames = '';

  constructor(private route: Router, private gamesService: GamesService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.gamesService.getGames().subscribe(res => {
      this.games = res;
    }, err => console.log(err));
  }

  deleteGame(id: string) {
    this.gamesService.deleteGame(id).subscribe(res => {
      console.log(res);
      this.getGames();
    }, err => console.log(err));
  }

}
