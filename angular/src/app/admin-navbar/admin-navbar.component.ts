import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserRoleService } from '../user-role.service';
import { Role } from '../entity/user/role.model';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material';

@Component({
  selector: 'admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  menuFields = [{'displayName' : "Forside", 'link' : "/landing-page", 'description': "Tilbage til forsiden"},
                {'displayName' : "Nyhedsbrev", 'link' : "/admin-module/admin-newsletter", 'description': "Skriv et nyhedsbrev ud til brugerne"}
                ]


  constructor(private authService: AuthService, private urs: UserRoleService, 
    private router: Router) { }

  ngOnInit() {
    this.authService.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.urs.getList().subscribe(snapshots => {
          snapshots.forEach(snapshot => {
            let role = new Role(snapshot);
            if (role.fk_id === this.authService.afAuth.auth.currentUser.uid) {
              if (role.type === this.urs.userTypes.ADMIN) {
                console.log("User is authorized. Welcome back, commander.");
              } else {
                this.router.navigate(['/landing-page']);
                console.log("Unauthorized. Your attempt has been logged.");
              }
            }
          });
        });
      } else {
        console.log("Unauthorized. You are not logged in.")
        this.router.navigate(['/landing-page']);
      }
    });
  }

}
