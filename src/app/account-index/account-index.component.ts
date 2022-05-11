import { Component, OnInit } from '@angular/core';
import {HttpAccountService} from "../../services/account.service";
import {UrlApiConstantes} from "../../services/url-api-constantes";
import {IApiResult} from "../../models/steamish/i-api-result";
import {Account} from "../../models/steamish/account";

@Component({
  selector: 'app-account-index',
  templateUrl: './account-index.component.html',
  styleUrls: ['./account-index.component.scss']
})
export class AccountIndexComponent implements OnInit {

  apiResults: IApiResult<Account>|undefined;

  constructor(private accountService: HttpAccountService) { }

  ngOnInit(): void {
    this.updateResult();
  }

  updateResult(url: string = UrlApiConstantes.urlAccounts) {
    this.accountService.getAccounts(url).subscribe((results) => {
      this.apiResults = results;
    });
  }
}
