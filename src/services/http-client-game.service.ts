import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IApiResult} from "../models/steamish/i-api-result";
import {Game} from "../models/steamish/game";

@Injectable({
  providedIn: 'root'
})
export class HttpClientGameService {

  urlApi: string = 'https://steam-ish.test-02.drosalys.net';

  constructor(private httpClient: HttpClient) { }

  getGames(urlGamesPaginated: string = '/api/games?page=1'): Observable<IApiResult<Game>> {
    return this.httpClient.get<IApiResult<Game>>(this.urlApi + urlGamesPaginated);
  }

}
