import { Component } from '@angular/core';
export enum GameState {
  Menu,
  GameMode1,
  Score
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'coord-game';

  gameState = GameState.Menu;
  protected readonly GameState = GameState;
}
