import { Component, OnInit } from '@angular/core';
import { UserFirebaseService } from '../user-firebase.service';
import { AuthService } from '../auth.service';
import { User } from '../entity/user/user';
import { RatingService } from '../rating.service';
import { EventFirebaseService } from '../event-firebase.service';

export interface Tile {
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

  isMobile = false;

  tiles: Tile[] = [
    {text: 'Events', link: '/events', enabled: true},
    {text: 'Min Profil', link: '/my-profile', enabled: true},
    {text: 'Dashboard', link: '/loggedin-dashboard', enabled: true},
    {text: 'Betaling', link: '/payment', enabled: true},
    {text: 'Beskeder', link: '/privmsg', enabled: false},
  ];

  feedbackTiles;
  recommendationTiles;

  constructor(private ufbs: UserFirebaseService, private authService: AuthService, 
    private rs: RatingService, private efbs: EventFirebaseService) {
      this.rs.getRecentRatingsForUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          this.feedbackTiles = [];
          this.efbs.getEventByKey(snapshot.fk_event).snapshotChanges().subscribe(value => {
            this.feedbackTiles.push({score: snapshot.score, fk_event: value.payload.val().name, fk_host: snapshot.fk_host})
          });
        });
      });

      this.efbs.getList('/events').subscribe(snapshots => {
        this.recommendationTiles = [];
        snapshots.forEach(snapshot => {
          if (snapshot.participants != undefined) {
            this.recommendationTiles.push({name: snapshot.name, pCount: snapshot.participants.length});
          } else {
            this.recommendationTiles.push({name: snapshot.name, pCount: snapshot.participantCount});
          }
        });
      })

   }

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
