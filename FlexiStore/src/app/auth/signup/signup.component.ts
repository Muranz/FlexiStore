import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide:boolean = true;
  pwdRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
  nameRegex = new RegExp("^[a-zA-Z]+$");
  userName = new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(10),Validators.pattern(this.nameRegex)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  pwd   = new FormControl('', [Validators.required, Validators.pattern(this.pwdRegex)]);


  constructor(private authService: AuthService) { }

  getUserNameErrorMessage() {
    return (this.userName.hasError('required') ||
        this.userName.hasError('minlength')) ? 'Name must be minimum 5 characters' :
        this.userName.hasError('maxlength') ? 'Name must be maximum 5 characters' :
        this.userName.hasError('pattern') ? 'Name can contain only alphabets':
            '';
  }


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
    this.authService.registerUser({
      email: this.email.value,
      password: this.pwd.value
    });
    console.log(this.userName.value);
    console.log(this.email.value);
    console.log(this.pwd.value);
  }

}
