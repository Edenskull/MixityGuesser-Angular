import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './service/auth.guard.service';

import { HomeComponent } from './pages/home/home.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { ScoreboardComponent } from './pages/scoreboard/scoreboard.component';


const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'rooms', component: RoomsComponent, canActivate: [AuthGuard] },
	{ path: 'credits', component: CreditsComponent },
	{ path: 'scoreboard', component: ScoreboardComponent, canActivate: [AuthGuard] },
	{ path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
