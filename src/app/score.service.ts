import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private score: number = 0;
  private highestCombo: number = 0;
  private Accuracy: number = 0;


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

  resetAll() {
    this.score = 0;
    this.highestCombo = 0;
    this.Accuracy = 0;
  }

  setAccuracy(accuracy: number) {
    this.Accuracy = accuracy;
    console.log('Accuracy: ' + this.Accuracy);
  }

  setHighestCombo(combo: number) {
    if (combo > this.highestCombo) {
      this.highestCombo = combo;
      console.log('Highest Combo: ' + this.highestCombo);
    }
  }

  getAccuracy() {
    return this.Accuracy;
  }

  getHighestCombo() {
    return this.highestCombo;
  }
}
