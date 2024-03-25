import {Component, HostListener} from '@angular/core';
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





  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    const keys = [' '];
    const keysLeft = ['z', 'q', 's', 'd'];
    const keysRight = ['o', 'k', 'l', 'm'];

    if (event.key.toLowerCase() == keysLeft[0] && this.leftList[0]) {
      this.keysManagerService.setActive(0, false);
      this.keysManagerService.checkAndSetTrue(0);
    }
    if (event.key.toLowerCase() == keysLeft[1] && this.leftList[1]) {
      this.keysManagerService.setActive(1, false);
      this.keysManagerService.checkAndSetTrue(1);
    }
    if (event.key.toLowerCase() == keysLeft[2] && this.leftList[2]) {
      this.keysManagerService.setActive(2, false);
      this.keysManagerService.checkAndSetTrue(2);
    }
    if (event.key.toLowerCase() == keysLeft[3] && this.leftList[3]) {
      this.keysManagerService.setActive(3, false);
      this.keysManagerService.checkAndSetTrue(3);
    }
    if (event.key.toLowerCase() == keysRight[0] && this.rightList[0]) {
      this.keysManagerService.setActive(4, false);
      this.keysManagerService.checkAndSetTrue(4);
    }
    if (event.key.toLowerCase() == keysRight[1] && this.rightList[1]) {
      this.keysManagerService.setActive(5, false);
      this.keysManagerService.checkAndSetTrue(5);
    }
    if (event.key.toLowerCase() == keysRight[2] && this.rightList[2]) {
      this.keysManagerService.setActive(6, false);
      this.keysManagerService.checkAndSetTrue(6);
    }
    if (event.key.toLowerCase() == keysRight[3] && this.rightList[3]) {
      this.keysManagerService.setActive(7, false);
      this.keysManagerService.checkAndSetTrue(7);
    }


  }
}
