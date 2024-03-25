import { Component } from '@angular/core';
import {GameManagerService} from "../game-manager.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private gameManagerService: GameManagerService) { }

  startGame() {
    this.gameManagerService.startGame();
    console.log('Game started');
  }
}
