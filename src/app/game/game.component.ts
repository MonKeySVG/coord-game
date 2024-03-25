import {Component, HostListener} from '@angular/core';
import {KeysManagerService} from "../keys-manager.service";
import {GameManagerService} from "../game-manager.service";
import {ScoreService} from "../score.service";
import {KeyState} from "../key/key.component";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  gameStarted!: boolean;

  leftList: KeyState[] = [];
  rightList: KeyState[] = [];

  lastCombo: number = 0;
  multiplicatorDelay: number = 500; // Delai en ms
  multiplicator: number = 0;
  combo: number = 0;



  constructor(private keysManagerService: KeysManagerService, public gameManagerService: GameManagerService, public scoreService: ScoreService) { }

  ngOnInit(): void {
    this.gameManagerService.getGameStartedObservable().subscribe(gameStarted => {
      this.gameStarted = gameStarted;
    });
    this.keysManagerService.getActiveListObservable().subscribe(activeList => {
      this.leftList = activeList.slice(0, 4);
      this.rightList = activeList.slice(4, 8);
    });
    this.keysManagerService.setActiveForGame();
  }





  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    console.log(this.leftList + " " + this.rightList);
    if (!this.gameStarted) {
      return;
    }

    const keys = [' '];
    const keysLeft = ['z', 'q', 's', 'd'];
    const keysRight = ['o', 'k', 'l', 'm'];

    if (event.key.toLowerCase() == keysLeft[0] && this.leftList[0] == KeyState.Active) {

      this.keysManagerService.setActive(0, false);
      this.keysManagerService.checkAndSetTrue(0);

      this.earnPoints();

    } else if (event.key.toLowerCase() == keysLeft[0] && this.leftList[0] == KeyState.Inactive) {
      this.losePoints();
    }






    if (event.key.toLowerCase() == keysLeft[1] && this.leftList[1] == KeyState.Active) {
      this.keysManagerService.setActive(1, false);
      this.keysManagerService.checkAndSetTrue(1);
      this.earnPoints();
    } else if (event.key.toLowerCase() == keysLeft[1] && this.leftList[1] == KeyState.Inactive) {
      this.losePoints();
    }

    if (event.key.toLowerCase() == keysLeft[2] && this.leftList[2] == KeyState.Active) {
      this.keysManagerService.setActive(2, false);
      this.keysManagerService.checkAndSetTrue(2);
      this.earnPoints();
    }else if (event.key.toLowerCase() == keysLeft[2] && this.leftList[2] == KeyState.Inactive) {
      this.losePoints();
    }

    if (event.key.toLowerCase() == keysLeft[3] && this.leftList[3] == KeyState.Active) {
      this.keysManagerService.setActive(3, false);
      this.keysManagerService.checkAndSetTrue(3);
      this.earnPoints();
    }else if (event.key.toLowerCase() == keysLeft[3] && this.leftList[3] == KeyState.Inactive) {
      this.losePoints();
    }

    if (event.key.toLowerCase() == keysRight[0] && this.rightList[0] == KeyState.Active) {
      this.keysManagerService.setActive(4, false);
      this.keysManagerService.checkAndSetTrue(4);
      this.earnPoints();
    } else if (event.key.toLowerCase() == keysRight[0] && this.rightList[0] == KeyState.Inactive) {
      this.losePoints();
    }

    if (event.key.toLowerCase() == keysRight[1] && this.rightList[1] == KeyState.Active) {
      this.keysManagerService.setActive(5, false);
      this.keysManagerService.checkAndSetTrue(5);
      this.earnPoints();
    } else if (event.key.toLowerCase() == keysRight[1] && this.rightList[1] == KeyState.Inactive) {
      this.losePoints();
    }

    if (event.key.toLowerCase() == keysRight[2] && this.rightList[2] == KeyState.Active) {
      this.keysManagerService.setActive(6, false);
      this.keysManagerService.checkAndSetTrue(6);
      this.earnPoints();
    } else if (event.key.toLowerCase() == keysRight[2] && this.rightList[2] == KeyState.Inactive) {
      this.losePoints();
    }

    if (event.key.toLowerCase() == keysRight[3] && this.rightList[3] == KeyState.Active) {
      this.keysManagerService.setActive(7, false);
      this.keysManagerService.checkAndSetTrue(7);
      this.earnPoints();
    } else if (event.key.toLowerCase() == keysRight[3] && this.rightList[3] == KeyState.Inactive) {
      this.losePoints();
    }


  }

  earnPoints() {
    this.combo++;
    if (this.combo % 10 === 0) {
      this.multiplicator++;
    }
    const currentTime = Date.now();


    if (currentTime - this.lastCombo <= this.multiplicatorDelay) {
      this.scoreService.incrementScore(1 + this.multiplicator);
    } else {
      this.scoreService.incrementScore(1);
      this.multiplicator = 0;
      this.combo = 0;
    }

    this.lastCombo = currentTime;
  }


  losePoints() {
    this.scoreService.decrementScore(5);
    this.combo = 0;
    this.multiplicator = 0;
  }
}
