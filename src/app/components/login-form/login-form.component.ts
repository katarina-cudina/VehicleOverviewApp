import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { FormInputComponent } from '../form-input/form-input.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  standalone: true,
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  imports: [ReactiveFormsModule, ButtonComponent, FormInputComponent]
})

export class LoginFormComponent {
  
  // we could move this helper function to separate folder
  forbiddenNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i;
      const isValid = regEx.test(control.value);
      return !isValid ? { password: { value: control.value } } : null;
    };
  } 

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, this.forbiddenNameValidator()]),
  }
  );

  router = new Router();
  onSubmit() {
    this.router.navigate(['/', 'overview']);
    // redirect to next page 
  }
  

}
