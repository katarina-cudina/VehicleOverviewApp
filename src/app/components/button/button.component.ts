import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent{
  @Input() text: string = '';
  @Input() type: string = '';
  @Input() disabled: boolean = false;
  @Output() buttonClick = new EventEmitter();

  onClick() {
    this.buttonClick.emit();
  }
}
