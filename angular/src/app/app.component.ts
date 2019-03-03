import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlatformLocation, Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private translationService: TranslateService,
  ){
    this.translationService.setDefaultLang('dk');
    translationService.use('dk');
  }

  ngOnInit() {
    
  }

}
