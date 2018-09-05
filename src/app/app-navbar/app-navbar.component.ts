import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { $ } from 'protractor';


@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  menuFields = [{'displayName' : "dashboard", 'link' : "/loggedin-dashboard"},
                {'displayName' : "events", 'link' : "/events"},
                {'displayName' : "min profil", 'link' : "/my-profile"},
                {'displayName' : "betaling", 'link' : "/payment"}];

  public navbarCollapsed = true;
  public isMobile: boolean = false;

  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
});

  constructor(private authService: AuthService) { }

  ngOnInit() {
    if (window.screen.width <= 600) {
        this.isMobile = true;
    }
  }

  signout() {
    this.authService.doSignout();
  }

}
