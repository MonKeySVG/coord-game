import { Component } from '@angular/core';
import {GameManagerService} from "../game-manager.service";
import {ScoreService} from "../score.service";

@Component({
  selector: 'app-score-screen',
  templateUrl: './score-screen.component.html',
  styleUrl: './score-screen.component.css'
})
export class ScoreScreenComponent {
  constructor(private gameManagerService: GameManagerService,
              public scoreService: ScoreService) { }

  startGame() {
    this.gameManagerService.startGame();
    console.log('Game started');
  }
}
