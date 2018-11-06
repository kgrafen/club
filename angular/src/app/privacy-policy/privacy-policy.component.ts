import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  displayNavbar = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.displayNavbar = true;
      }
    });
  }

}
