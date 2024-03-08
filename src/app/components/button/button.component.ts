import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [ButtonModule]
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
