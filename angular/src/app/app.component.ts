import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlatformLocation, Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  displayNavbar = false;

  constructor(
    private translationService: TranslateService,
    private authService: AuthService,
  ){
    this.translationService.setDefaultLang('dk');
    translationService.use('dk');
  }

  ngOnInit() {
    this.authService.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.displayNavbar = true;
      } else {
        this.displayNavbar = false;
      }
    });

    const appRoot = document.getElementsByTagName('app-root')[0];
    const body = document.getElementsByTagName('body')[0];

    let script_tag = document.createElement('script');
    script_tag.type = 'text/javascript';
    script_tag.text = `(function() {window.__insp = window.__insp || [];__insp.push(['wid', 703533763]);var ldinsp = function(){if(typeof window.__inspld != "undefined") return; window.__inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js?wid=703533763&r=' + Math.floor(new Date().getTime()/3600000); var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); };setTimeout(ldinsp, 0);})();`;
    
    body.insertBefore(script_tag, appRoot);
  }

}
