import { Component, OnInit } from '@angular/core';
import { MobileDetectorService } from '../mobile-detector.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isMobile = false;

  constructor(private mds: MobileDetectorService) { }

  ngOnInit() {
    this.isMobile = this.mds.check();
  }

}
