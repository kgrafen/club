import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'cookies-consent',
  templateUrl: './cookies-consent.component.html',
  styleUrls: ['./cookies-consent.component.css']
})
export class CookiesConsentComponent implements OnInit {

  displayCookies: boolean = false;

  constructor(private _cookieService: CookieService) { }

  ngOnInit() {
    if (this.getCookie('acceptCookie') === "accept") {
      this.displayCookies = false;
    } else {
      this.displayCookies = true;
    }
  }

  onAcceptCookies() {
    this.displayCookies = false;
    this._cookieService.put('acceptCookie', "accept");
  }

  getCookie(key: string) {
    return this._cookieService.get(key);
  }

}
