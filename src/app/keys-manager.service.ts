import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class KeysManagerService {
  activeList: boolean[] = Array(8).fill(false);
  private activeListSubject = new Subject<boolean[]>();
  constructor() { }

  getActiveListObservable() {
    return this.activeListSubject.asObservable();
  }
  getLeftList(): boolean[] {
    return this.activeList.slice(0, 4);
  }

  getRightList(): boolean[] {
    return this.activeList.slice(4, 8);
  }

  setActive(index: number, value: boolean): void {
    this.activeList[index] = value;
    this.activeListSubject.next(this.activeList);
  }

  setActiveForGame(): void {
    this.activeList.fill(false);
    let indices = this.generateTwoUniqueRandomIndices();
    this.setActive(indices[0], true);
    this.setActive(indices[1], true);
  }

  private generateRandomIndex(): number {
    return Math.floor(Math.random() * this.activeList.length);
  }

  private generateRandomIndexWithExcluded(excludedIndex: number): number {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * this.activeList.length);
    } while (randomIndex === excludedIndex);
    return randomIndex;
  }

  private generateTwoUniqueRandomIndices(): number[] {
    let index1 = this.generateRandomIndex();
    let index2 = this.generateRandomIndex();
    while (index1 === index2) {
      index2 = this.generateRandomIndex();
    }
    return [index1, index2];
  }

  checkAndSetTrue(excludedIndex: number): void {
    console.log('checkAndSetTrue');
    let randomIndex = this.generateRandomIndexWithExcluded(excludedIndex);
    while (this.activeList[randomIndex]) {
      randomIndex = this.generateRandomIndexWithExcluded(excludedIndex);
    }
    this.setActive(randomIndex, true);


  }


}
