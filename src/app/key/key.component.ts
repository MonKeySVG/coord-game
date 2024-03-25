import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrl: './key.component.css'
})
export class KeyComponent {
  @Input() isActive: boolean = false;

  getColor(): string {
    return this.isActive ? 'active' : 'inactive';
  }
}
