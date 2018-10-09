import { Component, OnInit } from '@angular/core';
import { MobileDetectorService } from '../mobile-detector.service';
import { UserRoleService } from '../user-role.service';
import { Role } from '../entity/user/role.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isMobile = false;
  isDevelopmentBuild = true;

  constructor(private mds: MobileDetectorService, private urs: UserRoleService, 
    private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isMobile = this.mds.check();
  }

  authorize() {
    
    this.urs.getList().subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        if (snapshot.payload.val().fk_id === this.authService.afAuth.auth.currentUser.uid) {
          let role = new Role(snapshot.payload.val());
          if (role.type === this.urs.userTypes.ADMIN) {
            console.log("Authorized. Welcome back, commander");
            this.router.navigate(['/admin-module']);
          } else {
            console.log("Unauthorized. This attempt has been logged and an admin notified.");
          }
        }
      })
    })
    
   //let userRole: Role = this.urs.getUserRoleByUserID(this.authService.afAuth.auth.currentUser.uid);
   //if (userRole.fk_id === "Din Mor") {

   //}
  }

}
