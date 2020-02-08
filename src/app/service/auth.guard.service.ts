import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

import { ToastrService } from 'ngx-toastr';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(private toastr: ToastrService, public authService: AuthenticationService, public router: Router) { }

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		if (!this.authService.isLoggedIn) {
			this.toastr.error('You need to login to access this page', 'Protected Page');
			this.router.navigate(['home'])
		}
		return true;
	}
}
