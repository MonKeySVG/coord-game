import { Component } from '@angular/core';
import {GameManagerService} from "../game-manager.service";
import {ScoreService} from "../score.service";
import {KeyState} from "../key/key.component";

@Component({
  selector: 'app-score-screen',
  templateUrl: './score-screen.component.html',
  styleUrl: './score-screen.component.css'
})
export class ScoreScreenComponent {
  leftList: KeyState[] = [3, 3, 3, 3];
  rightList: KeyState[] = [3, 3, 0, 3];
  constructor(private gameManagerService: GameManagerService,
              public scoreService: ScoreService) { }

  startGame() {
    this.gameManagerService.startGame();
    console.log('Game started');
  }
}
