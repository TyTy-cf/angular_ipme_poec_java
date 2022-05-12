import {HttpHeaders} from "@angular/common/http";

export class UrlApiConstantes {

  /** Header */
  static headers: {headers: HttpHeaders} = {
    headers: new HttpHeaders({
      'Content-Type': 'application/ld+json',
    })
  };

  /** STEAMISH */
  static urlApi: string = 'https://steam-ish.test-02.drosalys.net';
  static urlGames: string = '/api/games?page=1';
  static urlAccountsPaginated: string = '/api/accounts?page=1';
  static urlAccounts: string = '/api/accounts/';

  /** Digimon */
  static urlDigimon: string = 'https://digimon-api.herokuapp.com/api/digimon';
  static urlDigimonLevel: string = 'https://digimon-api.herokuapp.com/api/digimon/level/';

}
