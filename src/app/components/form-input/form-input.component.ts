import { Component, Input } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-input',
  standalone: true,
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class FormInputComponent {
  @Input() id: string = '';
  @Input() type: string = 'text';
  @Input() formControl: any = {};
  @Input() showWarning: boolean = false;
  @Input() warningMessage: string = 'This field is required.';
  @Input() name: string = '';




}
