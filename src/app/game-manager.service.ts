import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {ScoreService} from "./score.service";

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {

  startingGame: boolean = false;
  gameStarted: boolean = false;
  private gameCountdown!: number;
  private startCountdown!: number;

  private startingGameSubject = new Subject<boolean>();
  private gameStartedSubject = new Subject<boolean>();
  private gameCountdownSubject = new Subject<number>();

  constructor(private scoreService: ScoreService) { }

  startGame() {
    this.scoreService.resetScore();
    this.startingGame = true;
    this.startingGameSubject.next(this.startingGame);
    this.startCountdown = 3;
    this.gameCountdown = 30;

    const startIntervalId = setInterval(() => {
      this.startCountdown--;
      console.log(this.startCountdown);
      if (this.startCountdown === 0) {
        this.gameStarted = true;
        this.gameStartedSubject.next(this.gameStarted);
        clearInterval(startIntervalId);
        const gameIntervalId = setInterval(() => {
          this.gameCountdown--;
          this.gameCountdownSubject.next(this.gameCountdown);
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

  getGameStartedObservable() {
    return this.gameStartedSubject.asObservable();
  }

  getGameCountdownObservable() {
    return this.gameCountdownSubject.asObservable();
  }
}
