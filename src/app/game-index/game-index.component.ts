import { Component, OnInit } from '@angular/core';
import {HttpClientGameService} from "../../services/http-client-game.service";
import {IApiResult} from "../../models/steamish/i-api-result";
import {Game} from "../../models/steamish/game";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

@Component({
  selector: 'app-game-index',
  templateUrl: './game-index.component.html',
  styleUrls: ['./game-index.component.scss']
})
export class GameIndexComponent implements OnInit {

  apiResult: IApiResult<Game>|undefined;

  constructor(private gameService: HttpClientGameService) { }

  ngOnInit(): void {
    this.updateGamePage();
  }

  updateGamePage(endUrl: string = '/api/games?page=1'): void {
    this.gameService.getGames(endUrl)
      .pipe(
        catchError(err => {
          console.log('Error lors de la récupération des données', err);
          return throwError(err);
        })
      )
      .subscribe((results) => {
        this.apiResult = results;
        console.log(results["hydra:view"])
        // results["hydra:member"]
      });
  }

}
