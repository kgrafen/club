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
  source = "../../assets/images/shield_";

  menuFields = [{'displayName' : "dashboard", 'link' : "/loggedin-dashboard", 'description': "Se hvad der bevæger sig og få et overblik"},
                {'displayName' : "events", 'link' : "/events", 'description': "Listen over bruger arrangementer. Find dit næste event!"},
                {'displayName' : "min profil", 'link' : "/my-profile", 'description': "Opdater din profil og se status"},
                {'displayName' : "betaling", 'link' : "/payment", 'description': "Til betalingsgateway hvor du kan styre dit abonnement"}];

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
      this.username = user._username;
      this.rating = user.rating;
      this.efbs.getEventsByHost(this.authService.afAuth.auth.currentUser.uid).subscribe(snapshots => {
        if (snapshots.length < 30) {
          this.source += "bronze.ico";
        } else if (snapshots.length < 100) {
          this.source += "silver.ico";
        } else if (snapshots.length < 300) {
          this.source += "gold.ico";
        } else {
          this.source += "platinum.ico";
        }
      });
      
    });

  }

  signout() {
    this.authService.doSignout();
  }

}
