import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup = new FormGroup({
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required,Validators.pattern(/^[a-z][0-9]{3}$/)])
  })

  login(){
    if(this.loginForm.invalid)
    {
      return;
    }
    this._AuthService.signIn(this.loginForm.value).subscribe((data)=>{
      if(data.message=='success'){
        localStorage.setItem("token",data.token)
        this._Router.navigateByUrl("/home")
      }
      else{
        alert(data.message);
        this.loginForm.reset()
      }
    })
  }

  constructor(private _AuthService:AuthService,private _Router:Router) { }

  ngOnInit(): void {
  }

}
