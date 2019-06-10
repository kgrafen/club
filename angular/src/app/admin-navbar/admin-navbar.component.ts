import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserRoleService } from '../user-role.service';
import { Role } from '../entity/user/role.model';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material';
import { MobileDetectorService } from '../mobile-detector.service';

@Component({
  selector: 'admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  isMobile: boolean = false;

  menuFields = [
                // {'displayName' : "Forside", 'link' : "/landing-page", 'description': "Tilbage til forsiden", 'disabled': false},
                {'displayName' : "Nyhedsbrev", 'link' : "/admin-module/admin-newsletter", 'description': "Skriv et nyhedsbrev ud til brugerne", 'disabled': false},
                {'displayName' : "Administrer brugere", 'link' : "/admin-module/", 'description': "Skriv et nyhedsbrev ud til brugerne", 'disabled': true},
                {'displayName' : "Administrer events", 'link' : "/admin-module/", 'description': "Skriv et nyhedsbrev ud til brugerne", 'disabled': true}
                ]


  constructor(private authService: AuthService, private urs: UserRoleService, 
    private router: Router, private mbs: MobileDetectorService) { }

  ngOnInit() {

    this.isMobile = this.mbs.check();

    this.authService.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        let observer = this.urs.getList().subscribe(snapshots => {
          snapshots.forEach(snapshot => {
            let role = new Role(snapshot);
            if (role.fk_id === this.authService.afAuth.auth.currentUser.uid) {
              if (role.type === this.urs.userTypes.ADMIN) {
                
              } else {
                this.router.navigate(['/landing-page']);
                
              }
              observer.unsubscribe();
            }
          });
        });
      } else {
        console.log("Unauthorized. You are not logged in.")
        this.router.navigate(['/landing-page']);
      }
    });
  }

  signout() {
    this.router.navigate(['/landing-page']);
  }

}
