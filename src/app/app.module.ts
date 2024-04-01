import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyComponent } from './key/key.component';
import { KeysLayoutComponent } from './keys-layout/keys-layout.component';
import { GameComponent } from './game/game.component';
import { MenuComponent } from './menu/menu.component';
import { ScoreScreenComponent } from './score-screen/score-screen.component';
import { HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    KeyComponent,
    KeysLayoutComponent,
    GameComponent,
    MenuComponent,
    ScoreScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
