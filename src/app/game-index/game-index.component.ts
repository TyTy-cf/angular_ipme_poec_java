import { Component, OnInit } from '@angular/core';
import {HttpClientGameService} from "../../services/http-client-game.service";
import {IApiResult} from "../../models/steamish/i-api-result";
import {Game} from "../../models/steamish/game";

@Component({
  selector: 'app-game-index',
  templateUrl: './game-index.component.html',
  styleUrls: ['./game-index.component.scss']
})
export class GameIndexComponent implements OnInit {

  apiResult: IApiResult<Game>|undefined;

  constructor(private gameService: HttpClientGameService) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe((results) => {
      this.apiResult = results;
      // results["hydra:member"]
    });
  }

}
