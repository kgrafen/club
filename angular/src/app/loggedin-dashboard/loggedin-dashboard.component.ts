import { Component, OnInit } from '@angular/core';
import { UserFirebaseService } from '../user-firebase.service';
import { AuthService } from '../auth.service';
import { User } from '../entity/user/user';
import { RatingService } from '../rating.service';
import { EventFirebaseService } from '../event-firebase.service';
import { MobileDetectorService } from '../mobile-detector.service';

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
    {text: 'Oversigt', link: '/loggedin-dashboard', enabled: true},
    {text: 'Betaling', link: '/payment', enabled: true},
    {text: 'Beskeder', link: '/privmsg', enabled: false},
  ];

  feedbackTiles;
  recommendationTiles;
  tCount = 0;

  constructor(private ufbs: UserFirebaseService, private authService: AuthService, 
    private rs: RatingService, private efbs: EventFirebaseService, private md: MobileDetectorService) {
      this.rs.getRecentRatingsForUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          this.feedbackTiles = [];
          this.efbs.getEventByKey(snapshot.fk_event).snapshotChanges().subscribe(ss => {
            this.feedbackTiles.push({score: snapshot.score, fk_event: ss.payload.val().name, fk_host: snapshot.fk_host})
          });
          this.tCount = this.feedbackTiles.length;
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

  ngOnInit() {
    this.isMobile = this.md.check();
  }

}
