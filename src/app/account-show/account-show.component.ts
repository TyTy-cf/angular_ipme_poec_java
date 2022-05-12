import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpAccountService} from "../../services/account.service";
import {Account} from "../../models/steamish/account";

@Component({
  selector: 'app-account-show',
  templateUrl: './account-show.component.html',
  styleUrls: ['./account-show.component.scss']
})
export class AccountShowComponent implements OnInit {

  paramId: string|undefined;
  account: Account|undefined;
  onEdit: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private accountService: HttpAccountService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.paramId = params.id;
      if (this.paramId) {
        this.accountService.getAccountById(this.paramId).subscribe((account) => {
          this.account = account;
        });
      }
    });
  }

}
