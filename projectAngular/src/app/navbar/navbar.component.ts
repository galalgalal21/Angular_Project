import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logout()
  {
    localStorage.removeItem("token")
    this._Router.navigateByUrl("/login")
  }
  showMenuItem:boolean=true;

  constructor(private _Router:Router) {
    let token = localStorage.getItem("token");
    if(token)
    {
      this.showMenuItem=true;
    }
    else{
      this.showMenuItem=false;
    }
   }

  ngOnInit(): void {
    
  }

}
