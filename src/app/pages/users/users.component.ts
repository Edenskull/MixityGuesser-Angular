import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	users: User[] = [];

	constructor(private userService: UserService, private router: Router) { }

	ngOnInit() {
		this.listUsers();
	}

	listUsers() {
		this.userService.getAllUsers().subscribe(user => this.users = user);
	}

}
