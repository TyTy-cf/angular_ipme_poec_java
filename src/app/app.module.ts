import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessGameComponent } from './chess-game/chess-game.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import { GameIndexComponent } from './game-index/game-index.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AccountIndexComponent } from './account-index/account-index.component';
import { AccountShowComponent } from './account-show/account-show.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { DigimonIndexComponent } from './digimon-index/digimon-index.component';
import { DigimonLevelComponent } from './digimon-level/digimon-level.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { AccountFormCodeComponent } from './account-form-code/account-form-code.component';

@NgModule({
  declarations: [
    AppComponent,
    ChessGameComponent,
    NavbarComponent,
    GameIndexComponent,
    AccountIndexComponent,
    AccountShowComponent,
    PaginatorComponent,
    DigimonIndexComponent,
    DigimonLevelComponent,
    AccountFormComponent,
    AccountFormCodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
