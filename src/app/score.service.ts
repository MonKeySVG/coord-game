import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private score: number = 0;

  constructor() { }

  incrementScore() {
    this.score++;
    console.log('Score: ' + this.score);
  }

  getScore() {
    return this.score;
  }
}
