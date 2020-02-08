import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private location: Location, public authService: AuthenticationService) { }

  ngOnInit() { }

}
