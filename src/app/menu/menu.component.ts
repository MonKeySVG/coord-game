import { Component } from '@angular/core';
import {GameManagerService} from "../game-manager.service";
import {KeyState} from "../key/key.component";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  leftList: KeyState[] = [0, 0, 3, 3];
  rightList: KeyState[] = [3, 0, 3, 3];
  constructor(private gameManagerService: GameManagerService) { }

  startGame() {
    this.gameManagerService.startGame();
    console.log('Game started');
  }
}
