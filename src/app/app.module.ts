import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './static/header/header.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { ToastrModule } from 'ngx-toastr';

import { environment } from '../environments/environment';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { ScoreboardComponent } from './pages/scoreboard/scoreboard.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		RoomsComponent,
		CreditsComponent,
		ScoreboardComponent,
		HomeComponent,
		UsersComponent
	],
	imports: [
		CommonModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot(),
		BrowserModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFireAuthModule,
		AngularFireDatabaseModule
	],
	providers: [AngularFirestore],
	bootstrap: [AppComponent]
})
export class AppModule { }
