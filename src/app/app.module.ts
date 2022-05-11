import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessGameComponent } from './chess-game/chess-game.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import { GameIndexComponent } from './game-index/game-index.component';
import {FormsModule} from "@angular/forms";
import { AccountIndexComponent } from './account-index/account-index.component';
import { AccountShowComponent } from './account-show/account-show.component';

@NgModule({
  declarations: [
    AppComponent,
    ChessGameComponent,
    NavbarComponent,
    GameIndexComponent,
    AccountIndexComponent,
    AccountShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
