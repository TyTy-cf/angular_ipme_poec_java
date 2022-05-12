import {Component, Input, OnInit} from '@angular/core';
import {Account} from "../../models/steamish/account";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-form-code',
  templateUrl: './account-form-code.component.html',
  styleUrls: ['./account-form-code.component.scss']
})
export class AccountFormCodeComponent implements OnInit {

  @Input()
  account: Account = new Account();
  formGroup!: FormGroup;
  displayInfos: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup(
      {
        name: new FormControl(
          this.account.name,
          [
            Validators.required,
            Validators.minLength(5)
          ]
        ),
        email: new FormControl(
          this.account.email,
          [
            Validators.required,
          ]
        ),
        nickname: new FormControl(
          this.account.nickname,
          [
            Validators.required,
          ]
        ),
      }
    );
  }

  get name(): AbstractControl {
    return <AbstractControl>this.formGroup.get('name');
  }

  get nickname(): AbstractControl {
    return <AbstractControl>this.formGroup.get('nickname');
  }

  get email(): AbstractControl {
    return <AbstractControl>this.formGroup.get('email');
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      this.account.name = this.name.value;
      this.account.email = this.email.value;
      this.account.nickname = this.nickname.value;
      this.displayInfos = true;
      // post vers api
      this.router.navigate(['/']);
    }
  }
}
