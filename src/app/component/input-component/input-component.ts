import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-component',
  imports: [],
  templateUrl: './input-component.html',
  styleUrl: './input-component.css',
})
export class InputComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'password' | 'number' = 'text';

  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.valueChange.emit(input.value);
  }
}
