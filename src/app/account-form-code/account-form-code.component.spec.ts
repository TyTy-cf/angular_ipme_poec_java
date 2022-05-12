import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFormCodeComponent } from './account-form-code.component';

describe('AccountFormCodeComponent', () => {
  let component: AccountFormCodeComponent;
  let fixture: ComponentFixture<AccountFormCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountFormCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountFormCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
