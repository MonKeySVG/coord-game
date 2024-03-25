import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyComponent } from './key/key.component';
import { KeysLayoutComponent } from './keys-layout/keys-layout.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyComponent,
    KeysLayoutComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
