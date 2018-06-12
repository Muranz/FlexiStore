import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  hide:boolean = true;
  pwdRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
  email = new FormControl('', [Validators.required, Validators.email]);
  pwd   = new FormControl('', [Validators.required, Validators.pattern(this.pwdRegex)]);


  constructor(private formBuilder: FormBuilder,private authService: AuthService) { }



  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'Please enter an email' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getPwdErrorMessage() {
    return this.pwd.hasError('required') ? 'You must enter a value' :
        this.pwd.hasError('pattern') ? 'Password must be atleast 6 characters long! ' :
            '';
  }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login({
      email: this.email.value,
      password: this.pwd.value
    });
    console.log(this.email.value);
    console.log(this.pwd.value);
  }
}
