import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {

  startingGame: boolean = false;
  gameStarted: boolean = false;
  private gameCountdown!: number;
  private startCountdown!: number;

  private startingGameSubject = new Subject<boolean>();

  constructor() { }

  startGame() {
    this.startingGame = true;
    this.startingGameSubject.next(this.startingGame);
    this.startCountdown = 3;
    this.gameCountdown = 30;

    const startIntervalId = setInterval(() => {
      this.startCountdown--;
      console.log(this.startCountdown);
      if (this.startCountdown === 0) {
        this.gameStarted = true;
        clearInterval(startIntervalId);
        const gameIntervalId = setInterval(() => {
          this.gameCountdown--;
          console.log(this.gameCountdown);
          if (this.gameCountdown === 0) {
            clearInterval(gameIntervalId);
          }
        }, 1000);
      }
    }, 1000);
  }

  getStartCountdown(): number {
    return this.startCountdown;
  }

  getGameCountdown(): number {
    return this.gameCountdown;
  }

  getStartingGameObservable() {
    return this.startingGameSubject.asObservable();
  }
}
