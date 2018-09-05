import { Component, OnInit } from '@angular/core';
import { UserFirebaseService } from '../user-firebase.service';
import { AuthService } from '../auth.service';
import { User } from '../entity/user/user';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  link: string;
  enabled: boolean;
}

@Component({
  selector: 'loggedin-dashboard',
  templateUrl: './loggedin-dashboard.component.html',
  styleUrls: ['./loggedin-dashboard.component.css']
})
export class LoggedinDashboardComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'Events', cols: 3, rows: 1, color: '#333333', link: '/events', enabled: true},
    {text: 'Min Profil', cols: 1, rows: 2, color: '#1a1a1a', link: '/my-profile', enabled: true},
    {text: 'Dashboard', cols: 1, rows: 1, color: '#484848', link: '/loggedin-dashboard', enabled: true},
    {text: 'Betaling', cols: 2, rows: 1, color: '#606060', link: '/payment', enabled: false},
  ];

  constructor(private ufbs: UserFirebaseService, private authService: AuthService) { }

  ngOnInit() {
    
  }

}
