import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { FormInputComponent } from '../form-input/form-input.component';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-signin-form',
  standalone: true,
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss'],
  imports: [ReactiveFormsModule, FormInputComponent, ButtonComponent, RouterModule]
})
export class SigninFormComponent {

  constructor(private router: Router) {}

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i;
      const isValid = regEx.test(control.value);
      return !isValid ? { password: { value: control.value } } : null;
    };
  } 

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, this.passwordValidator()]),
  }
  );

  onSubmit = () => {
    this.router.navigateByUrl('/overview');
  }

}
