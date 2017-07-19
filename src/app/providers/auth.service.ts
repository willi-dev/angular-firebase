import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
@Injectable()
export class AuthService {

	public isLoggedIn: boolean;
	public user: Observable<firebase.User>;
	public items: FirebaseListObservable<any[]>;
	public messages: FirebaseListObservable<any[]>;

  	constructor(
  		public afAuth: AngularFireAuth, 
  		private router: Router, 
  	){ 
  		// code constructor here
  		this.user = afAuth.authState;
  	}

  	/*
  	 * loginAuth
  	 */
  	loginAuth(){
		this.afAuth
			.authState
			.subscribe(
				(auth) => {
					if( auth == null ){
						console.log( "Not Logged In" );
						this.router.navigate(['login']);
						// this.isLoggedIn = false;
						this.setLoginState( false );
					}else{
						console.log( "Successfully Logged In." );
						this.router.navigate(['']);
						// this.isLoggedIn = true;
						this.setLoginState( true );
					}
				}	
		);
  	}

  	setLoginState( state: boolean ){
  		this.isLoggedIn = state;
  	}

  	/*
  	 * loginWithGoogle
  	 */
  	loginWithGoogle(){
  		return this.afAuth
  			.auth
  			.signInWithPopup( new firebase.auth.GoogleAuthProvider() )
  			.then( value => {
  				console.log( 'Nice, it worked!');
  			})
  			.catch( err => {
  				console.log( 'Something went wrong: ', err.message );
  			});
  	}

  	/*
  	 * logout
  	 */
  	logout(){
  		return this.afAuth
  			.auth
  			.signOut();
  	}
}
