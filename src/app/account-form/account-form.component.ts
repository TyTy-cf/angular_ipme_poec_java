import {Component, Input} from '@angular/core';
import {Account} from "../../models/steamish/account";

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent {

  @Input()
  account: Account = new Account();

  onSubmit(): void {
    console.log(this.account);
    // probablement un post vers l'api après...
  }
}
