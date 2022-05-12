import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UrlApiConstantes} from "./url-api-constantes";
import {Digimon} from "../models/digimon";

@Injectable({
  providedIn: 'root'
})
export class HttpDigimonService {

  constructor(private httpClient: HttpClient) { }

  getDigimons(): Observable<Array<Digimon>> {
    console.log(UrlApiConstantes.urlDigimonLevel);
    return this.httpClient.get<Array<Digimon>>(UrlApiConstantes.urlDigimon);
  }

  getDigimonsByLevel(level: string): Observable<Array<Digimon>> {
    console.log(UrlApiConstantes.urlDigimonLevel + level);
    return this.httpClient.get<Array<Digimon>>(UrlApiConstantes.urlDigimonLevel + level);
  }

}
