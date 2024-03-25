import {Component, Input} from '@angular/core';

export enum KeyState {
  Active,
  Error,
  Pressed,
  Inactive
}

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrl: './key.component.css'
})
export class KeyComponent {
  @Input() keyState: KeyState = KeyState.Active;
  @Input() layoutClass: string = "";

  getColor(): string {
    switch (this.keyState) {
      case KeyState.Active:
        return 'active';
      case KeyState.Error:
        return 'error';
      case KeyState.Pressed:
        return 'pressed';
      default:
        return 'inactive';
    }
  }
}
