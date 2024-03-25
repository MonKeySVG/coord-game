import { Component } from '@angular/core';
import {KeysManagerService} from "../keys-manager.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  leftList: boolean[] = [];
  rightList: boolean[] = [];

  constructor(private keysManagerService: KeysManagerService) { }

  ngOnInit(): void {
    this.keysManagerService.getActiveListObservable().subscribe(activeList => {
      this.leftList = activeList.slice(0, 4);
      this.rightList = activeList.slice(4, 8);
    });
    this.keysManagerService.setActiveForGame();
  }
}
