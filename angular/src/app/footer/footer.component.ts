import { Component, OnInit } from '@angular/core';
import { MobileDetectorService } from '../mobile-detector.service';
import { AuthService } from '../auth.service';
import { UserFirebaseService } from '../user-firebase.service';
import { User } from '../entity/user/user';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isMobile = false;
  isDevelopmentBuild = true;
  isAdmin = false;

  constructor(private mds: MobileDetectorService, private authService: AuthService, 
    private ufbs: UserFirebaseService) { }

  ngOnInit() {
    this.isMobile = this.mds.check();
  }

}
