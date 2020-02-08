import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { User } from '../models/user';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
	userData: any;

	constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth, public router: Router, public ngZone: NgZone) {
		this.afAuth.authState.subscribe(user => {
			if (user) {
				this.userData = user;
				localStorage.setItem('user', JSON.stringify(this.userData));
				JSON.parse(localStorage.getItem('user'));
			} else {
				localStorage.setItem('user', null);
				JSON.parse(localStorage.getItem('user'));
			}
		});
	}

	get isLoggedIn(): boolean {
		const user = JSON.parse(localStorage.getItem('user'));
		return (user !== null) ? true : false;
	}

	GoogleAuth() {
		return this.AuthLogin(new auth.GoogleAuthProvider());
	}

	AuthLogin(provider) {
		return this.afAuth.auth.signInWithPopup(provider)
		.then((result) => {
			this.ngZone.run(() => {
				this.router.navigate(['rooms']);
			})
			this.SetUserData(result.user);
		}).catch((error) => {
			window.alert(error)
		})
	}

	SetUserData(user) {
		const userDoc: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
		const userData: User = {
			uid: user.uid,
			email: user.email,
			displayName: user.displayName,
			photoURL: user.photoURL
		}
		return userDoc.set(userData, {merge: true});
	}

	SignOut() {
		return this.afAuth.auth.signOut().then(() => {
			localStorage.removeItem('user');
			this.router.navigate(['home']);
		})
	}

}
