import { Component } from '@angular/core';
import {GameManagerService} from "./game-manager.service";

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

  constructor(private gameManagerService: GameManagerService) { }

  ngOnInit() {
    this.gameManagerService.getStartingGameObservable().subscribe(startingGame => {
      if (startingGame) {
        this.gameState = GameState.GameMode1;
      }
    });
  }


  gameState = GameState.Menu;
  protected readonly GameState = GameState;
}
