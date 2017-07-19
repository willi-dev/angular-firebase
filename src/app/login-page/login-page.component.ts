import { Component, OnInit } from '@angular/core';
import { AuthService } from "../providers/auth.service";
import { Router } from "@angular/router";

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  	constructor( public authService: AuthService ) { 
        this.authService.loginAuth();
    }

    ngOnInit() {
        // code here
    }

  	// login(){
  	// 	this.authService.loginWithGoogle();
  	// }
}
