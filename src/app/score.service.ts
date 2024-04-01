import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private score: number = 0;
  private highestCombo: number = 0;
  private Accuracy: number = 0;
  leaderboard: number[] = [];
  betterThanPercentage: number = 0;


  constructor(private httpClient: HttpClient) { }

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

  getBetterThanPercentage() {
    const sortedScores = [...this.leaderboard].sort((a, b) => b - a);
    const lowerScoreIndex = sortedScores.findIndex(score => score < this.score);
    this.betterThanPercentage = lowerScoreIndex !== -1 ? parseFloat((100 - ((lowerScoreIndex / sortedScores.length) * 100)).toFixed(2)) : 100;

    console.log("Leaderboard : " + this.leaderboard);

    return this.betterThanPercentage;
  }

  submitScore() {
    this.httpClient
      .post('https://coord-game-default-rtdb.europe-west1.firebasedatabase.app/scores.json',
        {
          score: this.score
        })
      .subscribe(response => {
        console.log(response);
      });
  }

  getScores(): Observable<any> {
    return this.httpClient.get('https://coord-game-default-rtdb.europe-west1.firebasedatabase.app/scores.json');
  }

  getLeaderboard() {
    this.httpClient.get('https://coord-game-default-rtdb.europe-west1.firebasedatabase.app/scores.json').subscribe((data: any) => {
      this.leaderboard = Object.values(data).map((scoreObject: any) => scoreObject.score)
        .sort((a: number, b: number) => b - a);
    });

    return this.leaderboard;
  }
}
