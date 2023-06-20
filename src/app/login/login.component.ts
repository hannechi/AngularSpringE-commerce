import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  Login(formloginaaaaa:NgForm)
  {
    console.log(formloginaaaaa.value.username)
  }

}
