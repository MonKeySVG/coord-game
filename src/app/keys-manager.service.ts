import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {KeyState} from "./key/key.component";

@Injectable({
  providedIn: 'root'
})
export class KeysManagerService {
  activeList: KeyState[] = Array(8).fill(KeyState.Inactive);
  private activeListSubject = new Subject<KeyState[]>();

  activeCount: number = 3;
  constructor() { }

  getActiveListObservable() {
    return this.activeListSubject.asObservable();
  }

  getLeftList(): KeyState[] {
    return this.activeList.slice(0, 4);
  }

  getRightList(): KeyState[] {
    return this.activeList.slice(4, 8);
  }

  setActive(index: number, value: boolean): void {
    this.activeList[index] = value ? KeyState.Active : KeyState.Inactive;
    this.activeListSubject.next(this.activeList);
  }

  setActiveForGame(): void {
    this.activeList.fill(KeyState.Inactive);
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

    while (this.activeList[randomIndex] === KeyState.Active) {

      randomIndex = this.generateRandomIndexWithExcluded(excludedIndex);

    }

    this.setActive(randomIndex, true);
  }


}
