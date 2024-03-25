import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private score: number = 0;


  constructor() { }

  incrementScore(amount: number) {
    this.score += amount;
    console.log('Score: ' + this.score);
  }

  decrementScore(amount: number) {
    this.score -= amount;
    console.log('Score: ' + this.score);
  }

  getScore() {
    return this.score;
  }

  resetScore() {
    this.score = 0;
  }
}
