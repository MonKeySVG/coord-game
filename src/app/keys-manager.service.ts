import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class KeysManagerService {
  activeList: boolean[] = Array(8).fill(false);
  private activeListSubject = new Subject<boolean[]>();

  activeCount: number = 3;
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
    let indices = this.generateXUniqueRandomIndices(this.activeCount);
    for (let i = 0; i < this.activeCount; i++) {
      this.setActive(indices[i], true);
    }
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

  private generateXUniqueRandomIndices(x: number): number[] {
    let uniqueIndices = new Set<number>();
    while (uniqueIndices.size < x) {
      uniqueIndices.add(this.generateRandomIndex());
    }
    return Array.from(uniqueIndices);
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
