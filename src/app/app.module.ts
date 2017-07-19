import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthService } from './providers/auth.service';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { RouterModule, Routes } from "@angular/router";

import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// export config
export const firebaseConfig = {
	apiKey: 'AIzaSyBl1K4sySIH3zyJiyrQWcSoLyth1uOwolc',
	authDomain: 'baraja-angular-firebase.firebaseapp.com',
	databaseURL: 'https://baraja-angular-firebase.firebaseio.com',
	projectId: "baraja-angular-firebase",
	storageBucket: 'baraja-angular-firebase.appspot.com',
	messagingSenderId: '211274783235',
};

const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'login', component: LoginPageComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		LoginPageComponent,
		HomePageComponent,
		HeaderComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AngularFireModule.initializeApp(firebaseConfig),
		RouterModule.forRoot( routes ),
		AngularFireDatabaseModule,
	    AngularFireAuthModule
	],
	providers: [AuthService],
	bootstrap: [AppComponent]
})
export class AppModule { }
