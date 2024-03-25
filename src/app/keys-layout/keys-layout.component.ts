import {Component, Input} from '@angular/core';
import {KeyState} from "../key/key.component";

@Component({
  selector: 'app-keys-layout',
  templateUrl: './keys-layout.component.html',
  styleUrl: './keys-layout.component.css'
})
export class KeysLayoutComponent {
  @Input() keyStateList: KeyState[] = [];
  @Input() layoutClass: string = "";

  protected readonly KeyState = KeyState;
}
