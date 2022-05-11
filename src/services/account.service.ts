import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IApiResult} from "../models/steamish/i-api-result";
import {Game} from "../models/steamish/game";
import {UrlApiConstantes} from "./url-api-constantes";
import {Account} from "../models/steamish/account";

@Injectable({
  providedIn: 'root'
})
export class HttpAccountService {

  constructor(private httpClient: HttpClient) { }

  getAccounts(urlPaginated: string): Observable<IApiResult<Account>> {
    console.log(UrlApiConstantes.urlApi + urlPaginated);
    return this.httpClient.get<IApiResult<Account>>(UrlApiConstantes.urlApi + urlPaginated);
  }

  getAccountById(id: string): Observable<Account> {
    console.log(UrlApiConstantes.urlApi + UrlApiConstantes.urlAccounts + id);
    return this.httpClient.get<Account>(UrlApiConstantes.urlApi + UrlApiConstantes.urlAccounts + id);
  }
}
