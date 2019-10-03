import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { UserFirebaseService } from '../../user-firebase.service';
import { User } from '../../entity/user/user';
import { Router, NavigationEnd } from '@angular/router';


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
  isIE;
  profileSelected: boolean = false;

  menuFields = [
    {'displayName' : "events", 'link' : "/events", 'description': "Listen over bruger arrangementer. Find dit næste event!", "selected": false},
    // {'displayName' : "min profil", 'link' : "/my-profile", 'description': "Opdater din profil og se status"},
    {'displayName' : "betaling", 'link' : "/payment", 'description': "Til betalingsgateway hvor du kan styre dit abonnement", "selected": false},
    // {'displayName' : "Min oversigt", 'link' : "/loggedin-dashboard", 'description': "Se hvad der bevæger sig og få et overblik", "selected": false},
  ];

  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
});

  constructor(
    private authService: AuthService, 
    private ufbs: UserFirebaseService, 
    private router: Router,
  ) { }

  ngOnInit() {
    this.menuFields.forEach(field => field.selected = field.link == this.router.url);
    this.profileSelected = this.router.url == "/my-profile";

    if (window.screen.width <= 600) {
        this.isMobile = true;
    }

    // this.isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
    this.isIE = /msie\s|trident\//i.test(window.navigator.userAgent);

    let observer = this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe(u => {
      let user: User = new User(u);
      if (user.username) {
        this.username = user.username;
      } else {
        this.username = "Inaktiv profil";
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
      if (user.rating) {
        this.rating = user.rating;
      } else {
        this.rating = 0;
      }

      observer.unsubscribe();
    });
  }

  signout() {
    this.authService.doSignout();
  }

}
