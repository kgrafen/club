import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { $ } from 'protractor';
import { UserFirebaseService } from '../user-firebase.service';
import { EventFirebaseService } from '../event-firebase.service';
import { User } from '../entity/user/user';


@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  username: string;
  rating = 0;
  public navbarCollapsed = true;
  public isMobile: boolean = false;
  metal = "";

  menuFields = [
                {'displayName' : "events", 'link' : "/events", 'description': "Listen over bruger arrangementer. Find dit næste event!"},
                {'displayName' : "min profil", 'link' : "/my-profile", 'description': "Opdater din profil og se status"},
                {'displayName' : "betaling", 'link' : "/payment", 'description': "Til betalingsgateway hvor du kan styre dit abonnement"},
                {'displayName' : "oversigt", 'link' : "/loggedin-dashboard", 'description': "Se hvad der bevæger sig og få et overblik"},
              ];

  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
});

  constructor(private authService: AuthService, private ufbs: UserFirebaseService, 
              private efbs: EventFirebaseService) { }

  ngOnInit() {
    if (window.screen.width <= 600) {
        this.isMobile = true;
    }

    this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe(value => {
      let user: User = new User(value);
      this.username = user.username;
      if (user.rating) {
        this.rating = user.rating;
      }
      
      if (user.numberOfEventsHosted >= 300) {
        this.metal = "/assets/images/shield_platinum.ico";
      } else if (user.numberOfEventsHosted >= 100) {
        this.metal = "/assets/images/shield_gold.ico";
      } else if (user.numberOfEventsHosted >= 30) {
        this.metal = "/assets/images/shield_silver.ico";
      } else {
        this.metal = "/assets/images/shield_bronze.ico";
      }
      
    });

  }

  signout() {
    this.authService.doSignout();
  }

}
