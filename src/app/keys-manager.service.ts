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
    let indices = this.generateTwoUniqueRandomIndices();
    this.setActive(indices[0], true);
    this.setActive(indices[1], true);
  }

  private generateTwoUniqueRandomIndices(): number[] {
    let index1 = Math.floor(Math.random() * this.activeList.length);
    let index2 = Math.floor(Math.random() * this.activeList.length);
    while (index1 === index2) {
      index2 = Math.floor(Math.random() * this.activeList.length);
    }
    return [index1, index2];
  }
}
