import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  menuFields = [{'displayName' : "Forside", 'link' : "/landing-page", 'description': "Tilbage til forsiden"},
                {'displayName' : "Nyhedsbrev", 'link' : "/admin-module/admin-newsletter", 'description': "Skriv et nyhedsbrev ud til brugerne"}
                ]


  constructor() { }

  ngOnInit() {
  }

}
