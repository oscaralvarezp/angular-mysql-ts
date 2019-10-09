import { Component, OnInit } from '@angular/core';
import { Games } from 'src/app/intefaces/games';
import { GamesService } from 'src/app/services/games.service';

import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  game: Games = {
    id: 0,
    title: '',
    description: '',
    image: '',
    create_at: new Date()
  };

  edit: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private route: Router, private gamesService: GamesService) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.gamesService.getGame(params.id).subscribe(res => {
        this.game = res[0];
        this.edit = true;
      }, err => console.log(err));
    }
  }

  createGame() {
    delete this.game.id;
    delete this.game.create_at;
    this.gamesService.createGame(this.game)
    .subscribe(res => {
      console.log(res);
      this.route.navigate(['/games']);
    },
    err => console.log(err));
  }

  updateGame() {
    delete this.game.create_at;
    this.gamesService.updateGame(this.game.id,this.game).subscribe(res => {
      console.log(res);
      this.route.navigate(['']);
    }, err => console.log(err));
  }

}
