import { Component, OnInit } from '@angular/core';
import { MobileDetectorService } from '../mobile-detector.service';
import { UserRoleService } from '../user-role.service';
import { Role } from '../entity/user/role.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isMobile = false;
  isDevelopmentBuild = true;

  constructor(private mds: MobileDetectorService, private urs: UserRoleService, 
    private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.isMobile = this.mds.check();
  }

  authorize() {
    
    let observer = this.urs.getList().subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        if (snapshot.payload.val().fk_id === this.authService.afAuth.auth.currentUser.uid) {
          let role = new Role(snapshot.payload.val());
          if (role.type === this.urs.userTypes.ADMIN) {
            this.successToast("Du har nu admin adgang", '👍');
            this.router.navigate(['/admin-module']);
          } else {
            this.errorToast("Du har ikke adgang.", 'Fejl!');
          }
        }
      });
      observer.unsubscribe();
    })
    
   //let userRole: Role = this.urs.getUserRoleByUserID(this.authService.afAuth.auth.currentUser.uid);
   //if (userRole.fk_id === "Din Mor") {

   //}
  }

  successToast(msg, title) {
    this.toastr.clear();
    this.toastr.success(msg, title);
  }

  errorToast(msg, title) {
    this.toastr.clear();
    this.toastr.error(msg, title);
  }

}
