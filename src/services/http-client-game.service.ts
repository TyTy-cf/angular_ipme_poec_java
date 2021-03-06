import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IApiResult} from "../models/steamish/i-api-result";
import {Game} from "../models/steamish/game";
import {UrlApiConstantes} from "./url-api-constantes";

@Injectable({
  providedIn: 'root'
})
export class HttpClientGameService {

  constructor(private httpClient: HttpClient) { }

  getGames(urlGamesPaginated: string): Observable<IApiResult<Game>> {
    console.log(UrlApiConstantes.urlApi + urlGamesPaginated);
    return this.httpClient.get<IApiResult<Game>>(UrlApiConstantes.urlApi + urlGamesPaginated);
  }

}
