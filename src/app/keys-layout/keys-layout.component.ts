import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-keys-layout',
  templateUrl: './keys-layout.component.html',
  styleUrl: './keys-layout.component.css'
})
export class KeysLayoutComponent {
  @Input() activeList: boolean[] = [];
}
