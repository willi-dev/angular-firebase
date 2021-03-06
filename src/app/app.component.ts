import { Component } from '@angular/core';
import { AuthService } from "./providers/auth.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor( public authService: AuthService ){
		this.authService.loginAuth();
	}

	login(){
		this.authService.loginWithGoogle();
	}

	logout(){
		this.authService.logout();
	}

}