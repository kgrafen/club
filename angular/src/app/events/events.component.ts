import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IndexMap } from '@firebase/database/dist/src/core/snap/IndexMap';
import { DialogService } from '../dialog.service';
import { Observable } from '@firebase/util';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  messages = [
    {msg: "Her kan du finde alle events som brugerne er arrangøre af netop nu!", title: "Tip"},
    {msg: "Du kan filtrere ved brug af vinduet: filter til venstre eller ved brug af søgefeltet", title: "Tip"},
    {msg: "Brug knapperne til at gå til dine egne events, oprette et nyt eller fjerne filtre", title: "Tip"}
  ]

  public isMobile: boolean = false;

  constructor() { }

  ngOnInit() {
    if (window.screen.width <= 600) {
      this.isMobile = true;
    } 
  }

}
