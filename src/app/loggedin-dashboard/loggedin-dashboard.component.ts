import { Component, OnInit } from '@angular/core';
import { UserFirebaseService } from '../user-firebase.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'loggedin-dashboard',
  templateUrl: './loggedin-dashboard.component.html',
  styleUrls: ['./loggedin-dashboard.component.css']
})
export class LoggedinDashboardComponent implements OnInit {

  constructor(private ufbs: UserFirebaseService, private authService: AuthService) { }

  ngOnInit() {
    this.ufbs.getUserByIndex(0);
  }

}
