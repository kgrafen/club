import { Component, OnInit } from '@angular/core';
import { UserFirebaseService } from '../user-firebase.service';
import { AuthService } from '../auth.service';
import { User } from '../entity/user/user';

export interface Tile {
  text: string;
  link: string;
  enabled: boolean;
}

export interface RecTile {
  eventName: string; 
  participants: number;
}

export interface FeedbackTile {
  eventName: string;
  score: number;
}

@Component({
  selector: 'loggedin-dashboard',
  templateUrl: './loggedin-dashboard.component.html',
  styleUrls: ['./loggedin-dashboard.component.css']
})
export class LoggedinDashboardComponent implements OnInit {

  isMobile = false;

  tiles: Tile[] = [
    {text: 'Events', link: '/events', enabled: true},
    {text: 'Min Profil', link: '/my-profile', enabled: true},
    {text: 'Dashboard', link: '/loggedin-dashboard', enabled: true},
    {text: 'Betaling', link: '/payment', enabled: false},
    {text: 'Beskeder', link: '/privmsg', enabled: false},
  ];

  recommendationTiles: RecTile[] = [
    {eventName: this.makeid(16), participants: Math.floor(Math.random()*100)+1},
    {eventName: this.makeid(12), participants: Math.floor(Math.random()*100)+1},
    {eventName: this.makeid(10), participants: Math.floor(Math.random()*100)+1},
    {eventName: this.makeid(13), participants: Math.floor(Math.random()*100)+1},
    {eventName: this.makeid(10), participants: Math.floor(Math.random()*100)+1},
    {eventName: this.makeid(8), participants: Math.floor(Math.random()*100)+1},
  ];

  feedbackTiles: FeedbackTile[] = [
    {eventName: "Min Fede Fest", score: Math.floor(Math.random()*5)+1 },
    {eventName: "Min Fede Fest", score: Math.floor(Math.random()*5)+1 },
    {eventName: "Min Fede Fest", score: Math.floor(Math.random()*5)+1 },
    {eventName: "Min Fede Fest", score: Math.floor(Math.random()*5)+1 },
    {eventName: "Min Fede Fest", score: Math.floor(Math.random()*5)+1 },
    {eventName: "Min Fede Fest", score: Math.floor(Math.random()*5)+1 }
  ];

  constructor(private ufbs: UserFirebaseService, private authService: AuthService) { }

  unreadMessages = 0;

  ngOnInit() {
    this.unreadMessages = Math.floor(Math.random()*20) + 1;
    if (window.screen.width <= 600) {
      this.isMobile = true;
    }
  }


  makeid(count: number): string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < count; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

}
