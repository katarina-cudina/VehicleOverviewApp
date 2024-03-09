import { NgStyle } from '@angular/common';
import { Component, Input} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { noop } from 'rxjs';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [ButtonModule, NgStyle]
})

export class ButtonComponent{
  @Input() text: string = '';
  @Input() type: string = '';
  @Input() disabled: boolean = false;
  @Input() styleClass: string = '';
  @Input() onButtonClick: () => void = noop;

  

  onClick() {
    this.onButtonClick();
  }
}
