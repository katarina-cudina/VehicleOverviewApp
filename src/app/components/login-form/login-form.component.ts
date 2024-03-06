import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  imports: [ReactiveFormsModule, ButtonComponent]
})

export class LoginFormComponent {
  forbiddenNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i;
      const isValid = regEx.test(control.value);
      return !isValid ? { password: { value: control.value } } : null;
    };
  } 

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, this.forbiddenNameValidator()]), // will need custom validator (at least one capital letter, minimum 8 characters long, one number, one special char)
  }
  );

  ngOnInit() {
    console.log(this.loginForm);
  }

  onSubmit() {
    console.log('Submitting!');
  }
  

}
