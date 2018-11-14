(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n    background-color: #fff;\r\n    padding: 50px;\r\n}\r\n\r\n.content-header {\r\n    margin-top: 100px;\r\n}\r\n\r\nh1, h2, h3 {\r\n    text-align: center;\r\n}\r\n\r\n.center {\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    width:50%;\r\n    display:block;\r\n    text-align: center;\r\n}\r\n\r\nbutton {\r\n    color: #3F69AA;\r\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<landing-page-header *ngIf=\"!displayNavbar\"></landing-page-header>\r\n<app-navbar *ngIf=\"displayNavbar\"></app-navbar>\r\n\r\n<div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm\">\r\n        <h2>Idealet</h2>\r\n        <hr>\r\n\r\n        <mat-accordion>\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                  Den gode arrangør\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <h5>Arrangør</h5>\r\n                <p>Som arrangør skal du være opmærksom på, at ting du opfatter som givet kan være svært gennemskueligt for andre. Hvis du inviterer på gåtur i skoven, så skriv gerne om du regner med at folk selv har en drikkedunk/frokost med, og gør også gerne opmærksom på, om du ved at skoven er mudret den dag, så fodtøj bør planlægges derefter. \r\n                    Ved events hvor du inviterer folk ind i dit hjem, så bør du være tilsvarende omhyggelig med at fortælle om hjemmets muligheder og begrænsninger. Er der f.eks. husdyr i hjemmet, så vil allergikere sætte pris på at vide det. Tilbyder du overnatning i forbindelse med dit arrangement, eller vil du gerne forventningsafstemme at eventet slutter senest kl 23, så er det en rigtigt god ide at skrive det på eventet. \r\n                    </p>\r\n                <h5>Pris</h5>\r\n                <p>I forhold til beregning af pris på arrangementet, så er hovedreglen, at man fordeler sin kostpris på de invitere, og i øvrigt regner sig selv ind, dvs inviterer du 7 gæster, så dividerer du omkostningen ud på 8 personer. \r\n                    Man må til en rimelig grænse indregne forbrug af køkkenrulle, sølvpapir, krydderier, m.m. men man må naturligvis ikke få betalt husleje, eller et overdrevet indkøb af varer, der sikrer arrangøren mad 14 dage frem. Det skal selvfølgelig ikke gå så vidt, at man skal dele et overskud på 32kr mellem 8 deltagere, og det er også fint at arrangøren beholder madresterne efter et arrangement, uden at sende hver enkelt deltager hjem med en madpakke, men hovedreglen og princip om at arrangementer ikke må give overskud skal overholdes.\r\n                    </p>\r\n                <h5>Location, location, location</h5>\r\n                <p>Events ude i byen, hvor du er så heldig/dygtig at opnå rabat, da er retningslinjen tilsvarende, at rabatten skal gives videre til deltagerne. Køber du f.eks. en sweetdeal på en bowlingbane, så er det altså sweetdealprisen, og ikke normalprisen, som der skal fordeles blandt deltagerne. </p>\r\n                <p>Ved bådture er det selvfølgelig fint at indregne gebyr for havneplads i fremmede havne man sejler til, brændstofforbrug og sådanne direkte omkostninger, mens det ikke er acceptabelt at indregne inddirekte omkostninger, såsom bådens afskrivninger, løbende service og vedligehold. \r\n                </p>\r\n                <p>Er du dygtig til at forhandle en rabat hjem, f.eks. hvis du kan fylde en bowlinghal med gæster, så skal rabatten komme deltagerne til gode. \r\n                  </p>\r\n                <p>Vi ønsker ikke kommercielle arrangementer på siden, hvor medlemmer tjener på andre medlemmer. Er du f.eks. coach eller tilsvarende, så hører dine opslag om coaching sessioner ikke hjemme på siden, med mindre du er under uddannelse, og tilbyder gratis timer til “prøvekaniner”. </p>\r\n                <p>Alle ovenstående regler er naturligvis også udgangspunktet for SingleNs egne events. Vi vil gerne tjene penge på Jeres abonnement, men ikke på jeres deltagelse i vores events! </p>\r\n\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel [expanded]=\"1\">\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                  Den gode deltager\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <h5>Betaling</h5>\r\n        <p>Som deltager på et event, er din første og vigtigste forpligtelse at overholde arrangørens betalingsfrist. Arrangøren lægger en del arbejde i at skabe rammerne for et godt arrangement, og det er ærgerligt, hvis man også skal bruge tid på at rykke for betaling. Så når du melder dig til, så bedes du være opmærksom på at overholde betalingsbetingelserne.</p>\r\n\r\n        <h5>En hjælpende hånd</h5>\r\n        <p>Ved deltagelse, så er det super god stil at bidrage undervejs, ikke kun med at hjælpe til med at bære ud, vaske op, rydde af vejen, men også med at skabe den gode stemning, og have en inkluderende tilgang til øvrige deltagere. </p>\r\n\r\n        <h5>Rating</h5>\r\n        <p>Efter et events gennemførsel får du en mail med en opfordring til at give en tilbagemelding på arrangementet. Det er hurtigt gjort, og giver dig en mulighed for at sige tak for sidst til arrangøren, der jo som nævnt ofte har brugt en del tid og energi på arrangementet. Derfor vil vil bede dig sådan en tilbagemelding. \r\n            I de forhåbentligt ganske få tilfælde hvor alt er gået galt, så er det også vigtigt at du sender en vurdering af arrangementet. Men husk på, at det ikke er rimeligt at nedvurdere et arrangent ud fra parametre som arrangøren ikke er herre over, f.eks. Vejret eller DSB :-) \r\n            </p>\r\n        <h5>Anonymt</h5>\r\n        <p>Vurderingerne er i udgangspunktet anonyme, og sendes i samlet form til arrangøren, så det er kun hvis du sætter dit navn på en kommentar, at arrangøren vil kunne se at en kommentar er fra dig.</p>\r\n      \r\n            </mat-expansion-panel>\r\n\r\n        </mat-accordion>\r\n        \r\n      </div>\r\n\r\n      <div class=\"col-sm\">\r\n        <h2>Konceptet</h2>\r\n        <hr>\r\n\r\n        <mat-accordion>\r\n            <mat-expansion-panel [expanded]=\"1\">\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                  Startskuddet\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <p>SN startede i foråret 2018, og vi har har gjort det til vores mission, at stille en platform til rådighed, som er med til at facilitere events for singler. SN er for alle singler i alderen 18-99, der ønsker at møde andre singler ved deltagelse i events.</p>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                  <mat-panel-title>\r\n                    Fællesskab\r\n                  </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <p>En del af vores koncept er selv at arrangere en hel del events, ikke kun i opstartsfasen, men også fremover. Derudover håber vi på, at mange af jer har lyst til at bidrage til netværket ved at oprette events med spændende alsidige temaer og gode oplevelser til følge. </p>\r\n\r\n              </mat-expansion-panel>\r\n\r\n    \r\n            <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                  <mat-panel-title>\r\n                      Gennemsigtighed\r\n                  </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <p>En anden del af vores koncept er, at indtjening udelukkende sker via abonnementsbetaling på sitet. Vi, eller de enkelte arrangører, profiterer ikke på de enkelte events.</p>\r\n\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                  <mat-panel-title>\r\n                    SN er ikke...\r\n                  </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <p>SN er <strong>ikke</strong> en dating-platform, men vi har omvendt heller ikke nogen planer om at forbyde datinglignende events. Hovedformålet er dog netværksdelen og det at lave events for hinanden.  SN har ikke aktuelle planer om at udvide med debatter, chat- eller dating-elementer. Vi vil gerne bevare fokus på det egentlige - nemlig events der foregår ude i virkeligheden. Sitet er altså blot tænkt som et værktøj til at skabe en kontakt der skal udleves off-line</p>\r\n              </mat-expansion-panel>\r\n\r\n              <mat-expansion-panel>\r\n                  <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                      Vi...\r\n                    </mat-panel-title>\r\n                  </mat-expansion-panel-header>\r\n                  <p>\"Vi ønsker at være med til at skabe nye relationer og gode oplevelser i den virkelige verden.\" </p>\r\n                  <p>\"Vi vil gerne fremme de gode relationsskabende arrangementer, hvilket vi forsøger at gøre ved at belønne de gode arrangører med forskellige fordele.\" </p>\r\n                  <p>\"Vi ønsker at være synlige, og vi er meget ligetil. Vi ser frem til en masse gode oplevelser med jer!\" </p>\r\n                  <p>\"Så glæd jer til fx Henriks middagssammenkomster og Dianas aktive events!\"</p>\r\n\r\n                  </mat-expansion-panel>\r\n            \r\n\r\n        </mat-accordion>\r\n\r\n      </div>\r\n\r\n      <div class=\"col-sm\">\r\n          <h2>Ejerne</h2>\r\n          <hr>\r\n  \r\n          <mat-card class=\"example-card\">\r\n              <mat-card-header>\r\n                <div mat-card-avatar class=\"example-header-image\"><fa name=\"user-circle-o\"></fa></div>\r\n                <mat-card-title>Henrik</mat-card-title>\r\n                <mat-card-subtitle>Ejer</mat-card-subtitle>\r\n              </mat-card-header>\r\n              <img mat-card-image src=\"assets/images/Henrik.jpg\" alt=\"Billede af Henrik\">\r\n              <mat-card-content>\r\n                  <mat-accordion>\r\n                      <mat-expansion-panel>\r\n                          <mat-expansion-panel-header>\r\n                            <mat-panel-title>\r\n                              Om\r\n                            </mat-panel-title>\r\n                          </mat-expansion-panel-header>\r\n                          <p>Henrik er SingleN’s charmerende mesterkok. Henrik laver (uden tvivl!) verdens bedste mormormad, og især hans frikadeller er helt i særklasse. Henrik er typen som sagtens kan starte en diskussion om alle mulige emner, men han snakker også gerne om sit liv, som bl.a. involverer 3 børn i alderen 16, 17 og 23. Derudover sætter Henrik sig flere gange om ugen i stramtsiddende bukser på spinning-cyklen, hvor han nyder at få sveden til at drible ned af sig, alt imens en spinninginstruktør giver skarpe instrukser. Om sommeren huserer han dog også gerne på Amager Fælled på racercyklen.</p> \r\n                          <p>Henrik er til dagligt teamleder indenfor it-branchen, hvor han jonglerer mellem mange forskellige typer af interessenter. Han er SingleN’s lidt mere introverte type - men lad dig ikke narre :) </p>\r\n                          <p>Henrik vil holde event i SingleN regi, hvor hans events vil tage udgangspunkt i hyggestunder, såsom en god middag, en bowlingtur eller måske en tur på MTB i skoven. </p>\r\n                          <p>Henrik svarer rigtigt gerne på spørgsmål fra medlemmerne via email-adressen: henrik@singlen.dk, men vil selvfølgelig også gerne svare på jeres spørgsmål, når i mødes til events. </p>\r\n                        </mat-expansion-panel>\r\n                  </mat-accordion>\r\n              </mat-card-content>\r\n              <mat-card-actions>\r\n                  <button mat-button><fa name=\"linkedin-square\"></fa></button>\r\n                  <button mat-button><fa name=\"instagram\"></fa></button>\r\n              </mat-card-actions>\r\n            </mat-card>\r\n  \r\n            <br>\r\n  \r\n            <mat-card class=\"example-card\">\r\n                <mat-card-header>\r\n                  <div mat-card-avatar class=\"example-header-image\"><fa name=\"user-circle-o\"></fa></div>\r\n                  <mat-card-title>Diana</mat-card-title>\r\n                  <mat-card-subtitle>Ejer</mat-card-subtitle>\r\n                </mat-card-header>\r\n                <img mat-card-image src=\"assets/images/diana.jpg\" alt=\"Billede af Diana\">\r\n                <mat-card-content>\r\n                  <mat-accordion>\r\n                      <mat-expansion-panel>\r\n                          <mat-expansion-panel-header>\r\n                            <mat-panel-title>\r\n                              Om\r\n                            </mat-panel-title>\r\n                          </mat-expansion-panel-header>\r\n                          <p>Diana er SingleN’s ekstroverte smilende energibombe. Diana har sin erhvervserfaring fra it-branchen, hvor hun har haft forskellige data-arkitekt jobs. Privat har Diana en aktiv fritid, hvor hun elsker at rejse, være sammen med familie og venner, dyrke klatring, spille backgammon, gå til koncerter, og i det hele taget være aktiv, og sammen med mennesker så meget som muligt. Diana er et af de mennesker, som ikke kan tage med toget uden at falde i snak med medpassagerne. Hun er åben, imødekommende, og en vaske-ægte ”people person”.</p>\r\n                          <p>Diana vil holde en del arrangementer i SingleN regi, hvor arrangementerne vil tage udgangspunkt i hendes livsstil, så forvent en del aktivitetsbaserede events. </p>\r\n                          <p>Diana svarer rigtigt gerne på spørgsmål fra medlemmerne via email-adressen: diana@singlen.dk, men vil selvfølgelig også gerne svare jeres spørgsmål når i mødes til events </p>\r\n                        </mat-expansion-panel>\r\n                  </mat-accordion>\r\n                </mat-card-content>\r\n                <mat-card-actions>\r\n                  <button mat-button><fa name=\"linkedin-square\"></fa></button>\r\n                  <button mat-button><fa name=\"instagram\"></fa></button>\r\n                </mat-card-actions>\r\n              </mat-card>\r\n          \r\n        </div>\r\n\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(authService) {
        this.authService = authService;
        this.displayNavbar = false;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.afAuth.auth.onAuthStateChanged(function (user) {
            if (user) {
                _this.displayNavbar = true;
            }
        });
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<admin-navbar></admin-navbar>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent() {
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
    };
    AdminDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'admin-dashboard',
            template: __webpack_require__(/*! ./admin-dashboard.component.html */ "./src/app/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./admin-dashboard.component.css */ "./src/app/admin-dashboard/admin-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin-navbar/admin-navbar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin-navbar/admin-navbar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    margin-bottom: 100px;\r\n    background-color: #fff !important; \r\n}\r\n\r\n.pusher {\r\n    margin-bottom: 100px;\r\n}\r\n\r\nbutton {\r\n    margin-left: auto !important;\r\n}"

/***/ }),

/***/ "./src/app/admin-navbar/admin-navbar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin-navbar/admin-navbar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-top\">\n  <div class=\"navbar-nav ml-auto ng-star-inserted\">\n      <button [disabled]='menuField.disabled' routerLink=\"{{menuField.link}}\" matTooltip=\"{{menuField.description}}\" mat-button color=\"primary\" *ngFor=\"let menuField of menuFields\">{{menuField.displayName}}</button>\n      <button (click)=\"signout()\" mat-raised-button color=\"warn\">Afslut</button>\n  </div>\n</nav>\n\n <!-- Pusher -->\n  <!-- DO NOT EDIT HERE -->\n  <nav style=\"visibility: hidden;\" class=\"navbar navbar-expand-md navbar-light bg-light pusher\">\n\n    <a routerLink=\"/loggedin-dashboard\"><button *ngIf=\"isMobile\" class=\"btn btn-light\">Tilbage</button></a>\n    \n    \n    <div *ngIf=\"!isMobile\" class=\"navbar-nav ml-auto\">\n      <button *ngFor=\"let field of menuFields\" routerLink='{{field.link}}'  mat-button>{{field.displayName | uppercase}}</button>\n    </div>\n      \n    <button (click)=\"signout()\" mat-raised-button color=\"warn\">Log ud</button>\n      \n  </nav>"

/***/ }),

/***/ "./src/app/admin-navbar/admin-navbar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin-navbar/admin-navbar.component.ts ***!
  \********************************************************/
/*! exports provided: AdminNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminNavbarComponent", function() { return AdminNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _user_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-role.service */ "./src/app/user-role.service.ts");
/* harmony import */ var _entity_user_role_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entity/user/role.model */ "./src/app/entity/user/role.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminNavbarComponent = /** @class */ (function () {
    function AdminNavbarComponent(authService, urs, router) {
        this.authService = authService;
        this.urs = urs;
        this.router = router;
        this.menuFields = [
            // {'displayName' : "Forside", 'link' : "/landing-page", 'description': "Tilbage til forsiden", 'disabled': false},
            { 'displayName': "Nyhedsbrev", 'link': "/admin-module/admin-newsletter", 'description': "Skriv et nyhedsbrev ud til brugerne", 'disabled': false },
            { 'displayName': "Administrer brugere", 'link': "/admin-module/", 'description': "Skriv et nyhedsbrev ud til brugerne", 'disabled': true },
            { 'displayName': "Administrer events", 'link': "/admin-module/", 'description': "Skriv et nyhedsbrev ud til brugerne", 'disabled': true }
        ];
    }
    AdminNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.afAuth.auth.onAuthStateChanged(function (user) {
            if (user) {
                _this.urs.getList().subscribe(function (snapshots) {
                    snapshots.forEach(function (snapshot) {
                        var role = new _entity_user_role_model__WEBPACK_IMPORTED_MODULE_3__["Role"](snapshot);
                        if (role.fk_id === _this.authService.afAuth.auth.currentUser.uid) {
                            if (role.type === _this.urs.userTypes.ADMIN) {
                                console.log("User is authorized. Welcome back, commander.");
                            }
                            else {
                                _this.router.navigate(['/landing-page']);
                                console.log("Unauthorized. Your attempt has been logged.");
                            }
                        }
                    });
                });
            }
            else {
                console.log("Unauthorized. You are not logged in.");
                _this.router.navigate(['/landing-page']);
            }
        });
    };
    AdminNavbarComponent.prototype.signout = function () {
        this.router.navigate(['/landing-page']);
    };
    AdminNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'admin-navbar',
            template: __webpack_require__(/*! ./admin-navbar.component.html */ "./src/app/admin-navbar/admin-navbar.component.html"),
            styles: [__webpack_require__(/*! ./admin-navbar.component.css */ "./src/app/admin-navbar/admin-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _user_role_service__WEBPACK_IMPORTED_MODULE_2__["UserRoleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminNavbarComponent);
    return AdminNavbarComponent;
}());



/***/ }),

/***/ "./src/app/admin-newsletter/admin-newsletter.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin-newsletter/admin-newsletter.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field, textarea, button {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 50%;\r\n}\r\n\r\nbutton {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    color: snow;\r\n}"

/***/ }),

/***/ "./src/app/admin-newsletter/admin-newsletter.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin-newsletter/admin-newsletter.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Nyhedsbrev</h1>\n<mat-card>\n  <form [formGroup]=\"newsletterForm\">\n\n    <mat-form-field>\n        <mat-select formControlName=\"username\" placeholder=\"Afsender\">\n          <mat-option value=\"Henrik & Diana\">Henrik & Diana</mat-option>\n          <mat-option value=\"SingleNetvaerket\">SingleNetværket</mat-option>\n        </mat-select>\n    </mat-form-field>\n\n    <mat-form-field>\n        <mat-select formControlName=\"subject\" placeholder=\"Emne felt\">\n          <mat-option value=\"Nyhedsbrev: Feature\">Nyhedsbrev: Feature</mat-option>\n          <mat-option value=\"Nyhedsbrev: Status\">Nyhedsbrev: Status</mat-option>\n          <mat-option value=\"Nyhedsbrev: OBS\">Nyhedsbrev: OBS</mat-option>\n        </mat-select>\n    </mat-form-field>\n\n    <textarea formControlName=\"text\" placeholder=\"besked\" required cols=\"6\"></textarea>\n    \n    <button [disabled]=\"disabled\" (click)=\"sendNewsletter(newsletterForm.value)\" mat-raised-button color=\"primary\">Send nyhedsbrev</button>\n\n\n      \n\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/admin-newsletter/admin-newsletter.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin-newsletter/admin-newsletter.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminNewsletterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminNewsletterComponent", function() { return AdminNewsletterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-firebase.service */ "./src/app/user-firebase.service.ts");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _transactional_email_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../transactional-email.service */ "./src/app/transactional-email.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminNewsletterComponent = /** @class */ (function () {
    function AdminNewsletterComponent(ufbs, tes, ts) {
        this.ufbs = ufbs;
        this.tes = tes;
        this.ts = ts;
        this.isLoggedOn = false;
        this.disabled = false;
        this.newsletterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    AdminNewsletterComponent.prototype.ngOnInit = function () {
    };
    AdminNewsletterComponent.prototype.sendNewsletter = function (formData) {
        var _this = this;
        this.disabled = true;
        this.ts.info("OK fra server...", "Afventer");
        this.tes.sendNewsletter(formData).subscribe(function (response) {
            console.log(response);
            _this.ts.show("Din besked er nu afsendt!", 👍);
            _this.disabled = false;
        }).unsubscribe;
    };
    AdminNewsletterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'admin-newsletter',
            template: __webpack_require__(/*! ./admin-newsletter.component.html */ "./src/app/admin-newsletter/admin-newsletter.component.html"),
            styles: [__webpack_require__(/*! ./admin-newsletter.component.css */ "./src/app/admin-newsletter/admin-newsletter.component.css")]
        }),
        __metadata("design:paramtypes", [_user_firebase_service__WEBPACK_IMPORTED_MODULE_2__["UserFirebaseService"], _transactional_email_service__WEBPACK_IMPORTED_MODULE_4__["TransactionalEmailService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], AdminNewsletterComponent);
    return AdminNewsletterComponent;
}());



/***/ }),

/***/ "./src/app/admin-routing/admin-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin-routing/admin-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin-dashboard/admin-dashboard.component */ "./src/app/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_newsletter_admin_newsletter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin-newsletter/admin-newsletter.component */ "./src/app/admin-newsletter/admin-newsletter.component.ts");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/auth.guard */ "./src/app/core/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'admin-module', component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["AdminDashboardComponent"], children: [
            { path: '', redirectTo: '/admin-module/admin-newsletter', pathMatch: 'full', canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
            { path: 'admin-dashboard', component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["AdminDashboardComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
            { path: 'admin-newsletter', component: _admin_newsletter_admin_newsletter_component__WEBPACK_IMPORTED_MODULE_3__["AdminNewsletterComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] }
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-dashboard/admin-dashboard.component */ "./src/app/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin-navbar/admin-navbar.component */ "./src/app/admin-navbar/admin-navbar.component.ts");
/* harmony import */ var _admin_routing_admin_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../admin-routing/admin-routing.module */ "./src/app/admin-routing/admin-routing.module.ts");
/* harmony import */ var _admin_newsletter_admin_newsletter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../admin-newsletter/admin-newsletter.component */ "./src/app/admin-newsletter/admin-newsletter.component.ts");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _admin_routing_admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            exports: [
                _admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_5__["AdminNavbarComponent"],
                _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardComponent"],
                _admin_newsletter_admin_newsletter_component__WEBPACK_IMPORTED_MODULE_7__["AdminNewsletterComponent"]
            ],
            declarations: [_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardComponent"], _admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_5__["AdminNavbarComponent"], _admin_newsletter_admin_newsletter_component__WEBPACK_IMPORTED_MODULE_7__["AdminNewsletterComponent"]],
            providers: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
            entryComponents: [],
            bootstrap: []
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/app-navbar/app-navbar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/app-navbar/app-navbar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pusher {\r\n    margin-bottom: 100px;\r\n}\r\n\r\nmatTooltip {\r\n    \r\n}\r\n\r\n.menu-logo {\r\n    max-width:5%;\r\n}\r\n\r\n.rating-shield {\r\n    -webkit-transform: scale(0.7);\r\n            transform: scale(0.7);\r\n}\r\n\r\n.menu-logo:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.btn {\r\n    border: 1px solid rgba(0,0,0,0.1);\r\n}\r\n\r\n.alert {\r\n    margin-top: 80px;\r\n    width: 100%;\r\n    padding: 10px;\r\n    text-align: center;\r\n    position: fixed;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .pusher {\r\n        margin-bottom: 0px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/app-navbar/app-navbar.component.html":
/*!******************************************************!*\
  !*** ./src/app/app-navbar/app-navbar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-top\">\r\n\r\n    <img class=\"menu-logo\" src=\"/assets/images/Logo.png\" routerLink='/events'>\r\n  \r\n\r\n    <button *ngIf=\"isMobile\" routerLink='/my-profile' color=\"primary\" mat-button> \r\n      <img class=\"rating-shield\" src=\"{{metal}}\">\r\n      {{rating}}<mat-icon>star</mat-icon>\r\n    </button>\r\n    \r\n    \r\n    <div *ngIf=\"!isMobile\" class=\"navbar-nav ml-auto\">\r\n      <button *ngFor=\"let field of menuFields\" routerLink='{{field.link}}'  mat-button>{{field.displayName | uppercase}}</button>\r\n      <button routerLink='/my-profile' color=\"primary\" mat-button> \r\n        <mat-icon>person</mat-icon> {{username | uppercase}}\r\n        <img class=\"rating-shield\" src=\"{{metal}}\">\r\n        {{rating}}<mat-icon>star</mat-icon>\r\n      </button>\r\n    </div>\r\n    \r\n    <button *ngIf=\"isMobile\" mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n        <mat-icon>menu</mat-icon>\r\n    </button>\r\n\r\n      <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\" yPosition=\"below\">\r\n        <button routerLink=\"/loggedin-dashboard\" mat-menu-item>\r\n          <mat-icon>dashboard</mat-icon>\r\n          <span>Dashboard</span>\r\n        </button>\r\n        <button routerLink=\"/events\" mat-menu-item>\r\n          <mat-icon>calendar_today</mat-icon>\r\n          <span>Events</span>\r\n        </button>\r\n        <button routerLink=\"/my-profile\" mat-menu-item>\r\n          <mat-icon>person</mat-icon>\r\n          <span>Min Profil</span>\r\n        </button>\r\n        <button routerLink=\"/payment\" mat-menu-item>\r\n          <mat-icon>payment</mat-icon>\r\n          <span>Betaling</span>\r\n          </button>\r\n      </mat-menu>\r\n      \r\n    <button (click)=\"signout()\" mat-raised-button color=\"warn\">Log ud</button>\r\n      \r\n  </nav>\r\n\r\n  <!-- Pusher -->\r\n  <!-- DO NOT EDIT HERE -->\r\n  <nav style=\"visibility: hidden;\" class=\"navbar navbar-expand-md navbar-light bg-light pusher\">\r\n\r\n      <a routerLink=\"/loggedin-dashboard\"><button *ngIf=\"isMobile\" class=\"btn btn-light\">Tilbage</button></a>\r\n      \r\n      \r\n      <div *ngIf=\"!isMobile\" class=\"navbar-nav ml-auto\">\r\n        <button *ngFor=\"let field of menuFields\" routerLink='{{field.link}}'  mat-button>{{field.displayName | uppercase}}</button>\r\n      </div>\r\n        \r\n      <button (click)=\"signout()\" mat-raised-button color=\"warn\">Log ud</button>\r\n        \r\n    </nav>\r\n\r\n  "

/***/ }),

/***/ "./src/app/app-navbar/app-navbar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/app-navbar/app-navbar.component.ts ***!
  \****************************************************/
/*! exports provided: AppNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNavbarComponent", function() { return AppNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-firebase.service */ "./src/app/user-firebase.service.ts");
/* harmony import */ var _event_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event-firebase.service */ "./src/app/event-firebase.service.ts");
/* harmony import */ var _entity_user_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entity/user/user */ "./src/app/entity/user/user.ts");
/* harmony import */ var _rating_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rating.service */ "./src/app/rating.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppNavbarComponent = /** @class */ (function () {
    function AppNavbarComponent(authService, ufbs, efbs, rs) {
        this.authService = authService;
        this.ufbs = ufbs;
        this.efbs = efbs;
        this.rs = rs;
        this.rating = 0;
        this.navbarCollapsed = true;
        this.isMobile = false;
        this.metal = "";
        this.menuFields = [
            { 'displayName': "events", 'link': "/events", 'description': "Listen over bruger arrangementer. Find dit næste event!" },
            { 'displayName': "min profil", 'link': "/my-profile", 'description': "Opdater din profil og se status" },
            { 'displayName': "betaling", 'link': "/payment", 'description': "Til betalingsgateway hvor du kan styre dit abonnement" },
            { 'displayName': "oversigt", 'link': "/loggedin-dashboard", 'description': "Se hvad der bevæger sig og få et overblik" },
        ];
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    AppNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.screen.width <= 600) {
            this.isMobile = true;
        }
        this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe(function (value) {
            var user = new _entity_user_user__WEBPACK_IMPORTED_MODULE_5__["User"](value);
            _this.username = user.username;
            if (user.numberOfEventsHosted >= 300) {
                _this.metal = "/assets/images/shield_platinum.ico";
            }
            else if (user.numberOfEventsHosted >= 100) {
                _this.metal = "/assets/images/shield_gold.ico";
            }
            else if (user.numberOfEventsHosted >= 30) {
                _this.metal = "/assets/images/shield_silver.ico";
            }
            else {
                _this.metal = "/assets/images/shield_bronze.ico";
            }
        });
        this.rs.getRatings().subscribe(function (snapshots) {
            var userScore = 0;
            var count = 0;
            snapshots.forEach(function (snapshot) {
                if (snapshot.payload.val().fk_host === _this.authService.afAuth.auth.currentUser.uid) {
                    userScore += Number(snapshot.payload.val().score);
                    count++;
                }
            });
            _this.rating = userScore / count;
        });
    };
    AppNavbarComponent.prototype.signout = function () {
        this.authService.doSignout();
    };
    AppNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./app-navbar.component.html */ "./src/app/app-navbar/app-navbar.component.html"),
            styles: [__webpack_require__(/*! ./app-navbar.component.css */ "./src/app/app-navbar/app-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _user_firebase_service__WEBPACK_IMPORTED_MODULE_3__["UserFirebaseService"],
            _event_firebase_service__WEBPACK_IMPORTED_MODULE_4__["EventFirebaseService"], _rating_service__WEBPACK_IMPORTED_MODULE_6__["RatingService"]])
    ], AppNavbarComponent);
    return AppNavbarComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(location) {
        this.location = location;
        this.title = 'app';
        location.subscribe(function (callback) {
            console.log(callback);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_navbar_app_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-navbar/app-navbar.component */ "./src/app/app-navbar/app-navbar.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _dummy_list_dummy_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dummy-list/dummy-list.component */ "./src/app/dummy-list/dummy-list.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _loggedin_dashboard_loggedin_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./loggedin-dashboard/loggedin-dashboard.component */ "./src/app/loggedin-dashboard/loggedin-dashboard.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _landing_page_header_landing_page_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./landing-page-header/landing-page-header.component */ "./src/app/landing-page-header/landing-page-header.component.ts");
/* harmony import */ var _create_account_form_create_account_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./create-account-form/create-account-form.component */ "./src/app/create-account-form/create-account-form.component.ts");
/* harmony import */ var _my_event_my_event_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./my-event/my-event.component */ "./src/app/my-event/my-event.component.ts");
/* harmony import */ var _patch_notes_patch_notes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./patch-notes/patch-notes.component */ "./src/app/patch-notes/patch-notes.component.ts");
/* harmony import */ var _view_event_view_event_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./view-event/view-event.component */ "./src/app/view-event/view-event.component.ts");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./confirmation-dialog/confirmation-dialog.component */ "./src/app/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _rate_event_rate_event_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./rate-event/rate-event.component */ "./src/app/rate-event/rate-event.component.ts");
/* harmony import */ var _my_events_my_events_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./my-events/my-events.component */ "./src/app/my-events/my-events.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _prices_prices_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./prices/prices.component */ "./src/app/prices/prices.component.ts");
/* harmony import */ var _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./event-list/event-list.component */ "./src/app/event-list/event-list.component.ts");
/* harmony import */ var _event_filter_event_filter_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./event-filter/event-filter.component */ "./src/app/event-filter/event-filter.component.ts");
/* harmony import */ var _create_new_event_create_new_event_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./create-new-event/create-new-event.component */ "./src/app/create-new-event/create-new-event.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./my-profile/my-profile.component */ "./src/app/my-profile/my-profile.component.ts");
/* harmony import */ var _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./image-upload/image-upload.component */ "./src/app/image-upload/image-upload.component.ts");
/* harmony import */ var _user_image_gallery_user_image_gallery_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./user-image-gallery/user-image-gallery.component */ "./src/app/user-image-gallery/user-image-gallery.component.ts");
/* harmony import */ var _event_control_menu_event_control_menu_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./event-control-menu/event-control-menu.component */ "./src/app/event-control-menu/event-control-menu.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _terms_of_service_terms_of_service_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./terms-of-service/terms-of-service.component */ "./src/app/terms-of-service/terms-of-service.component.ts");
/* harmony import */ var _cookies_consent_cookies_consent_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./cookies-consent/cookies-consent.component */ "./src/app/cookies-consent/cookies-consent.component.ts");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "./src/app/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _mobile_login_header_mobile_login_header_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./mobile-login-header/mobile-login-header.component */ "./src/app/mobile-login-header/mobile-login-header.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./routing.module */ "./src/app/routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! mousetrap */ "./node_modules/mousetrap/mousetrap.js");
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(mousetrap__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var angular_modal_gallery__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! angular-modal-gallery */ "./node_modules/angular-modal-gallery/angular-modal-gallery.es5.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! angular2-cookie/services/cookies.service */ "./node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/esm5/web-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router_testing__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/router/testing */ "./node_modules/@angular/router/fesm5/testing.js");
/* harmony import */ var _pipes_active_blocked_pipe__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./pipes/active-blocked.pipe */ "./src/app/pipes/active-blocked.pipe.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./core/auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _create_wall_post_create_wall_post_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./create-wall-post/create-wall-post.component */ "./src/app/create-wall-post/create-wall-post.component.ts");
/* harmony import */ var _attended_events_attended_events_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./attended-events/attended-events.component */ "./src/app/attended-events/attended-events.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//Firebase



//Environment


//Ngb bootstrap

// Components





























// Routing


// Forms

// Material and animation





// Modal gallery
 // <------ mandatory dependency for angular-modal-gallery

// Font Awesome

// Cookies

// Web storage


// Test suite

// Pipes

// Spinner



// Toaster



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _app_navbar_app_navbar_component__WEBPACK_IMPORTED_MODULE_8__["AppNavbarComponent"],
                _dummy_list_dummy_list_component__WEBPACK_IMPORTED_MODULE_10__["DummyListComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__["LandingPageComponent"],
                _loggedin_dashboard_loggedin_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["LoggedinDashboardComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_39__["PageNotFoundComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_24__["EventListComponent"],
                _event_filter_event_filter_component__WEBPACK_IMPORTED_MODULE_25__["EventFilterComponent"],
                _landing_page_header_landing_page_header_component__WEBPACK_IMPORTED_MODULE_14__["LandingPageHeaderComponent"],
                _create_account_form_create_account_form_component__WEBPACK_IMPORTED_MODULE_15__["CreateAccountFormComponent"],
                _create_new_event_create_new_event_component__WEBPACK_IMPORTED_MODULE_26__["CreateNewEventComponent"],
                _events_events_component__WEBPACK_IMPORTED_MODULE_27__["EventsComponent"],
                _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_28__["MyProfileComponent"],
                _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_29__["ImageUploadComponent"],
                _user_image_gallery_user_image_gallery_component__WEBPACK_IMPORTED_MODULE_30__["UserImageGalleryComponent"],
                _event_control_menu_event_control_menu_component__WEBPACK_IMPORTED_MODULE_31__["EventControlMenuComponent"],
                _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_32__["FeedbackComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_33__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_34__["ContactComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_33__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_34__["ContactComponent"],
                _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_32__["FeedbackComponent"],
                _terms_of_service_terms_of_service_component__WEBPACK_IMPORTED_MODULE_35__["TermsOfServiceComponent"],
                _cookies_consent_cookies_consent_component__WEBPACK_IMPORTED_MODULE_36__["CookiesConsentComponent"],
                _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_37__["PrivacyPolicyComponent"],
                _pipes_active_blocked_pipe__WEBPACK_IMPORTED_MODULE_54__["ActiveBlockedPipe"],
                _mobile_login_header_mobile_login_header_component__WEBPACK_IMPORTED_MODULE_38__["MobileLoginHeaderComponent"],
                _my_events_my_events_component__WEBPACK_IMPORTED_MODULE_21__["MyEventsComponent"],
                _payment_payment_component__WEBPACK_IMPORTED_MODULE_22__["PaymentComponent"],
                _prices_prices_component__WEBPACK_IMPORTED_MODULE_23__["PricesComponent"],
                _my_event_my_event_component__WEBPACK_IMPORTED_MODULE_16__["MyEventComponent"],
                _patch_notes_patch_notes_component__WEBPACK_IMPORTED_MODULE_17__["PatchNotesComponent"],
                _view_event_view_event_component__WEBPACK_IMPORTED_MODULE_18__["ViewEventComponent"],
                _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmationDialogComponent"],
                _rate_event_rate_event_component__WEBPACK_IMPORTED_MODULE_20__["RateEventComponent"],
                _create_wall_post_create_wall_post_component__WEBPACK_IMPORTED_MODULE_59__["CreateWallPostComponent"],
                _attended_events_attended_events_component__WEBPACK_IMPORTED_MODULE_60__["AttendedEventsComponent"]
            ],
            entryComponents: [_mobile_login_header_mobile_login_header_component__WEBPACK_IMPORTED_MODULE_38__["MobileLoginHeaderComponent"], _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmationDialogComponent"], _create_wall_post_create_wall_post_component__WEBPACK_IMPORTED_MODULE_59__["CreateWallPostComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"].forRoot(),
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_41__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_41__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_43__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatCheckboxModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_45__["MatTabsModule"],
                angular_modal_gallery__WEBPACK_IMPORTED_MODULE_48__["ModalGalleryModule"].forRoot(),
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_49__["AngularFontAwesomeModule"],
                angular_web_storage__WEBPACK_IMPORTED_MODULE_51__["AngularWebStorageModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatProgressBarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_52__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_46__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatBadgeModule"],
                _angular_router_testing__WEBPACK_IMPORTED_MODULE_53__["RouterTestingModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_55__["NgxSpinnerModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_56__["AdminModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_58__["ToastrModule"].forRoot(),
                _routing_module__WEBPACK_IMPORTED_MODULE_40__["RoutingModule"]
            ],
            providers: [angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_50__["CookieService"], _core_auth_guard__WEBPACK_IMPORTED_MODULE_57__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/attended-events/attended-events.component.css":
/*!***************************************************************!*\
  !*** ./src/app/attended-events/attended-events.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    text-align: center;\r\n    color: snow;\r\n}\r\n\r\nmat-paginator {\r\n    margin-bottom: 20px;\r\n}\r\n\r\ntd {\r\n    font-size: 12px;\r\n}\r\n\r\n#search {\r\n    background-color: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n  }\r\n\r\n.hide {\r\n    visibility: hidden;\r\n}\r\n\r\ntr:hover td {\r\n    background:#3f51b51c;\r\n    cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/attended-events/attended-events.component.html":
/*!****************************************************************!*\
  !*** ./src/app/attended-events/attended-events.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<h2>Events jeg har deltaget i</h2>\n<mat-card>\n    <div class=\"mat-elevation-z8\">\n\n        <table *ngIf=\"!isMobile\" mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n            <!--- Note that these columns can be defined in any order.\n                  The actual rendered columns are set as a property on the row definition\" -->\n          \n            <!-- Title Column -->\n            <ng-container matColumnDef=\"name\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Event </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n            </ng-container>\n          \n            <!-- City Column -->\n            <ng-container matColumnDef=\"address\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> By </th>\n              <td mat-cell *matCellDef=\"let element\">{{element.address.street}}, {{element.address.city}}, {{element.address.zip}}</td>\n            </ng-container>\n    \n            <!-- Category Column -->\n            <ng-container matColumnDef=\"category\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Kategori </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.category}} </td>\n            </ng-container>\n          \n            <!-- Distance Column -->\n            <ng-container matColumnDef=\"distance\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Afstand </th>\n              <td mat-cell *matCellDef=\"let element\"> {{10+10}} KM </td>\n            </ng-container>\n          \n            <!-- Gender Column -->\n            <ng-container matColumnDef=\"genderRatio\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Kønsfordeling </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.genderRatio}} </td>\n            </ng-container>\n          \n            <!-- Children Column -->\n            <ng-container matColumnDef=\"targetGroup\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Børn </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.targetGroup}} </td>\n            </ng-container>\n          \n            <!-- Participants Column -->\n            <ng-container matColumnDef=\"available\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Pladser </th>\n              <td mat-cell *matCellDef=\"let element\"> Ledig </td>\n            </ng-container>\n    \n            <ng-container matColumnDef=\"dateStart\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Dato</th>\n                <td mat-cell *matCellDef=\"let element\">\n                    <button (click)=\"onViewClick(element)\" mat-button color=\"primary\">Se</button>\n                </td>\n              </ng-container>\n          \n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"onViewClick(row)\"></tr>\n          </table>\n    </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/attended-events/attended-events.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/attended-events/attended-events.component.ts ***!
  \**************************************************************/
/*! exports provided: AttendedEventsComponent, EventDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendedEventsComponent", function() { return AttendedEventsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDataSource", function() { return EventDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _event_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-firebase.service */ "./src/app/event-firebase.service.ts");
/* harmony import */ var _mobile_detector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mobile-detector.service */ "./src/app/mobile-detector.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _table_filter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../table-filter.service */ "./src/app/table-filter.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _user_firebase_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user-firebase.service */ "./src/app/user-firebase.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _entity_user_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../entity/user/user */ "./src/app/entity/user/user.ts");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AttendedEventsComponent = /** @class */ (function () {
    function AttendedEventsComponent(efbs, ufbs, mds, spinner, tfs, router, toast, authService) {
        var _this = this;
        this.efbs = efbs;
        this.ufbs = ufbs;
        this.mds = mds;
        this.spinner = spinner;
        this.tfs = tfs;
        this.router = router;
        this.toast = toast;
        this.authService = authService;
        this.isMobile = false;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.displayedColumns = ['name', 'address', 'category', 'distance', 'genderRatio', 'targetGroup', 'available', 'dateStart'];
        this.dataSourceMobile = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.displayedColumnsMobile = ['name', 'address', 'available', 'dateStart'];
        this.events = [];
        this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe(function (userSnapshot) {
            var u = new _entity_user_user__WEBPACK_IMPORTED_MODULE_10__["User"](userSnapshot);
            _this.efbs.getList().subscribe(function (eventSnapshots) {
                eventSnapshots.forEach(function (eventSnapshot) {
                    if (eventSnapshot.participants !== undefined) {
                        Object.values(eventSnapshot.participants).forEach(function (value) {
                            if (value.username === u.username) {
                                _this.events.push(eventSnapshot);
                            }
                        });
                    }
                });
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.events);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
                _this.dataSourceMobile = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.events);
                _this.dataSourceMobile.paginator = _this.paginator;
                _this.dataSourceMobile.sort = _this.sort;
                _this.spinner.hide();
            });
        });
    }
    AttendedEventsComponent.prototype.ngOnInit = function () {
        this.spinner.show();
    };
    AttendedEventsComponent.prototype.onViewClick = function (element) {
        var e = element;
        var navigationExtras = {
            queryParams: {
                "key": e.key
            }
        };
        this.router.navigate(['/view-event'], navigationExtras);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], AttendedEventsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], AttendedEventsComponent.prototype, "sort", void 0);
    AttendedEventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attended-events',
            template: __webpack_require__(/*! ./attended-events.component.html */ "./src/app/attended-events/attended-events.component.html"),
            styles: [__webpack_require__(/*! ./attended-events.component.css */ "./src/app/attended-events/attended-events.component.css")]
        }),
        __metadata("design:paramtypes", [_event_firebase_service__WEBPACK_IMPORTED_MODULE_2__["EventFirebaseService"], _user_firebase_service__WEBPACK_IMPORTED_MODULE_8__["UserFirebaseService"],
            _mobile_detector_service__WEBPACK_IMPORTED_MODULE_3__["MobileDetectorService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _table_filter_service__WEBPACK_IMPORTED_MODULE_6__["TableFilterService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], _auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]])
    ], AttendedEventsComponent);
    return AttendedEventsComponent;
}());

var EventDataSource = /** @class */ (function (_super) {
    __extends(EventDataSource, _super);
    function EventDataSource(efbs) {
        var _this = _super.call(this) || this;
        _this.efbs = efbs;
        return _this;
    }
    EventDataSource.prototype.connect = function () {
        return this.efbs.getList();
    };
    EventDataSource.prototype.disconnect = function () { };
    return EventDataSource;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["DataSource"]));



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/esm5/web-storage.js");
/* harmony import */ var _user_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-firebase.service */ "./src/app/user-firebase.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _entity_user_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./entity/user/user */ "./src/app/entity/user/user.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Routing

// Session storage





var AuthService = /** @class */ (function () {
    //public userInfo: Observable<firebase.User>;
    function AuthService(afAuth, router, session, ufbs, spinner, toast) {
        // To apply the default browser preference instead of explicitly setting it.
        // firebase.auth().useDeviceLanguage();
        this.afAuth = afAuth;
        this.router = router;
        this.session = session;
        this.ufbs = ufbs;
        this.spinner = spinner;
        this.toast = toast;
        //this.userInfo = this.afAuth.authState;
    }
    AuthService.prototype.doRegister = function (formData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(formData.email, formData.password)
                .then(function (res) {
                resolve(res);
                // Don't include the password in the database -> user table
                delete formData['password'];
                var user = new _entity_user_user__WEBPACK_IMPORTED_MODULE_7__["User"](formData);
                var date = new Date();
                date.setUTCFullYear(2019, 0, 1);
                user.subscribed_until = date;
                _this.ufbs.insertUser(user, res.uid);
                _this.doLogin({ email: formData.email, password: formData.password });
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.doLogin = function (formData) {
        var _this = this;
        return this.afAuth.auth
            .signInWithEmailAndPassword(formData.email, formData.password)
            .then(function (credential) {
            _this.user = _this.afAuth.auth.currentUser;
            //this.loginRedirect();
            return credential.user;
        })
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.doSocialLoginRegister = function (firebaseUser) {
        var userEntity = new _entity_user_user__WEBPACK_IMPORTED_MODULE_7__["User"]({ "username": firebaseUser.displayName, "email": firebaseUser.email });
        var date = new Date();
        date.setUTCFullYear(2019, 0, 1);
        userEntity.subscribed_until = date;
        this.ufbs.insertUser(userEntity, firebaseUser.uid);
    };
    AuthService.prototype.doGoogleLogin = function () {
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
        this.afAuth.auth.useDeviceLanguage();
        return this.afAuth.auth.signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    };
    AuthService.prototype.doFacebookLogin = function () {
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider();
        this.afAuth.auth.useDeviceLanguage();
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithPopup(provider).then(function (result) {
            console.log("Donedy: " + result);
            return result;
            // // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            // var token = result.credential.accessToken;
            // // The signed-in user info.
            // var user = result.user;
            // // ...
        }).catch(function (error) {
            console.log("Failsey: " + error);
            return error;
            // // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // // The email of the user's account used.
            // var email = error.email;
            // // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // // ...
        });
    };
    AuthService.prototype.doSignout = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.user = null;
            _this.signoutRedirect();
            _this.session.remove("user");
        });
    };
    AuthService.prototype.loginRedirect = function () {
        this.router.navigate(['/loggedin-dashboard']);
    };
    AuthService.prototype.signoutRedirect = function () {
        this.router.navigate(['/']);
    };
    AuthService.prototype.authenticated = function () {
        return this.afAuth.auth.currentUser !== null;
    };
    AuthService.prototype.currentUserObservable = function () {
        return this.afAuth.authState;
    };
    AuthService.prototype.makeid = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 28; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    AuthService.prototype.sendVerificationMail = function () {
        var _this = this;
        console.log(firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser);
        firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.sendEmailVerification().then(function () {
            console.log("Send verification email");
            _this.toast.info("En bekr\u00E6ftigelsesmail er afsendt til " + _this.afAuth.auth.currentUser.email, 'ℹ️ ');
        }).catch(function (err) {
            console.log("Failed to send verification email");
            _this.toast.error(err, 'Fejl!');
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular_web_storage__WEBPACK_IMPORTED_MODULE_4__["SessionStorageService"], _user_firebase_service__WEBPACK_IMPORTED_MODULE_5__["UserFirebaseService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/confirmation-dialog/confirmation-dialog.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/confirmation-dialog/confirmation-dialog.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/confirmation-dialog/confirmation-dialog.component.html":
/*!************************************************************************!*\
  !*** ./src/app/confirmation-dialog/confirmation-dialog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Bekræft</h1>\r\n<div mat-dialog-content>\r\n  <p>{{dialogText}}</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button color=\"primary\" (click)=\"onNoClick()\">{{buttonNo}}</button>\r\n  <button mat-raised-button color=\"warn\" (click)=\"onYesClick()\" cdkFocusInitial>{{buttonYes}}</button>\r\n</div>"

/***/ }),

/***/ "./src/app/confirmation-dialog/confirmation-dialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/confirmation-dialog/confirmation-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _event_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-firebase.service */ "./src/app/event-firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ConfirmationDialogComponent = /** @class */ (function () {
    function ConfirmationDialogComponent(dialogRef, data, efbs) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.efbs = efbs;
        this.key = "";
        this.buttonNo = this.data.buttonNo;
        this.buttonYes = this.data.buttonYes;
        this.dialogText = this.data.dialogText;
    }
    ConfirmationDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ConfirmationDialogComponent.prototype.onYesClick = function () {
        if (this.data.key.length > 6) {
            this.efbs.deleteEvent(this.data.key);
        }
        this.onNoClick();
    };
    ConfirmationDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmationDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation-dialog',
            template: __webpack_require__(/*! ./confirmation-dialog.component.html */ "./src/app/confirmation-dialog/confirmation-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-dialog.component.css */ "./src/app/confirmation-dialog/confirmation-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _event_firebase_service__WEBPACK_IMPORTED_MODULE_2__["EventFirebaseService"]])
    ], ConfirmationDialogComponent);
    return ConfirmationDialogComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2, p {\r\n    text-align: center;\r\n}\r\n\r\nform, button {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display:block;\r\n    width: 50%;\r\n}\r\n\r\nmat-form-field, mat-card {\r\n    width: 100%;\r\n}\r\n\r\nmat-card {\r\n    margin: 20px;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n\r\n    mat-card {\r\n        margin: 0px;\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n    form {\r\n        width: 100%;\r\n    }\r\n\r\n    h2 {\r\n        font-size: 1.25rem;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<landing-page-header *ngIf=\"!displayNavbar\"></landing-page-header>\r\n<app-navbar *ngIf=\"displayNavbar\"></app-navbar>\r\n\r\n<mat-card *ngIf=\"!isMobile\">\r\n\r\n    <mat-grid-list cols=\"2\" rowHeight=\"600px\">\r\n\r\n        <mat-grid-tile>\r\n            <mat-card>\r\n                    <form [formGroup]=\"contactForm\">\r\n                            <h2><fa name=\"wpforms\"></fa> Kontakt </h2>\r\n                                <mat-form-field>\r\n                                    <mat-label><fa name=\"address-card\"></fa> Navn</mat-label>\r\n                                    <input formControlName=\"name\" matInput placeholder=\"navn\" autofocus required>\r\n                                </mat-form-field>\r\n                            \r\n                                <mat-form-field>\r\n                                    <mat-label><fa name=\"envelope\"></fa> Email</mat-label>\r\n                                    <input formControlName=\"email\" matInput placeholder=\"email\" required>\r\n                                </mat-form-field>\r\n                            \r\n                                <mat-form-field>\r\n                                    <mat-label><fa name=\"tag\"></fa> Emne</mat-label>\r\n                                    <mat-select formControlName=\"subject\" placeholder=\"Vælg emne\" required>\r\n                                        <mat-option value=\"Andet\">Andet</mat-option>\r\n                                        <mat-option value=\"Teknisk problem\">Teknisk problem</mat-option>\r\n                                        <mat-option value=\"Anmeld snyd\">Anmeld snyd</mat-option>\r\n                                        <mat-option value=\"Klage\">Klage</mat-option>\r\n                                        <mat-option value=\"Konto\">Konto</mat-option>\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                \r\n                                <mat-form-field>\r\n                                    <textarea formControlName=\"message\" matInput placeholder=\"Besked...\" rows=\"6\"\r\n                                    matTooltip=\"Du kan trække nede i højre hjørne for at forstørre tekstfeltet\"\r\n                                    aria-label=\"Button that displays a tooltip when focused or hovered over\" required></textarea>\r\n                                </mat-form-field>\r\n                            \r\n                            \r\n                                <button [disabled]=\"disabled\" (click)=\"sendMail(contactForm.value)\" mat-raised-button color=\"primary\">Send</button>\r\n                            </form>\r\n            </mat-card>\r\n        </mat-grid-tile>\r\n\r\n        <mat-grid-tile>\r\n            <mat-card>\r\n                <h2>Virksomhedsinformationer</h2>\r\n                <p>SingleNetværket IVS<br>\r\n                    Valbygårdsvej 44, sttv<br>\r\n                    2500 Valby<br>\r\n                    <a href=\"tel:+4560560018\">TLF: +45 6056 0018</a><br>\r\n                    CVR: 39557150\r\n                </p>\r\n            </mat-card>\r\n            \r\n        </mat-grid-tile>\r\n\r\n    </mat-grid-list>\r\n\r\n</mat-card>\r\n\r\n<mat-card *ngIf=\"isMobile\">\r\n        <form [formGroup]=\"contactForm\">\r\n                <h2><fa name=\"wpforms\"></fa> Kontakt </h2>\r\n                    <mat-form-field>\r\n                        <mat-label><fa name=\"address-card\"></fa> Navn</mat-label>\r\n                        <input formControlName=\"name\" matInput placeholder=\"navn\" autofocus required>\r\n                    </mat-form-field>\r\n                \r\n                    <mat-form-field>\r\n                        <mat-label><fa name=\"envelope\"></fa> Email</mat-label>\r\n                        <input formControlName=\"email\" matInput placeholder=\"email\" required>\r\n                    </mat-form-field>\r\n                \r\n                    <mat-form-field>\r\n                        <mat-label><fa name=\"tag\"></fa> Emne</mat-label>\r\n                        <mat-select formControlName=\"subject\" placeholder=\"Vælg emne\" required>\r\n                            <mat-option value=\"option\">Andet</mat-option>\r\n                            <mat-option value=\"option\">Teknisk problem</mat-option>\r\n                            <mat-option value=\"option\">Anmeld snyd</mat-option>\r\n                            <mat-option value=\"option\">Klage</mat-option>\r\n                            <mat-option value=\"option\">Konto</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n    \r\n                    <mat-form-field>\r\n                        <textarea formControlName=\"message\" matInput placeholder=\"Besked...\" rows=\"6\"\r\n                        matTooltip=\"Du kan trække nede i højre hjørne for at forstørre tekstfeltet\"\r\n                        aria-label=\"Button that displays a tooltip when focused or hovered over\" required></textarea>\r\n                    </mat-form-field>\r\n                \r\n                \r\n                    <button [disabled]=\"disabled\" (click)=\"sendMail(contactForm.value)\" mat-raised-button color=\"primary\">Send</button>\r\n                </form>\r\n</mat-card>\r\n\r\n<mat-card *ngIf=\"isMobile\">\r\n        <h2>Virksomhedsinformationer</h2>\r\n        <p>SingleNetværket IVS<br>\r\n            Valbygårdsvej 44, sttv<br>\r\n            2500 Valby<br>\r\n            <a href=\"tel:+4560560018\">TLF: +45 6056 0018</a><br>\r\n            CVR: 39557150\r\n        </p>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mobile_detector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mobile-detector.service */ "./src/app/mobile-detector.service.ts");
/* harmony import */ var _transactional_email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../transactional-email.service */ "./src/app/transactional-email.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactComponent = /** @class */ (function () {
    function ContactComponent(mds, tes, toast, authService) {
        this.mds = mds;
        this.tes = tes;
        this.toast = toast;
        this.authService = authService;
        this.isMobile = false;
        this.disabled = false;
        this.displayNavbar = false;
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isMobile = this.mds.check();
        this.authService.afAuth.auth.onAuthStateChanged(function (user) {
            if (user) {
                _this.displayNavbar = true;
            }
        });
    };
    ContactComponent.prototype.sendMail = function (formData) {
        var _this = this;
        this.disabled = true;
        this.toast.info("Svar fra server...", "Afventer");
        this.tes.sendContactMail(formData).subscribe(function (response) {
            _this.toast.clear();
            _this.toast.success("Din besked er afsendt!", 👍);
            console.log("Placeholder");
            console.log(response);
            _this.disabled = false;
        }).unsubscribe;
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_mobile_detector_service__WEBPACK_IMPORTED_MODULE_2__["MobileDetectorService"], _transactional_email_service__WEBPACK_IMPORTED_MODULE_3__["TransactionalEmailService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/cookies-consent/cookies-consent.component.css":
/*!***************************************************************!*\
  !*** ./src/app/cookies-consent/cookies-consent.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Cookie Consent Begin*/\r\n#cookieConsent {\r\n    background-color: rgba(20,20,20,0.8);\r\n    min-height: 26px;\r\n    font-size: 14px;\r\n    color: #ccc;\r\n    line-height: 26px;\r\n    padding: 8px 0 8px 30px;\r\n    font-family: \"Trebuchet MS\",Helvetica,sans-serif;\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 9999;\r\n    text-align: center;\r\n}\r\n#cookieConsent a {\r\n    color: #4B8EE7;\r\n    text-decoration: none;\r\n}\r\n#closeCookieConsent {\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    height: 20px;\r\n    width: 20px;\r\n    margin: -15px 0 0 0;\r\n    font-weight: bold;\r\n}\r\n#closeCookieConsent:hover {\r\n    color: #FFF;\r\n}\r\n#cookieConsent a.cookieConsentOK {\r\n    background-color: snow;\r\n    display: inline-block;\r\n    border-radius: 5px;\r\n    padding: 0 20px;\r\n    cursor: pointer;\r\n    margin: 0 60px 0 10px;\r\n}\r\n#cookieConsent a.cookieConsentOK:hover {\r\n    background-color: #E0C91F;\r\n}\r\n/*Cookie Consent End*/"

/***/ }),

/***/ "./src/app/cookies-consent/cookies-consent.component.html":
/*!****************************************************************!*\
  !*** ./src/app/cookies-consent/cookies-consent.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayCookies\" id=\"cookieConsent\">\r\n    Single Netværket anvender cookies. <a href=\"#\" target=\"_blank\">Læs mere</a>. Giv mit samtykke: <a (click)=\"onAcceptCookies()\" class=\"cookieConsentOK\"><fa name=\"check\"></fa></a>\r\n</div>'"

/***/ }),

/***/ "./src/app/cookies-consent/cookies-consent.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/cookies-consent/cookies-consent.component.ts ***!
  \**************************************************************/
/*! exports provided: CookiesConsentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookiesConsentComponent", function() { return CookiesConsentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-cookie/core */ "./node_modules/angular2-cookie/core.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_core__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CookiesConsentComponent = /** @class */ (function () {
    function CookiesConsentComponent(_cookieService) {
        this._cookieService = _cookieService;
        this.displayCookies = false;
    }
    CookiesConsentComponent.prototype.ngOnInit = function () {
        if (this.getCookie('acceptCookie') === "accept") {
            this.displayCookies = false;
        }
        else {
            this.displayCookies = true;
        }
    };
    CookiesConsentComponent.prototype.onAcceptCookies = function () {
        this.displayCookies = false;
        this._cookieService.put('acceptCookie', "accept");
    };
    CookiesConsentComponent.prototype.getCookie = function (key) {
        return this._cookieService.get(key);
    };
    CookiesConsentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cookies-consent',
            template: __webpack_require__(/*! ./cookies-consent.component.html */ "./src/app/cookies-consent/cookies-consent.component.html"),
            styles: [__webpack_require__(/*! ./cookies-consent.component.css */ "./src/app/cookies-consent/cookies-consent.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_cookie_core__WEBPACK_IMPORTED_MODULE_1__["CookieService"]])
    ], CookiesConsentComponent);
    return CookiesConsentComponent;
}());



/***/ }),

/***/ "./src/app/core/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/core/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        if (this.authService.authenticated()) {
            return true;
        }
        return this.authService.currentUserObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            return !!user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (loggedIn) {
            if (!loggedIn) {
                _this.router.navigate(['/landing-page']);
            }
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/create-account-form/create-account-form.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/create-account-form/create-account-form.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1, h2, h3, h4, h5, p, #nameLabel, #emailLabel, #passwordLabel, #consentLabel {\r\n    color:snow;\r\n    text-align: center;\r\n}\r\n\r\n#emailHelp {\r\n    text-align: center;\r\n}\r\n\r\nbutton {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.error, .success {\r\n    text-align: center;\r\n    padding: 15px;\r\n}\r\n\r\n.error {\r\n    color: #BD3D3A;\r\n}\r\n\r\n.success {\r\n    color: #02bd7e;\r\n}\r\n\r\n#firebaseui-auth-container {\r\n    display:none;\r\n}\r\n\r\n.display-message {\r\n    margin: 10px;\r\n}\r\n\r\nmat-form-field {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n/*\r\n.error, .success {\r\n    margin: 15px;\r\n    padding: 5px;\r\n    text-align: center;\r\n}\r\n\r\n.error {\r\n    color: #721c24;\r\n    background-color: #f8d7da;\r\n    border-color: #f5c6cb;\r\n}\r\n\r\n.success {\r\n    color: #155724;\r\n    background-color: #d4edda;\r\n    border-color: #c3e6cb;\r\n}\r\n*/"

/***/ }),

/***/ "./src/app/create-account-form/create-account-form.component.html":
/*!************************************************************************!*\
  !*** ./src/app/create-account-form/create-account-form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n<form [formGroup]=\"registerForm\">\r\n    <div class=\"form-group\">\r\n      <label id=\"emailLabel\" for=\"exampleInputEmail1\">Email</label>\r\n      <input type=\"email\" class=\"form-control\" formControlName=\"email\" id=\"inputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Indtast her\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label id=\"passwordLabel\" for=\"exampleInputPassword1\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" formControlName=\"password\" id=\"inputPassword1\" placeholder=\"Indtast her\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label id=\"nameLabel\" for=\"inputName1\">Profil navn</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"username\" id=\"inputName1\" aria-describedby=\"emailHelp\" placeholder=\"Indtast her\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label id=\"consentLabel\" for=\"inputConsent1\">Samtykke</label>\r\n        <input type=\"checkbox\" class=\"form-control\" id=\"inputConsent1\" name=\"consent\" value=\"Yes\">\r\n        <p>Jeg er indforstået med Single Netværkets privatlivs politik og giver mit samtykke</p>\r\n        <label class=\"error\">{{errorMessage}}</label>\r\n        <label class=\"success\">{{successMessage}}</label>\r\n      </div>\r\n    <button type=\"submit\" (click)=\"tryRegister(registerForm.value)\" class=\"btn btn-primary\">Opret</button>\r\n    \r\n  </form>\r\n-->\r\n\r\n<form [formGroup]=\"registerForm\">\r\n    <mat-form-field>\r\n        <mat-label>Email</mat-label>\r\n        <input formControlName=\"email\" name=\"email\" matInput placeholder=\"email\" autofocus required>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n        <mat-label>Password</mat-label>\r\n        <input formControlName=\"password\" name=\"password\"  matInput placeholder=\"password\" [type]=\"hide ? 'password' : 'text'\" required>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n        <mat-label>Indtast password igen</mat-label>\r\n        <input (change)=\"comparePasswords($event.target.value)\" name=\"verification\"  matInput placeholder=\"password\" [type]=\"hide ? 'password' : 'text'\" required>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n        <mat-label>Brugernavn</mat-label>\r\n        <input formControlName=\"username\" name=\"username\" matInput placeholder=\"brugernavn\" required>\r\n    </mat-form-field>\r\n\r\n    <mat-card class=\"display-message\" *ngIf=\"displayMessage\">\r\n        <mat-label class=\"error\">{{errorMessage}}</mat-label>\r\n        <mat-label class=\"success\">{{successMessage}}</mat-label>\r\n    </mat-card>\r\n\r\n    <button (click)=\"tryRegister(registerForm.value)\" mat-raised-button color=\"primary\">Opret bruger</button>\r\n</form>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/create-account-form/create-account-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/create-account-form/create-account-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreateAccountFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountFormComponent", function() { return CreateAccountFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-firebase.service */ "./src/app/user-firebase.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _mobile_login_header_mobile_login_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mobile-login-header/mobile-login-header.component */ "./src/app/mobile-login-header/mobile-login-header.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateAccountFormComponent = /** @class */ (function () {
    function CreateAccountFormComponent(authService, ufbs, dialog, spinner, toast) {
        this.authService = authService;
        this.ufbs = ufbs;
        this.dialog = dialog;
        this.spinner = spinner;
        this.toast = toast;
        this.isMobile = false;
        this.hide = true;
        this.displayMessage = false;
        this.passwordsMatch = false;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    CreateAccountFormComponent.prototype.ngOnInit = function () {
        if (window.screen.width <= 600) {
            this.isMobile = true;
        }
    };
    CreateAccountFormComponent.prototype.tryRegister = function (value) {
        var _this = this;
        if (this.formValidation()) {
            this.spinner.show();
            this.authService.doRegister(value)
                .then(function (res) {
                _this.spinner.hide();
                _this.authService.sendVerificationMail();
            }, function (err) {
                _this.spinner.hide();
            });
        }
    };
    CreateAccountFormComponent.prototype.translateErrorMsg = function (err) {
        switch (err.code) {
            case "auth/invalid-email":
                return "Ugyldige tegn i email feltet eller tjek om feltet er tomt.";
            case "auth/email-already-in-use":
                return "Email adressen er allerede taget. Prøv en anden mail";
            case "auth/weak-password":
                return "Kodeordet skal mindst være 6 tegn.";
            default:
                return "Der skete en ukendt fejl prøv igen senere";
        }
    };
    CreateAccountFormComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_mobile_login_header_mobile_login_header_component__WEBPACK_IMPORTED_MODULE_5__["MobileLoginHeaderComponent"], {
            width: '250px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    CreateAccountFormComponent.prototype.comparePasswords = function (eventTargetValue) {
        this.toast.clear();
        if (eventTargetValue.length > 7) {
            if (eventTargetValue !== this.registerForm.get('password').value) {
                this.toast.warning('Password er ikke ens', 'Hov!');
                this.passwordsMatch = false;
            }
            else {
                this.passwordsMatch = true;
            }
        }
    };
    CreateAccountFormComponent.prototype.formValidation = function () {
        // TODO: implement this method
        return true;
    };
    CreateAccountFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'create-account-form',
            template: __webpack_require__(/*! ./create-account-form.component.html */ "./src/app/create-account-form/create-account-form.component.html"),
            styles: [__webpack_require__(/*! ./create-account-form.component.css */ "./src/app/create-account-form/create-account-form.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _user_firebase_service__WEBPACK_IMPORTED_MODULE_3__["UserFirebaseService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], CreateAccountFormComponent);
    return CreateAccountFormComponent;
}());



/***/ }),

/***/ "./src/app/create-new-event/create-new-event.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/create-new-event/create-new-event.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    \r\n}\r\n\r\nmat-form-field, mat-label {\r\n    width: 100%;\r\n}\r\n\r\nlabel, mat-label {\r\n    \r\n}\r\n\r\nmat-radio-button {\r\n    margin: 5px;\r\n}\r\n\r\nform {\r\n    top: 0;\r\n    width: 50%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n}\r\n\r\n/*\r\n.container { \r\n    padding-top: 100px; \r\n    padding-bottom: 15px;\r\n}\r\n.form-control { margin-bottom: 10px; }\r\n\r\ntextarea {\r\n   resize: none;\r\n}\r\n\r\n.col-sm-12 {\r\n    background-color: #f5f5f5;\r\n    padding-bottom: 10px;\r\n}\r\n\r\nfa {\r\n    color: #428bca;\r\n}\r\n\r\nlabel {\r\n    padding-right: 20px;\r\n}\r\n\r\n.form-check-inline {\r\n    font-size: 14px;\r\n}\r\n\r\n#maxAge, #minAge, #minGuests, #maxGuests {\r\n    width: 100px;\r\n}\r\n*/"

/***/ }),

/***/ "./src/app/create-new-event/create-new-event.component.html":
/*!******************************************************************!*\
  !*** ./src/app/create-new-event/create-new-event.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n        <mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\r\n                <mat-step [stepControl]=\"firstFormGroup\">\r\n                  <form [formGroup]=\"firstFormGroup\">\r\n                    <ng-template matStepLabel>Hvad & Hvor</ng-template>\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Titel\" formControlName=\"eventName\" required>\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <textarea formControlName=\"eventDescription\" matInput placeholder=\"Beskrivelse\" rows=\"3\"\r\n                        matTooltip=\"Du kan trække nede i højre hjørne for at forstørre tekstfeltet\"\r\n                        aria-label=\"Button that displays a tooltip when focused or hovered over\" required></textarea>\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                            <mat-label><fa name=\"tag\"></fa> Kategori</mat-label>\r\n                            <mat-select formControlName=\"eventCategory\" name=\"eventCategory\" placeholder=\"Vælg emne\" required>\r\n                                <mat-option value=\"Andet\">Andet</mat-option>\r\n                                <mat-option value=\"Hjemmehygge\">Hjemmehygge</mat-option>\r\n                                <mat-option value=\"Fest i privathjem\">Fest i privathjem</mat-option>\r\n                                <mat-option value=\"Fest uden for privaten\">Fest uden for privaten</mat-option>\r\n                                <mat-option value=\"For børn\">For børn</mat-option>\r\n                                <mat-option value=\"Spis sammen på restaurant\">Spis sammen på restaurant</mat-option>\r\n                                <mat-option value=\"Biograf\">Biograf</mat-option>\r\n                                <mat-option value=\"KateNaturoplevelsegori\">Naturoplevelse</mat-option>\r\n                                <mat-option value=\"Ferie\">Ferie</mat-option>\r\n                                <mat-option value=\"Koncert\">Koncert</mat-option>\r\n                                <mat-option value=\"Kultur\">Kultur</mat-option>\r\n                                <mat-option value=\"Sport\">Sport</mat-option>\r\n                            </mat-select> \r\n                    </mat-form-field>\r\n\r\n                    <mat-label><fa name=\"home\"></fa> Adresse</mat-label>\r\n\r\n                    <mat-grid-list cols=\"3\" rowHeight=\"70px\">\r\n                        <mat-grid-tile>\r\n                            <mat-form-field>\r\n                                <mat-label>Vej</mat-label>\r\n                                <input matInput formControlName=\"eventLocationStreet\" placeholder=\"Vej\" required>\r\n                            </mat-form-field>\r\n                        </mat-grid-tile>\r\n                            <mat-grid-tile>\r\n                                    <mat-form-field>\r\n                                        <mat-label>Post Nr.</mat-label>\r\n                                        <input (keyup)=\"lookUpZip($event)\" matInput formControlName=\"eventLocationZip\" placeholder=\"#\" required> <br>\r\n                                    </mat-form-field>\r\n                            </mat-grid-tile>\r\n                            <mat-grid-tile>\r\n                                <mat-form-field>\r\n                                    <mat-label>{{apiZipValue}}</mat-label>\r\n                                    <input matInput formControlName=\"eventLocationCity\" placeholder=\"By\" readonly\r\n                                    matTooltip=\"Dette felt udfyldes automatisk\">\r\n                                </mat-form-field>\r\n                            </mat-grid-tile>\r\n                    </mat-grid-list>\r\n\r\n                    <div>\r\n                      <button mat-raised-button color=\"primary\" matStepperNext>Næste</button>\r\n                    </div>\r\n                  </form>\r\n                </mat-step>\r\n                <mat-step [stepControl]=\"secondFormGroup\">\r\n                  <form [formGroup]=\"secondFormGroup\">\r\n                    <ng-template matStepLabel>Målgruppe</ng-template>\r\n                        <mat-label>Kønsfordeling</mat-label> <br>\r\n                        <mat-radio-group formControlName=\"eventGender\">\r\n                            <mat-radio-button name=\"eventGender\" value=\"Kun for mænd\">Kun for mænd</mat-radio-button>\r\n                            <mat-radio-button name=\"eventGender\" value=\"Kun for kvinder\">Kun for kvinder</mat-radio-button>\r\n                            <mat-radio-button name=\"eventGender\" value=\"50/50\">50/50</mat-radio-button>\r\n                            <mat-radio-button name=\"eventGender\" value=\"Først til mølle\">Først til mølle</mat-radio-button>\r\n                        </mat-radio-group>\r\n\r\n                        <br> <mat-label>Børn</mat-label> <br>\r\n                        <mat-radio-group formControlName=\"eventTargetGroup\">\r\n                            <mat-radio-button name=\"eventTargetGroup\" value=\"Kun med børn\">Kun med børn</mat-radio-button>\r\n                            <mat-radio-button name=\"eventTargetGroup\" value=\"Kun uden børn\">Kun uden børn</mat-radio-button>\r\n                            <mat-radio-button name=\"eventTargetGroup\" value=\"Børn velkomne\">Børn velkomne</mat-radio-button>\r\n                        </mat-radio-group>\r\n\r\n\r\n                        <br> <label>Aldersgruppe</label>\r\n\r\n                        <mat-grid-list cols=\"2\" rowHeight=70px>\r\n                            <mat-grid-tile>\r\n                                <mat-form-field>\r\n                                    <mat-label>Fra</mat-label>\r\n                                    <input matInput type=\"number\" min=\"18\" max=\"98\" formControlName=\"eventMinAge\" placeholder=\"18\" required>\r\n                                </mat-form-field>\r\n                            </mat-grid-tile>\r\n                            <mat-grid-tile>\r\n                                <mat-form-field>\r\n                                    <mat-label>Til</mat-label>\r\n                                    <input matInput type=\"number\" min=\"18\" max=\"99\" formControlName=\"eventMaxAge\" placeholder=\"99\" required>\r\n                                </mat-form-field>\r\n                            </mat-grid-tile>\r\n                        </mat-grid-list>\r\n\r\n                        <label>Antal Gæster</label>\r\n\r\n                        <mat-grid-list cols=\"2\" rowHeight=70px>\r\n                            <mat-grid-tile>\r\n                                <mat-form-field>\r\n                                    <mat-label>Min</mat-label>\r\n                                    <input matInput type=\"number\" min=\"2\" max=\"499\" formControlName=\"eventMinGuests\" placeholder=\"2\" required>\r\n                                </mat-form-field>\r\n                                </mat-grid-tile>\r\n                            <mat-grid-tile>\r\n                                <mat-form-field>\r\n                                    <mat-label>Max</mat-label>\r\n                                    <input matInput type=\"number\" min=\"2\" max=\"499\" formControlName=\"eventMaxGuests\" placeholder=\"499\" required>\r\n                                </mat-form-field>\r\n                                </mat-grid-tile>\r\n                        </mat-grid-list>\r\n\r\n                        <mat-label>Tving på venteliste?</mat-label> <br>\r\n                        <mat-radio-group formControlName=\"eventQueue\">\r\n                            <mat-radio-button value=\"Ja\">Ja</mat-radio-button>\r\n                            <mat-radio-button value=\"Nej\">Nej</mat-radio-button>\r\n                        </mat-radio-group>\r\n\r\n                    <div>\r\n                      <button mat-button matStepperPrevious>Tilbage</button>\r\n                      <button mat-raised-button color=\"primary\" matStepperNext>Næste</button>\r\n                    </div>\r\n                  </form>\r\n                </mat-step>\r\n                <mat-step [stepControl]=\"thirdFormGroup\">\r\n                        <form [formGroup]=\"thirdFormGroup\">\r\n                          <ng-template matStepLabel>Tidspunkt</ng-template>\r\n                          <label>Dato for eventet</label> <br>\r\n                          <mat-form-field>\r\n                                <input [(ngModel)]=\"maxRegistrationDate\" [min]=\"minDate\" [max]=\"maxDate\" matTooltip=\"Klik på kalendar-ikonet for at vælge dato\" matInput [matDatepicker]=\"picker\" formControlName=\"eventDate\" placeholder=\"DD/MM/YYYY\">\r\n                                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #picker></mat-datepicker>\r\n                            </mat-form-field>\r\n\r\n                        <br> <label>Tidspunkt for eventet</label> <br>\r\n                        <mat-grid-list cols=\"2\" rowHeight=70px>\r\n                            <mat-grid-tile>\r\n                                <mat-form-field>\r\n                                    <mat-label>Start</mat-label>\r\n                                    <input matInput type=\"time\" formControlName=\"eventStartTime\" required>\r\n                                </mat-form-field>\r\n                            </mat-grid-tile>\r\n                            <mat-grid-tile>\r\n                                <mat-form-field>\r\n                                    <mat-label>Slut</mat-label>\r\n                                    <input matInput type=\"time\" formControlName=\"eventEndTime\" required>\r\n                                </mat-form-field>\r\n                            </mat-grid-tile>\r\n                        </mat-grid-list>\r\n\r\n                        <label>Tilmeldingsfrist</label> <br>\r\n                          <mat-form-field>\r\n                                <input [min]=\"minDate\" [max]=\"maxRegistrationDate\" matTooltip=\"Klik på kalendar-ikonet for at vælge dato\" matInput [matDatepicker]=\"picker2\" formControlName=\"eventDeadlineDate\" placeholder=\"DD/MM/YYYY\">\r\n                                <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #picker2></mat-datepicker>\r\n                            </mat-form-field>\r\n\r\n                            <br> <label>Tilmeldingsfrist</label> <br>\r\n                            <mat-form-field>\r\n                                <mat-label>Tid</mat-label>\r\n                                <input matInput type=\"time\" formControlName=\"eventDeadlineTime\" required> \r\n                            </mat-form-field>\r\n                                    \r\n\r\n                          <div>\r\n                            <button mat-button matStepperPrevious>Tilbage</button>\r\n                            <button mat-raised-button color=\"primary\" matStepperNext>Næste</button>\r\n                          </div>\r\n                        </form>\r\n                </mat-step>\r\n                <mat-step [stepControl]=\"fourthFormGroup\">\r\n                        <form [formGroup]=\"fourthFormGroup\">\r\n                          <ng-template matStepLabel>Pris & Betaling</ng-template>\r\n                          <mat-form-field>\r\n                            <mat-label>Pris</mat-label>\r\n                            <input type=\"number\" matInput placeholder=\"DKK,-\" formControlName=\"eventPrice\" required>\r\n                          </mat-form-field>\r\n\r\n                          <mat-form-field>\r\n                                <mat-label><fa name=\"tag\"></fa> Betalingsform</mat-label>\r\n                                <mat-select formControlName=\"eventPaymentOption\" name=\"eventPaymentOption\" placeholder=\"Vælg emne\" required>\r\n                                    <mat-option value=\"Ingen\">Ingen</mat-option>\r\n                                    <mat-option value=\"Kontant\">Kontant</mat-option>\r\n                                    <mat-option value=\"Mobilepay\">Mobilepay</mat-option>\r\n                                    <mat-option value=\"Bankoverførelse\">Bankoverførelse</mat-option>\r\n                                </mat-select> \r\n                        </mat-form-field>\r\n\r\n                        <mat-form-field>\r\n                                <mat-label><fa name=\"tag\"></fa> Hvornår betales der</mat-label>\r\n                                <mat-select (selectionChange)=\"onItemChange($event.value)\" name=\"eventPaymentDue\" formControlName=\"eventPaymentDue\" placeholder=\"Vælg emne\" required>\r\n                                    <mat-option value=\"Aldrig\">Aldrig</mat-option>\r\n                                    <mat-option value=\"Efter en gæst tilmelder sig\">Efter en gæst tilmelder sig</mat-option>\r\n                                    <mat-option value=\"Kontant ved ankomst på dagen\">Kontant ved ankomst på dagen</mat-option>\r\n                                    <mat-option value=\"Dato\">Dato</mat-option>\r\n                                </mat-select> \r\n                        </mat-form-field>\r\n\r\n                        <label *ngIf=\"isPaymentDeadlineDate\">Dato for betaling</label> <br>\r\n                          <mat-form-field *ngIf=\"isPaymentDeadlineDate\">\r\n                                <input matInput [matDatepicker]=\"picker\" formControlName=\"eventDate\" placeholder=\"Vælg en dato\">\r\n                                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #picker></mat-datepicker>\r\n                        </mat-form-field>\r\n\r\n                          <div>\r\n                            <button mat-button matStepperPrevious>Tilbage</button>\r\n                            <button mat-raised-button color=\"primary\" matStepperNext>Næste</button>\r\n                          </div>\r\n                        </form>\r\n                </mat-step>\r\n\r\n                <mat-step [stepControl]=\"fifthFormGroup\">\r\n                        <form [formGroup]=\"fifthFormGroup\">\r\n                          <ng-template matStepLabel>Billede</ng-template>\r\n                          <mat-card>\r\n                                <label>Fil</label>\r\n                                <input type=\"file\" formControlName=\"eventFile\"\r\n                                matTooltip=\"Dette felt er valgfrit\">\r\n                          </mat-card>\r\n                        </form>\r\n\r\n                        <div>\r\n                            <button mat-button matStepperPrevious>Tilbage</button>\r\n                            <button (click)=\"displayPreview()\" mat-raised-button color=\"primary\" matStepperNext>Næste</button>\r\n                        </div>\r\n                </mat-step>\r\n\r\n                <mat-step>\r\n                  <ng-template matStepLabel>Godkend</ng-template>\r\n                  Du er nu færdig.\r\n                  <mat-card *ngIf=\"isPreviewing\">\r\n                      <div *ngFor=\"let preview of previews\">\r\n                          <h5>{{preview.label}}</h5>\r\n                          <p>{{preview.body}}</p>\r\n                      </div>\r\n                  </mat-card>\r\n                  <div>\r\n                    <button mat-button matStepperPrevious>Tilbage</button>\r\n                    <button mat-button color=\"warn\" (click)=\"stepper.reset()\">Start forfra</button>\r\n                    <button (click)=\"onSubmitEvent()\" mat-raised-button color=\"primary\">Opret event</button>\r\n                  </div>\r\n                </mat-step>\r\n              </mat-horizontal-stepper>\r\n\r\n    \r\n</mat-card>\r\n\r\n\r\n<!--\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-sm-12 col-md-4 well well-sm\">\r\n                <legend><fa name=\"calendar\"></fa> Nyt Event</legend>\r\n                <form [formGroup]=\"eventForm\" action=\"#\" method=\"post\" class=\"form\" role=\"form\">\r\n\r\n                <input formControlName=\"eventName\" class=\"form-control\" name=\"eventName\" placeholder=\"Navnet på eventet\" type=\"text\" />\r\n                \r\n                <textarea formControlName=\"eventDescription\" name=\"message\" id=\"message\" class=\"form-control\" rows=\"9\" cols=\"25\" required=\"required\" placeholder=\"Beskrivelse\"></textarea>\r\n                \r\n                <label for=\"eventDate\">\r\n                Dato start</label>\r\n                <input formControlName=\"eventDate\" class=\"form-control\" name=\"eventDate\" type=\"date\"/>\r\n                \r\n                <label for=\"eventStartTime\">\r\n                  Tidspunkt\r\n                </label>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-4 col-md-6\">\r\n                        <input formControlName=\"eventStartTime\" type=\"time\" class=\"form-control\" name=\"eventStartTime\"/>\r\n                    </div>\r\n\r\n                    <div class=\"col-xs-4 col-md-6\">\r\n                        <input formControlName=\"eventEndTime\" type=\"time\" class=\"form-control\" name=\"eventEndTime\"/>\r\n                    </div>\r\n                </div>\r\n                \r\n                <label>Kategori</label>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12 col-md-12\">\r\n                        <select formControlName=\"eventCategory\" class=\"form-control\">\r\n                            <option value=\"Kategori\">Vælg</option>\r\n                            <option value=\"Kategori\">Hjemmehygge</option>\r\n                            <option value=\"Kategori\">Fest i privathjem</option>\r\n                            <option value=\"Kategori\">Fest uden for privaten</option>\r\n                            <option value=\"Kategori\">For børn</option>\r\n                            <option value=\"Kategori\">Spis sammen på restaurant</option>\r\n                            <option value=\"Kategori\">Biograf</option>\r\n                            <option value=\"Kategori\">Naturoplevelse</option>\r\n                            <option value=\"Kategori\">Ferie</option>\r\n                            <option value=\"Kategori\">Koncert</option>\r\n                            <option value=\"Kategori\">Kultur</option>\r\n                            <option value=\"Kategori\">Sport</option>\r\n                        </select>\r\n                    </div>    \r\n                </div>\r\n                \r\n                <label>Målgruppe</label>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12 col-md-12\">\r\n                      <div class=\"form-check form-check-inline\">\r\n                          <input formControlName=\"eventTargetGroup\" class=\"form-check-input\" type=\"radio\" id=\"childrenRadio1\" name=\"eventTargetGroup\" value=\"Kun med børn\" checked>\r\n                          <label class=\"form-check-label\" for=\"childrenRadio1\">Kun med børn</label>\r\n                      </div>\r\n                      <div class=\"form-check form-check-inline\">\r\n                          <input formControlName=\"eventTargetGroup\" class=\"form-check-input\" type=\"radio\" id=\"childrenRadio2\" name=\"eventTargetGroup\" value=\"Kun uden børn\">\r\n                          <label class=\"form-check-label\" for=\"childrenRadio2\">Kun uden børn</label>\r\n                      </div>\r\n                      <div class=\"form-check form-check-inline\">\r\n                          <input formControlName=\"eventTargetGroup\" class=\"form-check-input\" type=\"radio\" id=\"childrenRadio3\" name=\"eventTargetGroup\" value=\"Børn velkomne\">\r\n                          <label class=\"form-check-label\" for=\"childrenRadio3\">Børn velkomne</label>\r\n                      </div>\r\n                    </div>    \r\n                </div>\r\n                \r\n                <label>Aldersgruppe</label>\r\n                <div class=\"form-row\">\r\n                      <div class=\"form-group col-md-2\">\r\n                          \r\n                      </div>\r\n                      <div class=\"form-group col-md-4\">\r\n                          <label class=\"form-check-label\" for=\"minAge\">Fra</label>\r\n                          <input formControlName=\"eventMinAge\" type=\"number\" id=\"minAge\" name=\"minage\" placeholder=\"18\"/>\r\n                      </div>\r\n                      <div class=\"form-group col-md-4\">\r\n                          <label class=\"form-check-label\" for=\"maxAge\">Til</label>\r\n                          <input formControlName=\"eventMaxAge\" type=\"number\" id=\"maxAge\" name=\"maxage\" placeholder=\"99\"/>\r\n                      </div>\r\n                      <div class=\"form-group col-md-1\">\r\n                          \r\n                      </div>\r\n                </div>\r\n\r\n                <label for=\"eventFile\">\r\n                    Billede</label>\r\n                <div>\r\n                    <input formControlName=\"eventFile\" type=\"file\" id=\"eventFile\" name=\"myfile\"/>\r\n                </div>\r\n\r\n                <label for=\"eventDate\">Rating</label>\r\n                <input formControlName=\"eventHostRating\" class=\"form-control\" name=\"eventDate\" type=\"text\" placeholder=\"2.3\" readonly/>\r\n\r\n                <label>Antal gæster</label>\r\n                <div class=\"form-row\">\r\n                      <div class=\"form-group col-md-2\">\r\n                          \r\n                      </div>\r\n                      <div class=\"form-group col-md-4\">\r\n                          <label class=\"form-check-label\" for=\"minGuests\">Min</label>\r\n                          <input formControlName=\"eventMinGuests\" type=\"number\" id=\"minGuests\" name=\"minguests\" placeholder=\"2\"/>\r\n                      </div>\r\n                      <div class=\"form-group col-md-4\">\r\n                          <label class=\"form-check-label\" for=\"maxGuests\">Max</label>\r\n                          <input formControlName=\"eventMaxGuests\" type=\"number\" id=\"maxGuests\" name=\"maxguests\" placeholder=\"499\"/>\r\n                      </div>\r\n                      <div class=\"form-group col-md-1\">\r\n                          \r\n                      </div>\r\n                </div>\r\n\r\n                <label>Deltagerfordeling</label>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12 col-md-12\">\r\n                      <div class=\"form-check form-check-inline\">\r\n                          <input formControlName=\"eventGender\" class=\"form-check-input\" type=\"radio\" id=\"genderRadio1\" name=\"eventGender\" value=\"50/50\" checked>\r\n                          <label class=\"form-check-label\" for=\"genderRadio1\">50/50</label>\r\n                      </div>\r\n                      <div class=\"form-check form-check-inline\">\r\n                          <input formControlName=\"eventGender\" class=\"form-check-input\" type=\"radio\" id=\"genderRadio2\" name=\"eventGender\" value=\"Kun for mænd\">\r\n                          <label class=\"form-check-label\" for=\"genderRadio2\">Kun for mænd</label>\r\n                      </div>\r\n                      <div class=\"form-check form-check-inline\">\r\n                          <input formControlName=\"eventGender\" class=\"form-check-input\" type=\"radio\" id=\"genderRadio3\" name=\"eventGender\" value=\"Kun for kvinder\">\r\n                          <label class=\"form-check-label\" for=\"genderRadio3\">Kun for kvinder</label>\r\n                      </div>\r\n                    </div>    \r\n                </div>\r\n\r\n                <label>Tving på venteliste</label>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12 col-md-12\">\r\n                      <div class=\"form-check form-check-inline\">\r\n                          <input formControlName=\"eventQueue\" class=\"form-check-input\" type=\"radio\" id=\"queueYes\" name=\"eventQueue\" value=\"ja\">\r\n                          <label class=\"form-check-label\" for=\"queueYes\">Ja</label>\r\n                      </div>\r\n                      <div class=\"form-check form-check-inline\">\r\n                          <input formControlName=\"eventQueue\" class=\"form-check-input\" type=\"radio\" id=\"queueNo\" name=\"eventQueue\" value=\"nej\" checked>\r\n                          <label class=\"form-check-label\" for=\"queueNo\">Nej</label>\r\n                      </div>\r\n                    </div>    \r\n                </div>\r\n                \r\n\r\n                <div class=\"form-row\">\r\n                    <div class=\"col-md-6 mb-3\">\r\n                      <label for=\"addressRoad\">Vej</label>\r\n                      <input formControlName=\"eventLocationStreet\" type=\"text\" class=\"form-control\" id=\"addressRoad\" placeholder=\"Vej\" required>\r\n                      <div class=\"invalid-feedback\">\r\n                        Please provide a valid city.\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-3 mb-3\">\r\n                      <label for=\"addressCity\">By</label>\r\n                      <input formControlName=\"eventLocationCity\" type=\"text\" class=\"form-control\" id=\"addressCity\" placeholder=\"By\" readonly>\r\n                      <div class=\"invalid-feedback\">\r\n                        Please provide a valid state.\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-3 mb-3\">\r\n                      <label for=\"addressZip\">Post</label>\r\n                      <input formControlName=\"eventLocationZip\" type=\"text\" class=\"form-control\" id=\"addressZip\" placeholder=\"Post\" required>\r\n                      <div class=\"invalid-feedback\">\r\n                        Please provide a valid zip.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <label>Tilmeldingsfrist</label>\r\n                  <div class=\"form-row\">\r\n                        <div class=\"form-group col-md-2\">\r\n                            \r\n                        </div>\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label class=\"form-check-label\" for=\"deadlineDate\">Dato</label>\r\n                            <input formControlName=\"eventDeadlineDate\" type=\"date\" id=\"deadlineDate\" name=\"deadlinedate\"/>\r\n                        </div>\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label class=\"form-check-label\" for=\"deadlineTime\">Tid</label>\r\n                            <input formControlName=\"eventDeadlineTime\" type=\"time\" id=\"deadlineTime\" name=\"deadlinetime\"/>\r\n                        </div>\r\n                        <div class=\"form-group col-md-1\">\r\n                            \r\n                        </div>\r\n                  </div>\r\n\r\n\r\n                <label for=\"eventDate\">\r\n                    Pris per person i DKK</label>\r\n                <input formControlName=\"eventPrice\" class=\"form-control\" name=\"eventDate\" type=\"number\" placeholder=\"0\"/>\r\n\r\n                <label>Betalingsform</label>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-md-12\">\r\n                            <select formControlName=\"eventPaymentOption\" class=\"form-control\">\r\n                                <option value=\"Kategori\">Ingen</option>\r\n                                <option value=\"Kategori\">Kontant</option>\r\n                                <option value=\"Kategori\">Mobilepay</option>\r\n                                <option value=\"Kategori\">Bankoverførelse</option>\r\n                            </select>\r\n                        </div>    \r\n                    </div>\r\n\r\n                    <label>Betalingsfrist</label>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-md-12\">\r\n                            <select formControlName=\"eventPaymentDue\" class=\"form-control\">\r\n                                <option value=\"Kategori\">Ingen</option>\r\n                                <option value=\"Kategori\">Betaling ved tilmelding</option>\r\n                                <option value=\"Kategori\">Kontant ved ankomst</option>\r\n                                <option value=\"Kategori\">Dato</option>\r\n                            </select>\r\n                        </div>    \r\n                    </div>\r\n\r\n                <label for=\"eventPaymentDate\">\r\n                    Betalingsfrist</label>\r\n                <input formControlName=\"eventPaymentDate\" class=\"form-control\" name=\"eventDate\" type=\"date\"/>\r\n\r\n                <button (click)=\"onSubmitEvent(eventForm.value)\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\r\n                    Opret event</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    -->\r\n"

/***/ }),

/***/ "./src/app/create-new-event/create-new-event.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/create-new-event/create-new-event.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateNewEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewEventComponent", function() { return CreateNewEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _entity_event_event_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entity/event/event.model */ "./src/app/entity/event/event.model.ts");
/* harmony import */ var _entity_helper_EventAddress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entity/helper/EventAddress */ "./src/app/entity/helper/EventAddress.ts");
/* harmony import */ var _event_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event-firebase.service */ "./src/app/event-firebase.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _user_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user-firebase.service */ "./src/app/user-firebase.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _geo_coding_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../geo-coding-api.service */ "./src/app/geo-coding-api.service.ts");
/* harmony import */ var _wall_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../wall.service */ "./src/app/wall.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var CreateNewEventComponent = /** @class */ (function () {
    function CreateNewEventComponent(efbs, authService, ufbs, dialogRef, data, _formBuilder, geoAPI, ws) {
        this.efbs = efbs;
        this.authService = authService;
        this.ufbs = ufbs;
        this.dialogRef = dialogRef;
        this.data = data;
        this._formBuilder = _formBuilder;
        this.geoAPI = geoAPI;
        this.ws = ws;
        this.isLinear = false;
        this.isPaymentDeadlineDate = false;
        this.apiZipValue = "By";
        this.isPreviewing = false;
        this.previews = [];
        // Date validation
        this.minDate = new Date();
        this.maxDate = new Date(this.minDate.getFullYear() + 1, this.minDate.getMonth(), this.minDate.getDay());
        this.maxRegistrationDate = new Date();
    }
    CreateNewEventComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            eventName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            eventDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            eventLocationStreet: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            eventLocationCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            eventLocationZip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            eventCategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            eventTargetGroup: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            eventMinAge: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            eventMaxAge: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            eventMinGuests: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            eventMaxGuests: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            eventGender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            eventQueue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            eventDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            eventStartTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            eventEndTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            eventDeadlineDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            eventDeadlineTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.fourthFormGroup = this._formBuilder.group({
            eventPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            eventPaymentOption: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            eventPaymentDue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            eventPaymentDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.fifthFormGroup = this._formBuilder.group({
            eventFile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    CreateNewEventComponent.prototype.onItemChange = function (value) {
        if (value === "Dato") {
            this.isPaymentDeadlineDate = true;
        }
        else {
            this.isPaymentDeadlineDate = false;
        }
    };
    CreateNewEventComponent.prototype.onSubmitEvent = function () {
        var _this = this;
        var e = this.formDataToModel();
        this.efbs.insertEvent(e).then(function (thenableRef) {
            var key = thenableRef.path.pieces_[1];
            _this.ws.insertWall({ fk_event: key, posts: { 0: { message: "Hej og velkommen til dette event!", username: "_SYSTEM_" } } });
        });
        this.ufbs.updateUser({ numberOfEventsHosted: this.ufbs.getStorage().numberOfEventsHosted + 1 }, this.authService.afAuth.auth.currentUser.uid);
    };
    CreateNewEventComponent.prototype.formDataToModel = function () {
        var event = new _entity_event_event_model__WEBPACK_IMPORTED_MODULE_2__["Event"]({});
        event.name = this.firstFormGroup.value.eventName;
        event.address = new _entity_helper_EventAddress__WEBPACK_IMPORTED_MODULE_3__["EventAddress"](this.firstFormGroup.value.eventLocationStreet, this.apiZipValue, this.firstFormGroup.value.eventLocationZip);
        event.category = this.firstFormGroup.value.eventCategory;
        event.description = this.firstFormGroup.value.eventDescription;
        event.dateStart = this.thirdFormGroup.value.eventDate.toString();
        event.deadlineDate = this.thirdFormGroup.value.eventDeadlineDate.toString();
        event.deadlineTime = this.thirdFormGroup.value.eventDeadlineTime;
        event.timeEnd = this.thirdFormGroup.value.eventEndTime;
        event.timeStart = this.thirdFormGroup.value.eventStartTime;
        event.paymentDate = this.fourthFormGroup.value.eventPaymentDate.toString();
        event.paymentDue = this.fourthFormGroup.value.eventPaymentDue;
        event.paymentOption = this.fourthFormGroup.value.eventPaymentOption;
        event.price = this.fourthFormGroup.value.eventPrice;
        event.file = this.fifthFormGroup.value.eventFile;
        event.genderRatio = this.secondFormGroup.value.eventGender;
        event.hostRating = this.ufbs.getStorage().rating;
        event.maxAge = this.secondFormGroup.value.eventMaxAge;
        event.minAge = this.secondFormGroup.value.eventMinAge;
        event.maxGuests = this.secondFormGroup.value.eventMaxGuests;
        event.minGuests = this.secondFormGroup.value.eventMinGuests;
        event.queue = this.secondFormGroup.value.eventQueue;
        event.targetGroup = this.secondFormGroup.value.eventTargetGroup;
        event.participants = [{ username: this.ufbs.getStorage().username }];
        event.host = this.authService.afAuth.auth.currentUser.uid;
        if (event.hostRating === undefined) {
            event.hostRating = 0;
        }
        this.onNoClick();
        return event;
    };
    CreateNewEventComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CreateNewEventComponent.prototype.lookUpZip = function (event) {
        var _this = this;
        if (event.target.value.length > 3) {
            this.geoAPI.getZipFromCity(event.target.value).map(function (response) { return response.json(); }).subscribe(function (result) { return _this.apiZipValue = result.navn; });
        }
    };
    CreateNewEventComponent.prototype.displayPreview = function () {
        this.previews.push({ label: 'Titel', body: this.firstFormGroup.value.eventName });
        this.previews.push({ label: 'Beskrivelse', body: this.firstFormGroup.get('eventDescription').value });
        this.previews.push({ label: 'Kategori', body: this.firstFormGroup.get('eventCategory').value });
        this.previews.push({ label: 'Adresse', body: "\n                                                " + this.firstFormGroup.get('eventLocationStreet').value + ", \n                                                " + this.firstFormGroup.get('eventLocationZip').value + ", \n                                                " + this.apiZipValue + " " });
        this.previews.push({ label: 'Kønsfordeling', body: this.secondFormGroup.value.genderRatio });
        this.previews.push({ label: 'Børn', body: this.secondFormGroup.value.eventTargetGroup });
        this.previews.push({ label: 'Aldersgruppe', body: this.secondFormGroup.value.eventMinAge + " til " + this.secondFormGroup.value.eventMaxAge });
        this.previews.push({ label: 'Antal gæster', body: this.secondFormGroup.value.eventMinGuests + " til " + this.secondFormGroup.value.eventMaxGuests });
        this.previews.push({ label: 'Tving på venteliste', body: this.secondFormGroup.value.eventQueue });
        this.previews.push({ label: 'Dato for eventet', body: this.thirdFormGroup.value.eventDateStart });
        this.previews.push({ label: 'Tidspunkt for eventet', body: this.thirdFormGroup.value.eventTimeStart });
        this.previews.push({ label: 'Tilmeldingsfrist dato', body: this.thirdFormGroup.value.eventDeadlineDate });
        this.previews.push({ label: 'Tilmeldingsfrist tid', body: this.thirdFormGroup.value.eventDeadlineTime });
        this.previews.push({ label: 'Pris', body: this.fourthFormGroup.value.eventPrice });
        this.previews.push({ label: 'Betalingsform', body: this.fourthFormGroup.value.eventPaymentOption });
        this.previews.push({ label: 'Hvornår betales der', body: this.fourthFormGroup.value.eventPaymentDate });
        this.isPreviewing = true;
    };
    CreateNewEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'create-new-event',
            template: __webpack_require__(/*! ./create-new-event.component.html */ "./src/app/create-new-event/create-new-event.component.html"),
            styles: [__webpack_require__(/*! ./create-new-event.component.css */ "./src/app/create-new-event/create-new-event.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_event_firebase_service__WEBPACK_IMPORTED_MODULE_4__["EventFirebaseService"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _user_firebase_service__WEBPACK_IMPORTED_MODULE_6__["UserFirebaseService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _geo_coding_api_service__WEBPACK_IMPORTED_MODULE_8__["GeoCodingApiService"],
            _wall_service__WEBPACK_IMPORTED_MODULE_9__["WallService"]])
    ], CreateNewEventComponent);
    return CreateNewEventComponent;
}());



/***/ }),

/***/ "./src/app/create-wall-post/create-wall-post.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/create-wall-post/create-wall-post.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n    display: block;\r\n}\r\n\r\nbutton {\r\n    margin: 10px;\r\n}"

/***/ }),

/***/ "./src/app/create-wall-post/create-wall-post.component.html":
/*!******************************************************************!*\
  !*** ./src/app/create-wall-post/create-wall-post.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <form [formGroup]=\"wallPostForm\">\n    <mat-form-field>\n      <input formControlName=\"message\" matInput placeholder=\"Besked\">\n    </mat-form-field>\n  </form>\n  <button (click)=\"insertWallPost(wallPostForm.value)\" mat-raised-button color=\"primary\">Svar</button>"

/***/ }),

/***/ "./src/app/create-wall-post/create-wall-post.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/create-wall-post/create-wall-post.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateWallPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWallPostComponent", function() { return CreateWallPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _wall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wall.service */ "./src/app/wall.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _user_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-firebase.service */ "./src/app/user-firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var CreateWallPostComponent = /** @class */ (function () {
    function CreateWallPostComponent(dialogRef, data, _formBuilder, ws, authService, ufbs) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._formBuilder = _formBuilder;
        this.ws = ws;
        this.authService = authService;
        this.ufbs = ufbs;
    }
    CreateWallPostComponent.prototype.ngOnInit = function () {
        this.wallPostForm = this._formBuilder.group({
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    CreateWallPostComponent.prototype.insertWallPost = function (formData) {
        console.log(formData, this.data.fk_wall);
        this.ws.insertPost({ fk_id: this.authService.afAuth.auth.currentUser.uid, message: formData.message }, this.data.fk_wall);
        this.onNoClick();
    };
    CreateWallPostComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CreateWallPostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-wall-post',
            template: __webpack_require__(/*! ./create-wall-post.component.html */ "./src/app/create-wall-post/create-wall-post.component.html"),
            styles: [__webpack_require__(/*! ./create-wall-post.component.css */ "./src/app/create-wall-post/create-wall-post.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _wall_service__WEBPACK_IMPORTED_MODULE_3__["WallService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _user_firebase_service__WEBPACK_IMPORTED_MODULE_5__["UserFirebaseService"]])
    ], CreateWallPostComponent);
    return CreateWallPostComponent;
}());



/***/ }),

/***/ "./src/app/dummy-list/dummy-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/dummy-list/dummy-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\r\n    font-size: 0.8rem !important;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\nimg {\r\n    width: 50%;\r\n}\r\n\r\n.column {\r\n    display: table;\r\n}\r\n\r\nbutton {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/dummy-list/dummy-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/dummy-list/dummy-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n<ul>\r\n  <div *ngFor=\"let course of coursesObservable | async | slice:-6\">\r\n      <ngb-alert type=\"primary\" [dismissible]=\"false\">\r\n          <div class=\"row\">\r\n                <div class=\"column\">\r\n                    <img src=\"{{course.file}}\">\r\n                </div>\r\n                <div class=\"column\">\r\n                    <h3><a href=\"#\">{{course.name}}</a> </h3>\r\n                </div>\r\n          </div>\r\n      </ngb-alert> \r\n  </div>\r\n</ul>\r\n-->\r\n<mat-card *ngFor=\"let event of eventsObservable | async | slice:-4\">\r\n    <button mat-button color=\"primary\">{{event.name}}</button>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/dummy-list/dummy-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dummy-list/dummy-list.component.ts ***!
  \****************************************************/
/*! exports provided: DummyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DummyListComponent", function() { return DummyListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Firebase

var DummyListComponent = /** @class */ (function () {
    function DummyListComponent(db) {
        this.db = db;
    }
    DummyListComponent.prototype.ngOnInit = function () {
        this.eventsObservable = this.getDummy('/events');
    };
    DummyListComponent.prototype.getDummy = function (listPath) {
        return this.db.list(listPath).valueChanges();
    };
    DummyListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dummy-list',
            template: __webpack_require__(/*! ./dummy-list.component.html */ "./src/app/dummy-list/dummy-list.component.html"),
            styles: [__webpack_require__(/*! ./dummy-list.component.css */ "./src/app/dummy-list/dummy-list.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], DummyListComponent);
    return DummyListComponent;
}());



/***/ }),

/***/ "./src/app/entity/event/event.model.ts":
/*!*********************************************!*\
  !*** ./src/app/entity/event/event.model.ts ***!
  \*********************************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
var Event = /** @class */ (function () {
    function Event(obj) {
        obj && Object.assign(this, obj);
    }
    return Event;
}());



/***/ }),

/***/ "./src/app/entity/helper/EventAddress.ts":
/*!***********************************************!*\
  !*** ./src/app/entity/helper/EventAddress.ts ***!
  \***********************************************/
/*! exports provided: EventAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventAddress", function() { return EventAddress; });
var EventAddress = /** @class */ (function () {
    function EventAddress(street, city, zip) {
        this.street = street;
        this.city = city;
        this.zip = zip;
    }
    return EventAddress;
}());



/***/ }),

/***/ "./src/app/entity/helper/json-converter.ts":
/*!*************************************************!*\
  !*** ./src/app/entity/helper/json-converter.ts ***!
  \*************************************************/
/*! exports provided: JsonConverter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonConverter", function() { return JsonConverter; });
/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user/user */ "./src/app/entity/user/user.ts");
/* harmony import */ var _payment_payment_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../payment/payment.model */ "./src/app/entity/payment/payment.model.ts");
/* harmony import */ var _event_event_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event/event.model */ "./src/app/entity/event/event.model.ts");
/* harmony import */ var _rating_rating_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rating/rating.model */ "./src/app/entity/rating/rating.model.ts");




var JsonConverter = /** @class */ (function () {
    function JsonConverter() {
    }
    JsonConverter.prototype.convertJsonToUserObj = function (json) {
        var obj = JSON.parse(json);
        var user = new _user_user__WEBPACK_IMPORTED_MODULE_0__["User"](obj);
        /*
        let user = new User(obj.username, obj.email);
        user.address = obj.address;
        user.birthday = obj.birthday;
        user.children = obj.children;
        user.email = obj.email;
        user.firstName = obj.firstName;
        user.gender = obj.gender;
        user.lastName = obj.lastName;
        user.newsletterSetting = obj.newsletterSetting;
        user.numberOfChildren = obj.numberOfChildren;
        user.numberOfEventsAttended = obj.numberOfEventsAttended;
        user.numberOfEventsHosted = obj.numberOfEventsHosted;
        user.phone = obj.phone;
        user.rating = obj.rating;
        user.subscribed_until = obj.subscribed_until; */
        return user;
    };
    JsonConverter.prototype.convertJsonToPaymentObj = function (json) {
        var obj = JSON.parse(json);
        var payment = new _payment_payment_model__WEBPACK_IMPORTED_MODULE_1__["Payment"](obj.user, obj.amount, obj.date, obj.api_response, obj.subscription_period);
        return payment;
    };
    JsonConverter.prototype.convertJsonToEventObj = function (json) {
        var obj = JSON.parse(json);
        var event = Object.assign(obj, _event_event_model__WEBPACK_IMPORTED_MODULE_2__["Event"]);
        /*
        let event = new Event();
        event.key = obj.key;
        event.address = obj.address;
        event.category = obj.category;
        event.dateStart = obj.dateStart;
        event.deadlineDate = obj.deadlineDate;
        event.deadlineTime = obj.deadlineTime;
        event.description = obj.description;
        event.file = obj.file;
        event.genderRatio = obj.genderRatio;
        event.hostRating = obj.hostRating;
        event.maxAge = obj.maxAge;
        event.maxGuests = obj.maxGuests;
        event.minAge = obj.minAge;
        event.minGuests = obj.minGuests;
        event.name = obj.name;
        event.paymentDate = obj.paymentDate;
        event.paymentDue = obj.paymentDue;
        event.paymentOption = obj.paymentOption;
        event.price = obj.price;
        event.queue = obj.queue;
        event.targetGroup = obj.targetGroup;
        event.timeEnd = obj.timeEnd;
        event.timeStart = obj.timeStart;
        event.participants = obj.participants;
        event.host = obj.host;*/
        return event;
    };
    JsonConverter.prototype.convertJsonToRatingObj = function (json) {
        var obj = JSON.parse(json);
        var rating = Object.assign(obj, _rating_rating_model__WEBPACK_IMPORTED_MODULE_3__["Rating"]);
        return rating;
    };
    return JsonConverter;
}());



/***/ }),

/***/ "./src/app/entity/payment/payment.model.ts":
/*!*************************************************!*\
  !*** ./src/app/entity/payment/payment.model.ts ***!
  \*************************************************/
/*! exports provided: Payment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Payment", function() { return Payment; });
var Payment = /** @class */ (function () {
    function Payment(user, amount, date, api_response, subscription_period) {
        this.user = user;
        this.amount = amount;
        this.date = date;
        this.api_response = api_response;
        this.subscription_period = subscription_period;
    }
    return Payment;
}());



/***/ }),

/***/ "./src/app/entity/rating/rating.model.ts":
/*!***********************************************!*\
  !*** ./src/app/entity/rating/rating.model.ts ***!
  \***********************************************/
/*! exports provided: Rating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rating", function() { return Rating; });
var Rating = /** @class */ (function () {
    function Rating() {
    }
    return Rating;
}());



/***/ }),

/***/ "./src/app/entity/user/role.model.ts":
/*!*******************************************!*\
  !*** ./src/app/entity/user/role.model.ts ***!
  \*******************************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role = /** @class */ (function () {
    function Role(obj) {
        obj && Object.assign(this, obj);
    }
    return Role;
}());



/***/ }),

/***/ "./src/app/entity/user/user.ts":
/*!*************************************!*\
  !*** ./src/app/entity/user/user.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(obj) {
        obj && Object.assign(this, obj);
    }
    return User;
}());

var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
})(Gender || (Gender = {}));


/***/ }),

/***/ "./src/app/entity/wall/wall-post.model.ts":
/*!************************************************!*\
  !*** ./src/app/entity/wall/wall-post.model.ts ***!
  \************************************************/
/*! exports provided: WallPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallPost", function() { return WallPost; });
var WallPost = /** @class */ (function () {
    function WallPost(obj) {
        obj && Object.assign(this, obj);
    }
    return WallPost;
}());



/***/ }),

/***/ "./src/app/entity/wall/wall.model.ts":
/*!*******************************************!*\
  !*** ./src/app/entity/wall/wall.model.ts ***!
  \*******************************************/
/*! exports provided: Wall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wall", function() { return Wall; });
var Wall = /** @class */ (function () {
    function Wall(obj) {
        obj && Object.assign(this, obj);
        this.posts = [];
    }
    return Wall;
}());



/***/ }),

/***/ "./src/app/event-control-menu/event-control-menu.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/event-control-menu/event-control-menu.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n    margin: 10px;\r\n}\r\n\r\nmat-card {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n    .desktop {\r\n        display: none;\r\n    }\r\n\r\n    mat-card {\r\n        width: 100%;\r\n        margin: 0;\r\n    }\r\n}\r\n\r\n.lesserBtn {\r\n    font-size: 12px !important;\r\n}"

/***/ }),

/***/ "./src/app/event-control-menu/event-control-menu.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/event-control-menu/event-control-menu.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n      <mat-card>\r\n          <button (click)=\"openDialog()\" mat-raised-button color=\"primary\">Nyt Event</button>\r\n\r\n          <button matTooltip=\"Events som du arrangerer\" routerLink=\"/my-events\" mat-raised-button color=\"accent\">Mine Events</button>\r\n    \r\n          <button class=\"lesserBtn\" matTooltip=\"En liste af de events, som du er tilmeldt\" routerLink=\"/event-history\" mat-raised-button>Tilmeldte Events</button>\r\n\r\n          <button class=\"lesserBtn\" matTooltip=\"Events, som du har deltaget i\" routerLink=\"/attended-events\" mat-raised-button>Tidligere Events</button>\r\n      </mat-card>\r\n"

/***/ }),

/***/ "./src/app/event-control-menu/event-control-menu.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/event-control-menu/event-control-menu.component.ts ***!
  \********************************************************************/
/*! exports provided: EventControlMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventControlMenuComponent", function() { return EventControlMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _create_new_event_create_new_event_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create-new-event/create-new-event.component */ "./src/app/create-new-event/create-new-event.component.ts");
/* harmony import */ var _mobile_detector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mobile-detector.service */ "./src/app/mobile-detector.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventControlMenuComponent = /** @class */ (function () {
    function EventControlMenuComponent(dialog, mds) {
        this.dialog = dialog;
        this.mds = mds;
        this.dialogWidth = screen.width / 1.25 + "px";
        this.dialogHeight = screen.height / 1.75 + "px";
    }
    EventControlMenuComponent.prototype.ngOnInit = function () {
        console.log(this.dialogHeight, this.dialogWidth);
    };
    EventControlMenuComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_create_new_event_create_new_event_component__WEBPACK_IMPORTED_MODULE_2__["CreateNewEventComponent"], {
            width: this.dialogWidth,
            height: this.dialogHeight,
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    EventControlMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'event-control-menu',
            template: __webpack_require__(/*! ./event-control-menu.component.html */ "./src/app/event-control-menu/event-control-menu.component.html"),
            styles: [__webpack_require__(/*! ./event-control-menu.component.css */ "./src/app/event-control-menu/event-control-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _mobile_detector_service__WEBPACK_IMPORTED_MODULE_3__["MobileDetectorService"]])
    ], EventControlMenuComponent);
    return EventControlMenuComponent;
}());



/***/ }),

/***/ "./src/app/event-filter/event-filter.component.css":
/*!*********************************************************!*\
  !*** ./src/app/event-filter/event-filter.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\r\n    text-align: center;\r\n}\r\n\r\nmat-card {\r\n    color: black;\r\n}\r\n\r\nlabel {\r\n    margin: 10px;\r\n}"

/***/ }),

/***/ "./src/app/event-filter/event-filter.component.html":
/*!**********************************************************!*\
  !*** ./src/app/event-filter/event-filter.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css\" rel=\"stylesheet\">\r\n<script src=\"https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js\"></script>\r\n\r\n<mat-card>\r\n    <h2>Filtre</h2>\r\n    <div>\r\n    <label>Afstand</label>\r\n    <mat-slider (change)=\"onDistanceChange()\" color=\"primary\" min=\"10\" max=\"100\" step=\"10\" [(ngModel)]=\"slider1Val\"></mat-slider>\r\n    <label id=\"distKM\">{{ slider1Val }} KM</label>\r\n    </div>\r\n\r\n    <div>\r\n    <label>Børn</label> \r\n    <mat-slide-toggle (change)=\"onChildrenChange()\" color=\"primary\" [(ngModel)]=\"kidsAllowed\">{{kidsAllowed | activeBlocked}}</mat-slide-toggle>\r\n    </div>\r\n\r\n    <div>\r\n    <label>Deltager køn</label>\r\n    <mat-form-field>\r\n            <mat-select (selectionChange)=\"onOptionChange($event.value)\" placeholder=\"Fordeling\">\r\n              <mat-option>Ingen</mat-option>\r\n              <mat-option *ngFor=\"let option of options\" [value]=\"option.value\">\r\n                {{option.displayValue}}\r\n              </mat-option>\r\n            </mat-select>\r\n    </mat-form-field>\r\n    </div>\r\n    <div>\r\n    <label>Kategori</label>\r\n    <mat-form-field>\r\n            <mat-select (selectionChange)=\"onCategoryChange($event.value)\" placeholder=\"Kategori\">\r\n              <mat-option>Ingen</mat-option>\r\n              <mat-option *ngFor=\"let category of categories\" [value]=\"category.value\">\r\n                {{category.displayValue}}\r\n              </mat-option>\r\n            </mat-select>\r\n    </mat-form-field>\r\n    </div>\r\n\r\n    <mat-card-actions>\r\n      <button (click)=\"clear()\" routerLink=\"/events\" mat-button color=\"warn\">Fjern filtre</button>\r\n    </mat-card-actions>\r\n\r\n</mat-card>\r\n\r\n<script>\r\n  function updateTextInput(val) {\r\n          $(\"#distKM\").html($(\"#slider1\").val + \" KM\"); \r\n        }\r\n</script>"

/***/ }),

/***/ "./src/app/event-filter/event-filter.component.ts":
/*!********************************************************!*\
  !*** ./src/app/event-filter/event-filter.component.ts ***!
  \********************************************************/
/*! exports provided: EventFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFilterComponent", function() { return EventFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _table_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../table-filter.service */ "./src/app/table-filter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventFilterComponent = /** @class */ (function () {
    function EventFilterComponent(tbs) {
        this.tbs = tbs;
        this.slider1Val = 100;
        this.kidsAllowed = false;
        this.options = [
            { value: 'Kun for mænd', displayValue: 'Kun for mænd' },
            { value: 'Kun for kvinder', displayValue: 'Kun for kvinder' },
            { value: '50/50', displayValue: '50/50' }
        ];
        this.categories = [
            { value: 'Hjemmehygge', displayValue: 'Hjemmehygge' },
            { value: 'Fest i privathjem', displayValue: 'Fest i privathjem' },
            { value: 'Fest uden for privaten', displayValue: 'Fest uden for privaten' },
            { value: 'For børn', displayValue: 'For børn' },
            { value: 'Spis sammen på restuarant', displayValue: 'Spis sammen på restuarant' },
            { value: 'Biograf', displayValue: 'Biograf' },
            { value: 'Naturoplevelse', displayValue: 'Naturoplevelse' },
            { value: 'Ferie', displayValue: 'Ferie' },
            { value: 'Koncert', displayValue: 'Koncert' },
            { value: 'Kultur', displayValue: 'Kultur' },
            { value: 'Sport', displayValue: 'Sport' },
        ];
    }
    EventFilterComponent.prototype.ngOnInit = function () {
    };
    EventFilterComponent.prototype.onDistanceChange = function () {
        if (this.slider1Val != 0) {
            this.tbs.onDistanceChange(this.slider1Val);
        }
    };
    EventFilterComponent.prototype.onChildrenChange = function () {
        this.tbs.onChildrenChange(this.kidsAllowed);
    };
    EventFilterComponent.prototype.onOptionChange = function (value) {
        if (value != undefined) {
            this.tbs.onGenderChange(value);
        }
    };
    EventFilterComponent.prototype.onCategoryChange = function (value) {
        this.tbs.onCategoryChange(value);
    };
    EventFilterComponent.prototype.clear = function () {
        this.tbs.clearFilters();
    };
    EventFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'event-filter',
            template: __webpack_require__(/*! ./event-filter.component.html */ "./src/app/event-filter/event-filter.component.html"),
            styles: [__webpack_require__(/*! ./event-filter.component.css */ "./src/app/event-filter/event-filter.component.css")]
        }),
        __metadata("design:paramtypes", [_table_filter_service__WEBPACK_IMPORTED_MODULE_1__["TableFilterService"]])
    ], EventFilterComponent);
    return EventFilterComponent;
}());



/***/ }),

/***/ "./src/app/event-firebase.service.ts":
/*!*******************************************!*\
  !*** ./src/app/event-firebase.service.ts ***!
  \*******************************************/
/*! exports provided: EventFirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFirebaseService", function() { return EventFirebaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _node_modules_angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _entity_helper_json_converter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entity/helper/json-converter */ "./src/app/entity/helper/json-converter.ts");
/* harmony import */ var _wall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wall.service */ "./src/app/wall.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventFirebaseService = /** @class */ (function () {
    function EventFirebaseService(afAuth, db, ws) {
        this.afAuth = afAuth;
        this.db = db;
        this.ws = ws;
        this.dbPath = '/events/';
        this.jsonConverter = new _entity_helper_json_converter__WEBPACK_IMPORTED_MODULE_3__["JsonConverter"]();
    }
    EventFirebaseService.prototype.getList = function () {
        return this.db.list(this.dbPath).snapshotChanges().map(function (events) {
            return events.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    EventFirebaseService.prototype.getEventByKey = function (key) {
        var itemPath = this.dbPath + key;
        return this.db.object(itemPath);
    };
    EventFirebaseService.prototype.getEventsByHost = function (id) {
        var path = this.dbPath;
        return this.db.list(path, function (ref) { return ref.orderByChild('host').equalTo(id); }).snapshotChanges().map(function (events) {
            return events.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    EventFirebaseService.prototype.insertEvent = function (event) {
        return this.db.list(this.dbPath).push(event);
    };
    EventFirebaseService.prototype.updateEvent = function (key, e) {
        console.log(key, e);
        var eventsRef = this.db.object(this.dbPath + key);
        return eventsRef.update(e);
    };
    EventFirebaseService.prototype.deleteEvent = function (key) {
        var _this = this;
        var itemsRef = this.db.list(this.dbPath);
        itemsRef.remove(key).then(function () {
            _this.ws.getWallByKey(key).subscribe(function (snapshots) {
                snapshots.forEach(function (snapshot) {
                    _this.ws.deleteWall(snapshot.key);
                });
            });
        });
    };
    EventFirebaseService.prototype.joinEvent = function (key, un) {
        var itemRef = this.db.list(this.dbPath + key + '/participants/');
        itemRef.push({ username: un });
    };
    EventFirebaseService.prototype.leaveEvent = function (key, pKey) {
        var itemRef = this.db.object(this.dbPath + "/" + key + "/participants/" + pKey);
        itemRef.remove();
    };
    EventFirebaseService.prototype.generateNewHashKey = function (username, title) {
        var date = new Date();
        var stringify = username + "_" + date.getHours() + ":" + this.addZeroesToTime(date.getMinutes()) + "_" + title;
        return stringify;
    };
    EventFirebaseService.prototype.addZeroesToTime = function (input) {
        return input < 10 ? "0" + input : input;
    };
    EventFirebaseService.prototype.objToJSON = function (eventObject) {
        return JSON.parse(JSON.stringify(eventObject));
    };
    EventFirebaseService.prototype.jsonToObj = function (json) {
        return this.jsonConverter.convertJsonToEventObj(json);
    };
    EventFirebaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _node_modules_angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _wall_service__WEBPACK_IMPORTED_MODULE_4__["WallService"]])
    ], EventFirebaseService);
    return EventFirebaseService;
}());



/***/ }),

/***/ "./src/app/event-list/event-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/event-list/event-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n    width: 100%;\r\n}\r\n\r\nmat-paginator {\r\n    margin-bottom: 20px;\r\n}\r\n\r\ntd {\r\n    font-size: 12px;\r\n}\r\n\r\n#search {\r\n    background-color: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n  }\r\n\r\n.hide {\r\n    visibility: hidden;\r\n}\r\n\r\nh2 {\r\n    color:snow;\r\n    text-align: center;\r\n}\r\n\r\n.btnLabel {\r\n    width:100%;\r\n    height: 60px;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.mobile {\r\n    display: none;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .mobile {\r\n        display: block;\r\n        width: 100%;\r\n    }\r\n\r\n    .desktop {\r\n        display:none;\r\n    }\r\n\r\n    #search {\r\n        background-color: #fff;\r\n        padding: 20px;\r\n        margin-bottom: 0px;\r\n    }\r\n\r\n    mat-paginator {\r\n        margin-bottom: 0px;\r\n    }\r\n}\r\n\r\ntr:hover td {\r\n    background:#3f51b51c;\r\n    cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/event-list/event-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/event-list/event-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button *ngIf=\"isMobile\" class=\"btnLabel\" mat-raised-button color=\"primary\">Events</button>\r\n  <mat-form-field id=\"search\" color=\"primary\">\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Søg\">\r\n  </mat-form-field>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n\r\n    <table *ngIf=\"!isMobile\" mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n        <!--- Note that these columns can be defined in any order.\r\n              The actual rendered columns are set as a property on the row definition\" -->\r\n      \r\n        <!-- Title Column -->\r\n        <ng-container matColumnDef=\"name\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Event </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n        </ng-container>\r\n      \r\n        <!-- City Column -->\r\n        <ng-container matColumnDef=\"address\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> By </th>\r\n          <td mat-cell *matCellDef=\"let element\">{{element.address.street}}, {{element.address.city}}, {{element.address.zip}}</td>\r\n        </ng-container>\r\n\r\n        <!-- Category Column -->\r\n        <ng-container matColumnDef=\"category\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Kategori </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.category}} </td>\r\n        </ng-container>\r\n      \r\n        <!-- Distance Column -->\r\n        <ng-container matColumnDef=\"distance\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Afstand </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{10+10}} KM </td>\r\n        </ng-container>\r\n      \r\n        <!-- Gender Column -->\r\n        <ng-container matColumnDef=\"genderRatio\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Kønsfordeling </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.genderRatio}} </td>\r\n        </ng-container>\r\n      \r\n        <!-- Children Column -->\r\n        <ng-container matColumnDef=\"targetGroup\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Børn </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.targetGroup}} </td>\r\n        </ng-container>\r\n      \r\n        <!-- Participants Column -->\r\n        <ng-container matColumnDef=\"available\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Pladser </th>\r\n          <td mat-cell *matCellDef=\"let element\"> Ledig </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"dateStart\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Dato</th>\r\n            <td mat-cell *matCellDef=\"let element\">{{element.dateStart | date:'dd/MM/yyyy'}}</td>\r\n          </ng-container>\r\n      \r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"onViewClick(row)\"></tr>\r\n      </table>\r\n\r\n    <table *ngIf=\"isMobile\" mat-table [dataSource]=\"dataSourceMobile\" matSort class=\"mat-elevation-z8\">\r\n\r\n          <!--- Note that these columns can be defined in any order.\r\n                The actual rendered columns are set as a property on the row definition\" -->\r\n        \r\n          <!-- Title Column -->\r\n          <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Event </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n          </ng-container>\r\n        \r\n          <!-- City Column -->\r\n          <ng-container matColumnDef=\"address\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> By </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.address}} </td>\r\n          </ng-container>\r\n        \r\n          <!-- Participants Column -->\r\n          <ng-container matColumnDef=\"available\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Pladser </th>\r\n            <td mat-cell *matCellDef=\"let element\"> Ledig </td>\r\n          </ng-container>\r\n        \r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumnsMobile\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumnsMobile;\" (click)=\"onViewClick(row)\"></tr>\r\n      </table>\r\n\r\n  <mat-paginator *ngIf=\"!isMobile\" [pageSizeOptions]=\"[10, 15, 20, 50, 100]\"></mat-paginator>\r\n  <mat-paginator *ngIf=\"isMobile\" [pageSizeOptions]=\"[10, 15, 20, 50, 100]\"></mat-paginator>\r\n  \r\n</div>\r\n\r\n<ngx-spinner\r\nbdColor = \"rgba(51, 51, 51, 0.8)\"\r\nsize = \"large\"\r\ncolor = \"#fff\"\r\ntype = \"square-loader\">\r\n</ngx-spinner>\r\n\r\n"

/***/ }),

/***/ "./src/app/event-list/event-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/event-list/event-list.component.ts ***!
  \****************************************************/
/*! exports provided: EventListComponent, EventDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListComponent", function() { return EventListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDataSource", function() { return EventDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _event_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event-firebase.service */ "./src/app/event-firebase.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _mobile_detector_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mobile-detector.service */ "./src/app/mobile-detector.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _table_filter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../table-filter.service */ "./src/app/table-filter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EventListComponent = /** @class */ (function () {
    function EventListComponent(efbs, mds, spinner, tfs, router, toast) {
        var _this = this;
        this.efbs = efbs;
        this.mds = mds;
        this.spinner = spinner;
        this.tfs = tfs;
        this.router = router;
        this.toast = toast;
        this.isMobile = false;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.displayedColumns = ['name', 'address', 'category', 'distance', 'genderRatio', 'targetGroup', 'available', 'dateStart'];
        this.dataSourceMobile = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.displayedColumnsMobile = ['name', 'address', 'available', 'dateStart'];
        this.events = [];
        this.efbs.getList().subscribe(function (res) {
            _this.events = res;
            _this.events.sort(_this.compareObjects);
            // this.events.splice(0, 1);
            if (_this.events.length > 0) {
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.events);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
                _this.dataSourceMobile = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.events);
                _this.dataSourceMobile.paginator = _this.paginator;
                _this.dataSourceMobile.sort = _this.sort;
                _this.spinner.hide();
            }
        }, function (error) {
            console.log("Something went wrong :(");
        });
        this.subscription = this.tfs.getEvent().subscribe(function (filter) { _this.applyFilter(filter); });
    }
    EventListComponent.prototype.ngOnInit = function () {
        this.spinner.show();
        this.isMobile = this.mds.check();
    };
    EventListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.events.length < 1) {
                _this.spinner.hide();
                _this.toast.info("Der er ingen events oprettet", "Info");
            }
        }, 3000);
    };
    EventListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.dataSourceMobile.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
            this.dataSourceMobile.paginator.firstPage();
        }
    };
    EventListComponent.prototype.onViewClick = function (element) {
        var e = element;
        var navigationExtras = {
            queryParams: {
                "key": e.key
            }
        };
        this.router.navigate(['/view-event'], navigationExtras);
    };
    EventListComponent.prototype.compareObjects = function (a, b) {
        if (a.dateStart < b.dateStart)
            return -1;
        if (a.dateStart > b.dateStart)
            return 1;
        return 0;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], EventListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], EventListComponent.prototype, "sort", void 0);
    EventListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'event-list',
            template: __webpack_require__(/*! ./event-list.component.html */ "./src/app/event-list/event-list.component.html"),
            styles: [__webpack_require__(/*! ./event-list.component.css */ "./src/app/event-list/event-list.component.css")]
        }),
        __metadata("design:paramtypes", [_event_firebase_service__WEBPACK_IMPORTED_MODULE_1__["EventFirebaseService"],
            _mobile_detector_service__WEBPACK_IMPORTED_MODULE_4__["MobileDetectorService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _table_filter_service__WEBPACK_IMPORTED_MODULE_6__["TableFilterService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]])
    ], EventListComponent);
    return EventListComponent;
}());

var EventDataSource = /** @class */ (function (_super) {
    __extends(EventDataSource, _super);
    function EventDataSource(efbs) {
        var _this = _super.call(this) || this;
        _this.efbs = efbs;
        return _this;
    }
    EventDataSource.prototype.connect = function () {
        return this.efbs.getList();
    };
    EventDataSource.prototype.disconnect = function () { };
    return EventDataSource;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["DataSource"]));



/***/ }),

/***/ "./src/app/events/events.component.css":
/*!*********************************************!*\
  !*** ./src/app/events/events.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "event-control-menu {\r\n    top: 0;\r\n    width: 100%;\r\n}\r\n\r\nh1 {\r\n    color: snow;\r\n    text-align: center;\r\n}\r\n\r\nevent-filter {\r\n    width: 100%;\r\n}\r\n\r\n.btnLabel {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/events/events.component.html":
/*!**********************************************!*\
  !*** ./src/app/events/events.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<h1 *ngIf=\"!isMobile\">Events</h1>\r\n        <div *ngIf=\"!isMobile\" class=\"row desktop\">\r\n                <div class=\"col-4\">\r\n                    <event-control-menu></event-control-menu>\r\n                    <event-filter></event-filter>\r\n                </div>\r\n                <div class=\"col-8\">\r\n                    <event-list></event-list>\r\n                </div>\r\n        </div>\r\n            \r\n        <div *ngIf=\"isMobile\" class=\"row mobile\">\r\n                <div class=\"container\">\r\n\r\n                        <div class=\"row\">\r\n                                <event-control-menu></event-control-menu>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                                <event-filter></event-filter>\r\n                        </div>\r\n\r\n            \r\n                        <div class=\"row\">\r\n                            <event-list></event-list>\r\n                        </div>\r\n                </div>\r\n        </div>\r\n"

/***/ }),

/***/ "./src/app/events/events.component.ts":
/*!********************************************!*\
  !*** ./src/app/events/events.component.ts ***!
  \********************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventsComponent = /** @class */ (function () {
    function EventsComponent() {
        this.messages = [
            { msg: "Her kan du finde alle events som brugerne er arrangøre af netop nu!", title: "Tip" },
            { msg: "Du kan filtrere ved brug af vinduet: filter til venstre eller ved brug af søgefeltet", title: "Tip" },
            { msg: "Brug knapperne til at gå til dine egne events, oprette et nyt eller fjerne filtre", title: "Tip" }
        ];
        this.isMobile = false;
    }
    EventsComponent.prototype.ngOnInit = function () {
        if (window.screen.width <= 600) {
            this.isMobile = true;
        }
    };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/events/events.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/feedback/feedback.component.css":
/*!*************************************************!*\
  !*** ./src/app/feedback/feedback.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    margin: 20px;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n}\r\n\r\nbutton {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    width: 50%;\r\n}\r\n\r\nmat-form-field {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/feedback/feedback.component.html":
/*!**************************************************!*\
  !*** ./src/app/feedback/feedback.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<landing-page-header *ngIf=\"!displayNavbar\"></landing-page-header>\r\n<app-navbar *ngIf=\"displayNavbar\"></app-navbar>\r\n\r\n<mat-card>\r\n    <h1>Del din historie eller kom med et forslag</h1>\r\n    <mat-card>\r\n        <form id=\"formRight\" [formGroup]=\"feedbackForm\">\r\n            <mat-form-field>\r\n                <mat-label for=\"name\">Navn</mat-label>\r\n                    <input matInput formControlName=\"name\" placeholder=\"Navn\" required>\r\n            </mat-form-field>\r\n                        \r\n            <mat-form-field>\r\n                <mat-label for=\"email\">Email</mat-label>\r\n                    <input formControlName=\"email\" matInput placeholder=\"Email\" required>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <mat-label>Beskedstype</mat-label>\r\n                        <mat-select (selectionChange)=\"onItemChange($event.value)\" formControlName=\"type\" placeholder=\"Vælg beskedstype\" required>\r\n                            <mat-option value=\"Forslag\">Forslag</mat-option>\r\n                            <mat-option value=\"Del din historie\">Del din historie</mat-option>\r\n                        </mat-select>\r\n                </mat-form-field>\r\n\r\n            <mat-form-field *ngIf=\"isProposal\">\r\n                <mat-label>Emne</mat-label>\r\n                    <mat-select formControlName=\"subject\" placeholder=\"Vælg emne\">\r\n                        <mat-option value=\"option\">Andet</mat-option>\r\n                        <mat-option value=\"option\">Design</mat-option>\r\n                        <mat-option value=\"option\">Brugeroplevelse</mat-option>\r\n                        <mat-option value=\"option\">Ny feature</mat-option>\r\n                        <mat-option value=\"option\">Kontrol</mat-option>\r\n                        <mat-option value=\"option\">Pris</mat-option>\r\n                        <mat-option value=\"option\">Belønninger</mat-option>\r\n                        <mat-option value=\"option\">Straf</mat-option>\r\n                    </mat-select>\r\n            </mat-form-field>\r\n                        \r\n            <mat-form-field>\r\n                <mat-label for=\"message\">{{btnText}}</mat-label>\r\n                    <textarea matInput formControlName=\"details\" rows=\"8\" required\r\n                    placeholder=\"Besked...\"></textarea>\r\n            </mat-form-field>\r\n            <button type=\"submit\" mat-raised-button color=\"primary\">{{btnText}}</button>\r\n\r\n        </form>\r\n    </mat-card>\r\n\r\n</mat-card>"

/***/ }),

/***/ "./src/app/feedback/feedback.component.ts":
/*!************************************************!*\
  !*** ./src/app/feedback/feedback.component.ts ***!
  \************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mobile_detector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mobile-detector.service */ "./src/app/mobile-detector.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(mds, authService) {
        this.mds = mds;
        this.authService = authService;
        this.isMobile = false;
        this.isProposal = false;
        this.btnText = "Del min historie";
        this.displayNavbar = false;
        this.feedbackForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            details: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isMobile = this.mds.check();
        this.authService.afAuth.auth.onAuthStateChanged(function (user) {
            if (user) {
                _this.displayNavbar = true;
            }
        });
    };
    FeedbackComponent.prototype.onItemChange = function (value) {
        if (value === "Forslag") {
            this.btnText = "Foreslå";
            this.isProposal = true;
        }
        else {
            this.btnText = "Den min historie";
            this.isProposal = false;
        }
    };
    FeedbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.component.html */ "./src/app/feedback/feedback.component.html"),
            styles: [__webpack_require__(/*! ./feedback.component.css */ "./src/app/feedback/feedback.component.css")]
        }),
        __metadata("design:paramtypes", [_mobile_detector_service__WEBPACK_IMPORTED_MODULE_2__["MobileDetectorService"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    background-color: #1a1a1a;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n    color: snow;\r\n\ttext-align: center;\r\n\tmargin-top: 20px;\r\n}\r\n\r\nmat-icon {\r\n\tmargin: 10px;\r\n}\r\n\r\nimg {\r\n\t-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */\r\n\tfilter: grayscale(100%);\r\n\t-webkit-transform: scale(0.75);\r\n\t        transform: scale(0.75);\r\n}\r\n\r\n.empty {\r\n    visibility: hidden;\r\n}\r\n\r\na {\r\n    color: snow;\r\n    text-decoration: none;\r\n}\r\n\r\nh4 {\r\n    margin: 20px;\r\n}\r\n\r\nli {\r\n    margin: 5px;\r\n}\r\n\r\n.signature {\r\n    margin-top: 20px;\r\n}\r\n\r\n/* Creative link effects */\r\n\r\n*,\r\n*:after,\r\n*::before {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tfont-family: 'Raleway', sans-serif;\r\n}\r\n\r\nnav a {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tmargin: 15px 25px;\r\n\toutline: none;\r\n\tcolor: #fff;\r\n\ttext-decoration: none;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1px;\r\n\tfont-weight: 400;\r\n\ttext-shadow: 0 0 1px rgba(255,255,255,0.3);\r\n\tfont-size: 1.35em;\r\n}\r\n\r\nnav a:hover,\r\nnav a:focus {\r\n\toutline: none;\r\n}\r\n\r\n/* Effect 1: Brackets */\r\n\r\n.cl-effect-1 a::before,\r\n.cl-effect-1 a::after {\r\n\tdisplay: inline-block;\r\n\topacity: 0;\r\n\ttransition: opacity 0.2s, -webkit-transform 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.2s;\r\n\ttransition: transform 0.3s, opacity 0.2s, -webkit-transform 0.3s;\r\n}\r\n\r\n.cl-effect-1 a::before {\r\n\tmargin-right: 10px;\r\n\tcontent: '[';\r\n\t-webkit-transform: translateX(20px);\r\n\ttransform: translateX(20px);\r\n}\r\n\r\n.cl-effect-1 a::after {\r\n\tmargin-left: 10px;\r\n\tcontent: ']';\r\n\t-webkit-transform: translateX(-20px);\r\n\ttransform: translateX(-20px);\r\n}\r\n\r\n.cl-effect-1 a:hover::before,\r\n.cl-effect-1 a:hover::after,\r\n.cl-effect-1 a:focus::before,\r\n.cl-effect-1 a:focus::after {\r\n\topacity: 1;\r\n\t-webkit-transform: translateX(0px);\r\n\ttransform: translateX(0px);\r\n}\r\n\r\n/* Effect 2: 3D rolling links, idea from http://hakim.se/thoughts/rolling-links */\r\n\r\n.cl-effect-2 a {\r\n\tline-height: 44px;\r\n\t-webkit-perspective: 1000px;\r\n\tperspective: 1000px;\r\n}\r\n\r\n.cl-effect-2 a span {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tpadding: 0 14px;\r\n\tbackground: #2195de;\r\n\ttransition: -webkit-transform 0.3s;\r\n\ttransition: transform 0.3s;\r\n\ttransition: transform 0.3s, -webkit-transform 0.3s;\r\n\t-webkit-transform-origin: 50% 0;\r\n\ttransform-origin: 50% 0;\r\n\t-webkit-transform-style: preserve-3d;\r\n\ttransform-style: preserve-3d;\r\n}\r\n\r\n.csstransforms3d .cl-effect-2 a span::before {\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground: #0965a0;\r\n\tcontent: attr(data-hover);\r\n\ttransition: background 0.3s;\r\n\t-webkit-transform: rotateX(-90deg);\r\n\ttransform: rotateX(-90deg);\r\n\t-webkit-transform-origin: 50% 0;\r\n\ttransform-origin: 50% 0;\r\n}\r\n\r\n.cl-effect-2 a:hover span,\r\n.cl-effect-2 a:focus span {\r\n\t-webkit-transform: rotateX(90deg) translateY(-22px);\r\n\ttransform: rotateX(90deg) translateY(-22px);\r\n}\r\n\r\n.csstransforms3d .cl-effect-2 a:hover span::before,\r\n.csstransforms3d .cl-effect-2 a:focus span::before {\r\n\tbackground: #28a2ee;\t\r\n}\r\n\r\n/* Effect 3: bottom line slides/fades in */\r\n\r\n.cl-effect-3 a {\r\n\tpadding: 8px 0;\r\n}\r\n\r\n.cl-effect-3 a::after {\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 4px;\r\n\tbackground: rgba(0,0,0,0.1);\r\n\tcontent: '';\r\n\topacity: 0;\r\n\ttransition: opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: opacity 0.3s, transform 0.3s;\r\n\ttransition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;\r\n\t-webkit-transform: translateY(10px);\r\n\ttransform: translateY(10px);\r\n}\r\n\r\n.cl-effect-3 a:hover::after,\r\n.cl-effect-3 a:focus::after {\r\n\topacity: 1;\r\n\t-webkit-transform: translateY(0px);\r\n\ttransform: translateY(0px);\r\n}\r\n\r\n/* Effect 4: bottom border enlarge */\r\n\r\n.cl-effect-4 a {\r\n\tpadding: 0 0 10px;\r\n}\r\n\r\n.cl-effect-4 a::after {\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 1px;\r\n\tbackground: #fff;\r\n\tcontent: '';\r\n\topacity: 0;\r\n\ttransition: height 0.3s, opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: height 0.3s, opacity 0.3s, transform 0.3s;\r\n\ttransition: height 0.3s, opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;\r\n\t-webkit-transform: translateY(-10px);\r\n\ttransform: translateY(-10px);\r\n}\r\n\r\n.cl-effect-4 a:hover::after,\r\n.cl-effect-4 a:focus::after {\r\n\theight: 5px;\r\n\topacity: 1;\r\n\t-webkit-transform: translateY(0px);\r\n\ttransform: translateY(0px);\r\n}\r\n\r\n/* Effect 5: same word slide in */\r\n\r\n.cl-effect-5 a {\r\n\toverflow: hidden;\r\n\tpadding: 0 4px;\r\n\theight: 1em;\r\n}\r\n\r\n.cl-effect-5 a span {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\ttransition: -webkit-transform 0.3s;\r\n\ttransition: transform 0.3s;\r\n\ttransition: transform 0.3s, -webkit-transform 0.3s;\r\n}\r\n\r\n.cl-effect-5 a span::before {\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\tcontent: attr(data-hover);\r\n\tfont-weight: 700;\r\n\t-webkit-transform: translate3d(0,0,0);\r\n\ttransform: translate3d(0,0,0);\r\n}\r\n\r\n.cl-effect-5 a:hover span,\r\n.cl-effect-5 a:focus span {\r\n\t-webkit-transform: translateY(-100%);\r\n\ttransform: translateY(-100%);\r\n}\r\n\r\n/* Effect 5: same word slide in and border bottom */\r\n\r\n.cl-effect-6 a {\r\n\tmargin: 0 10px;\r\n\tpadding: 10px 20px;\r\n}\r\n\r\n.cl-effect-6 a::before {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 2px;\r\n\tbackground: #fff;\r\n\tcontent: '';\r\n\ttransition: top 0.3s;\r\n}\r\n\r\n.cl-effect-6 a::after {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 2px;\r\n\theight: 2px;\r\n\tbackground: #fff;\r\n\tcontent: '';\r\n\ttransition: height 0.3s;\r\n}\r\n\r\n.cl-effect-6 a:hover::before {\r\n\ttop: 100%;\r\n\topacity: 1;\r\n}\r\n\r\n.cl-effect-6 a:hover::after {\r\n\theight: 100%;\r\n}\r\n\r\n/* Effect 7: second border slides up */\r\n\r\n.cl-effect-7 a {\r\n\tpadding: 12px 10px 10px;\r\n\tcolor: #566473;\r\n\ttext-shadow: none;\r\n\tfont-weight: 700;\r\n}\r\n\r\n.cl-effect-7 a::before,\r\n.cl-effect-7 a::after {\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 3px;\r\n\tbackground: #566473;\r\n\tcontent: '';\r\n\ttransition: -webkit-transform 0.3s;\r\n\ttransition: transform 0.3s;\r\n\ttransition: transform 0.3s, -webkit-transform 0.3s;\r\n\t-webkit-transform: scale(0.85);\r\n\ttransform: scale(0.85);\r\n}\r\n\r\n.cl-effect-7 a::after {\r\n\topacity: 0;\r\n\ttransition: top 0.3s, opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: top 0.3s, opacity 0.3s, transform 0.3s;\r\n\ttransition: top 0.3s, opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;\r\n}\r\n\r\n.cl-effect-7 a:hover::before,\r\n.cl-effect-7 a:hover::after,\r\n.cl-effect-7 a:focus::before,\r\n.cl-effect-7 a:focus::after {\r\n\t-webkit-transform: scale(1);\r\n\ttransform: scale(1);\r\n}\r\n\r\n.cl-effect-7 a:hover::after,\r\n.cl-effect-7 a:focus::after {\r\n\ttop: 0%;\r\n\topacity: 1;\r\n}\r\n\r\n/* Effect 8: border slight translate */\r\n\r\n.cl-effect-8 a {\r\n\tpadding: 10px 20px;\r\n}\r\n\r\n.cl-effect-8 a::before,\r\n.cl-effect-8 a::after  {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tborder: 3px solid #354856;\r\n\tcontent: '';\r\n\ttransition: opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;\r\n}\r\n\r\n.cl-effect-8 a::after  {\r\n\tborder-color: #fff;\r\n\topacity: 0;\r\n\t-webkit-transform: translateY(-7px) translateX(6px);\r\n\ttransform: translateY(-7px) translateX(6px);\r\n}\r\n\r\n.cl-effect-8 a:hover::before,\r\n.cl-effect-8 a:focus::before {\r\n\topacity: 0;\r\n\t-webkit-transform: translateY(5px) translateX(-5px);\r\n\ttransform: translateY(5px) translateX(-5px);\r\n}\r\n\r\n.cl-effect-8 a:hover::after,\r\n.cl-effect-8 a:focus::after  {\r\n\topacity: 1;\r\n\t-webkit-transform: translateY(0px) translateX(0px);\r\n\ttransform: translateY(0px) translateX(0px);\r\n}\r\n\r\n/* Effect 9: second text and borders */\r\n\r\n.cl-effect-9 a {\r\n\tmargin: 0 20px;\r\n\tpadding: 18px 20px;\r\n}\r\n\r\n.cl-effect-9 a::before,\r\n.cl-effect-9 a::after {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 1px;\r\n\tbackground: #fff;\r\n\tcontent: '';\r\n\topacity: 0.2;\r\n\ttransition: opacity 0.3s, height 0.3s;\r\n}\r\n\r\n.cl-effect-9 a::after {\r\n\ttop: 100%;\r\n\topacity: 0;\r\n\ttransition: opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;\r\n\t-webkit-transform: translateY(-10px);\r\n\ttransform: translateY(-10px);\r\n}\r\n\r\n.cl-effect-9 a span:first-child {\r\n\tz-index: 2;\r\n\tdisplay: block;\r\n\tfont-weight: 300;\r\n}\r\n\r\n.cl-effect-9 a span:last-child {\r\n\tz-index: 1;\r\n\tdisplay: block;\r\n\tpadding: 8px 0 0 0;\r\n\tcolor: rgba(0,0,0,0.4);\r\n\ttext-shadow: none;\r\n\ttext-transform: none;\r\n\tfont-style: italic;\r\n\tfont-size: 0.75em;\r\n\tfont-family: Palatino, \"Palatino Linotype\", \"Palatino LT STD\", \"Book Antiqua\", Georgia, serif;\r\n\topacity: 0;\r\n\ttransition: opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;\r\n\t-webkit-transform: translateY(-100%);\r\n\ttransform: translateY(-100%);\r\n}\r\n\r\n.cl-effect-9 a:hover::before,\r\n.cl-effect-9 a:focus::before {\r\n\theight: 6px;\r\n}\r\n\r\n.cl-effect-9 a:hover::before,\r\n.cl-effect-9 a:hover::after,\r\n.cl-effect-9 a:focus::before,\r\n.cl-effect-9 a:focus::after {\r\n\topacity: 1;\r\n\t-webkit-transform: translateY(0px);\r\n\ttransform: translateY(0px);\r\n}\r\n\r\n.cl-effect-9 a:hover span:last-child,\r\n.cl-effect-9 a:focus span:last-child {\r\n\topacity: 1;\r\n\t-webkit-transform: translateY(0%);\r\n\ttransform: translateY(0%);\r\n}\r\n\r\n/* Effect 10: reveal, push out */\r\n\r\n.cl-effect-10  {\r\n\tposition: relative;\r\n\tz-index: 1;\r\n}\r\n\r\n.cl-effect-10 a {\r\n\toverflow: hidden;\r\n\tmargin: 0 15px;\r\n}\r\n\r\n.cl-effect-10 a span {\r\n\tdisplay: block;\r\n\tpadding: 10px 20px;\r\n\tbackground: #0f7c67;\r\n\ttransition: -webkit-transform 0.3s;\r\n\ttransition: transform 0.3s;\r\n\ttransition: transform 0.3s, -webkit-transform 0.3s;\r\n}\r\n\r\n.cl-effect-10 a::before {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: -1;\r\n\tpadding: 10px 20px;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground: #fff;\r\n\tcolor: #0f7c67;\r\n\tcontent: attr(data-hover);\r\n\ttransition: -webkit-transform 0.3s;\r\n\ttransition: transform 0.3s;\r\n\ttransition: transform 0.3s, -webkit-transform 0.3s;\r\n\t-webkit-transform: translateX(-25%);\r\n}\r\n\r\n.cl-effect-10 a:hover span,\r\n.cl-effect-10 a:focus span {\r\n\t-webkit-transform: translateX(100%);\r\n\ttransform: translateX(100%);\r\n}\r\n\r\n.cl-effect-10 a:hover::before,\r\n.cl-effect-10 a:focus::before {\r\n\t-webkit-transform: translateX(0%);\r\n\ttransform: translateX(0%);\r\n}\r\n\r\n/* Effect 11: text fill based on Lea Verou's animation http://dabblet.com/gist/6046779 */\r\n\r\n.cl-effect-11 a {\r\n\tpadding: 10px 0;\r\n\tborder-top: 2px solid #0972b4;\r\n\tcolor: #0972b4;\r\n\ttext-shadow: none;\r\n}\r\n\r\n.cl-effect-11 a::before {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\toverflow: hidden;\r\n\tpadding: 10px 0;\r\n\tmax-width: 0;\r\n\tborder-bottom: 2px solid #fff;\r\n\tcolor: #fff;\r\n\tcontent: attr(data-hover);\r\n\ttransition: max-width 0.5s;\r\n}\r\n\r\n.cl-effect-11 a:hover::before,\r\n.cl-effect-11 a:focus::before {\r\n\tmax-width: 100%;\r\n}\r\n\r\n/* Effect 12: circle */\r\n\r\n.cl-effect-12 a::before,\r\n.cl-effect-12 a::after {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\twidth: 100px;\r\n\theight: 100px;\r\n\tborder: 2px solid rgba(0,0,0,0.1);\r\n\tborder-radius: 50%;\r\n\tcontent: '';\r\n\topacity: 0;\r\n\ttransition: opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;\r\n\t-webkit-transform: translateX(-50%) translateY(-50%) scale(0.2);\r\n\ttransform: translateX(-50%) translateY(-50%) scale(0.2);\r\n}\r\n\r\n.cl-effect-12 a::after {\r\n\twidth: 90px;\r\n\theight: 90px;\r\n\tborder-width: 6px;\r\n\t-webkit-transform: translateX(-50%) translateY(-50%) scale(0.8);\r\n\ttransform: translateX(-50%) translateY(-50%) scale(0.8);\r\n}\r\n\r\n.cl-effect-12 a:hover::before,\r\n.cl-effect-12 a:hover::after,\r\n.cl-effect-12 a:focus::before,\r\n.cl-effect-12 a:focus::after {\r\n\topacity: 1;\r\n\t-webkit-transform: translateX(-50%) translateY(-50%) scale(1);\r\n\ttransform: translateX(-50%) translateY(-50%) scale(1);\r\n}\r\n\r\n/* Effect 13: three circles */\r\n\r\n.cl-effect-13 a {\r\n\ttransition: color 0.3s;\r\n}\r\n\r\n.cl-effect-13 a::before {\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\tleft: 50%;\r\n\tcolor: transparent;\r\n\tcontent: '•';\r\n\ttext-shadow: 0 0 transparent;\r\n\tfont-size: 1.2em;\r\n\ttransition: text-shadow 0.3s, color 0.3s;\r\n\t-webkit-transform: translateX(-50%);\r\n\ttransform: translateX(-50%);\r\n\tpointer-events: none;\r\n}\r\n\r\n.cl-effect-13 a:hover::before,\r\n.cl-effect-13 a:focus::before {\r\n\tcolor: #fff;\r\n\ttext-shadow: 10px 0 #fff, -10px 0 #fff;\r\n}\r\n\r\n.cl-effect-13 a:hover,\r\n.cl-effect-13 a:focus {\r\n\tcolor: #ba7700;\r\n}\r\n\r\n/* Effect 14: border switch */\r\n\r\n.cl-effect-14 a {\r\n\tpadding: 0 20px;\r\n\theight: 45px;\r\n\tline-height: 45px;\r\n}\r\n\r\n.cl-effect-14 a::before,\r\n.cl-effect-14 a::after {\r\n\tposition: absolute;\r\n\twidth: 45px;\r\n\theight: 2px;\r\n\tbackground: #fff;\r\n\tcontent: '';\r\n\topacity: 0.2;\r\n\ttransition: all 0.3s;\r\n\tpointer-events: none;\r\n}\r\n\r\n.cl-effect-14 a::before {\r\n\ttop: 0;\r\n\tleft: 0;\r\n\t-webkit-transform: rotate(90deg);\r\n\ttransform: rotate(90deg);\r\n\t-webkit-transform-origin: 0 0;\r\n\ttransform-origin: 0 0;\r\n}\r\n\r\n.cl-effect-14 a::after {\r\n\tright: 0;\r\n\tbottom: 0;\r\n\t-webkit-transform: rotate(90deg);\r\n\ttransform: rotate(90deg);\r\n\t-webkit-transform-origin: 100% 0;\r\n\ttransform-origin: 100% 0;\r\n}\r\n\r\n.cl-effect-14 a:hover::before,\r\n.cl-effect-14 a:hover::after,\r\n.cl-effect-14 a:focus::before,\r\n.cl-effect-14 a:focus::after {\r\n\topacity: 1;\r\n}\r\n\r\n.cl-effect-14 a:hover::before,\r\n.cl-effect-14 a:focus::before {\r\n\tleft: 50%;\r\n\t-webkit-transform: rotate(0deg) translateX(-50%);\r\n\ttransform: rotate(0deg) translateX(-50%);\r\n}\r\n\r\n.cl-effect-14 a:hover::after,\r\n.cl-effect-14 a:focus::after {\r\n\tright: 50%;\r\n\t-webkit-transform: rotate(0deg) translateX(50%);\r\n\ttransform: rotate(0deg) translateX(50%);\r\n}\r\n\r\n/* Effect 15: scale down, reveal */\r\n\r\n.cl-effect-15 a {\r\n\tcolor: rgba(0,0,0,0.2);\r\n\tfont-weight: 700;\r\n\ttext-shadow: none;\r\n}\r\n\r\n.cl-effect-15 a::before {\r\n\tcolor: #fff;\r\n\tcontent: attr(data-hover);\r\n\tposition: absolute;\r\n\ttransition: opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;\r\n}\r\n\r\n.cl-effect-15 a:hover::before,\r\n.cl-effect-15 a:focus::before {\r\n\t-webkit-transform: scale(0.9);\r\n\ttransform: scale(0.9);\r\n\topacity: 0;\r\n}\r\n\r\n/* Effect 16: fall down */\r\n\r\n.cl-effect-16 a {\r\n\tcolor: #6f8686;\r\n\ttext-shadow: 0 0 1px rgba(111,134,134,0.3);\r\n}\r\n\r\n.cl-effect-16 a::before {\r\n\tcolor: #fff;\r\n\tcontent: attr(data-hover);\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\ttext-shadow: 0 0 1px rgba(255,255,255,0.3);\r\n\t-webkit-transform: scale(1.1) translateX(10px) translateY(-10px) rotate(4deg);\r\n\ttransform: scale(1.1) translateX(10px) translateY(-10px) rotate(4deg);\r\n\ttransition: opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;\r\n\tpointer-events: none;\r\n}\r\n\r\n.cl-effect-16 a:hover::before,\r\n.cl-effect-16 a:focus::before {\r\n\t-webkit-transform: scale(1) translateX(0px) translateY(0px) rotate(0deg);\r\n\ttransform: scale(1) translateX(0px) translateY(0px) rotate(0deg);\r\n\topacity: 1;\r\n}\r\n\r\n/* Effect 17: move up fade out, push border */\r\n\r\n.cl-effect-17 a {\r\n\tcolor: #10649b;\r\n\ttext-shadow: none;\r\n\tpadding: 10px 0;\r\n}\r\n\r\n.cl-effect-17 a::before {\r\n\tcolor: #fff;\r\n\ttext-shadow: 0 0 1px rgba(255,255,255,0.3);\r\n\tcontent: attr(data-hover);\r\n\tposition: absolute;\r\n\ttransition: opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;\r\n\tpointer-events: none;\r\n}\r\n\r\n.cl-effect-17 a::after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\tbottom: 0;\r\n\twidth: 100%;\r\n\theight: 2px;\r\n\tbackground: #fff;\r\n\topacity: 0;\r\n\t-webkit-transform: translateY(5px);\r\n\ttransform: translateY(5px);\r\n\ttransition: opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;\r\n\tpointer-events: none;\r\n}\r\n\r\n.cl-effect-17 a:hover::before,\r\n.cl-effect-17 a:focus::before {\r\n\topacity: 0;\r\n\t-webkit-transform: translateY(-2px);\r\n\ttransform: translateY(-2px);\r\n}\r\n\r\n.cl-effect-17 a:hover::after,\r\n.cl-effect-17 a:focus::after {\r\n\topacity: 1;\r\n\t-webkit-transform: translateY(0px);\r\n\ttransform: translateY(0px);\r\n}\r\n\r\n/* Effect 18: cross */\r\n\r\n.cl-effect-18 {\r\n\tposition: relative;\r\n\tz-index: 1;\r\n}\r\n\r\n.cl-effect-18 a {\r\n\tpadding: 0 5px;\r\n\tcolor: #b4770d;\r\n\tfont-weight: 700;\r\n\ttransition: color 0.3s;\r\n}\r\n\r\n.cl-effect-18 a::before,\r\n.cl-effect-18 a::after {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\tleft: 0;\r\n\ttop: 50%;\r\n\theight: 2px;\r\n\tmargin-top: -1px;\r\n\tbackground: #b4770d;\r\n\tcontent: '';\r\n\tz-index: -1;\r\n\ttransition: opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;\r\n\tpointer-events: none;\r\n}\r\n\r\n.cl-effect-18 a::before {\r\n\t-webkit-transform: translateY(-20px);\r\n\ttransform: translateY(-20px);\r\n}\r\n\r\n.cl-effect-18 a::after {\r\n\t-webkit-transform: translateY(20px);\r\n\ttransform: translateY(20px);\r\n}\r\n\r\n.cl-effect-18 a:hover,\r\n.cl-effect-18 a:focus {\r\n\tcolor: #fff;\r\n}\r\n\r\n.cl-effect-18 a:hover::before,\r\n.cl-effect-18 a:hover::after,\r\n.cl-effect-18 a:focus::before,\r\n.cl-effect-18 a:focus::after {\r\n\topacity: 0.7;\r\n}\r\n\r\n.cl-effect-18 a:hover::before,\r\n.cl-effect-18 a:focus::before {\r\n\t-webkit-transform: rotate(45deg);\r\n\ttransform: rotate(45deg);\r\n}\r\n\r\n.cl-effect-18 a:hover::after,\r\n.cl-effect-18 a:focus::after {\r\n\t-webkit-transform: rotate(-45deg);\r\n\ttransform: rotate(-45deg);\r\n}\r\n\r\n/* Effect 19: 3D side */\r\n\r\n.cl-effect-19 a {\r\n\tline-height: 2em;\r\n\tmargin: 15px;\r\n\t-webkit-perspective: 800px;\r\n\tperspective: 800px;\r\n\twidth: 200px;\r\n}\r\n\r\n.cl-effect-19 a span {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\twidth: 100%;\r\n\tpadding: 0 14px;\r\n\tbackground: #e35041;\r\n\ttransition: background 0.4s, -webkit-transform 0.4s;\r\n\ttransition: transform 0.4s, background 0.4s;\r\n\ttransition: transform 0.4s, background 0.4s, -webkit-transform 0.4s;\r\n\t-webkit-transform-style: preserve-3d;\r\n\ttransform-style: preserve-3d;\r\n\t-webkit-transform-origin: 50% 50% -100px;\r\n\ttransform-origin: 50% 50% -100px;\r\n}\r\n\r\n.csstransforms3d .cl-effect-19 a span::before {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 100%;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground: #b53a2d;\r\n\tcontent: attr(data-hover);\r\n\ttransition: background 0.4s;\r\n\t-webkit-transform: rotateY(90deg);\r\n\ttransform: rotateY(90deg);\r\n\t-webkit-transform-origin: 0 50%;\r\n\ttransform-origin: 0 50%;\r\n\tpointer-events: none;\r\n}\r\n\r\n.cl-effect-19 a:hover span,\r\n.cl-effect-19 a:focus span {\r\n\tbackground: #b53a2d;\r\n\t-webkit-transform: rotateY(-90deg);\r\n\ttransform: rotateY(-90deg);\r\n}\r\n\r\n.csstransforms3d .cl-effect-19 a:hover span::before,\r\n.csstransforms3d .cl-effect-19 a:focus span::before {\r\n\tbackground: #ef5e50;\t\r\n}\r\n\r\n/* Effect 20: 3D side */\r\n\r\n.cl-effect-20 a {\r\n\tline-height: 2em;\r\n\t-webkit-perspective: 800px;\r\n\tperspective: 800px;\r\n}\r\n\r\n.cl-effect-20 a span {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tpadding: 3px 15px 0;\r\n\tbackground: #587285;\r\n\tbox-shadow: inset 0 3px #2f4351;\r\n\ttransition: background 0.6s;\r\n\t-webkit-transform-origin: 50% 0;\r\n\ttransform-origin: 50% 0;\r\n\t-webkit-transform-style: preserve-3d;\r\n\ttransform-style: preserve-3d;\r\n\t-webkit-transform-origin: 0% 50%;\r\n\ttransform-origin: 0% 50%;\r\n}\r\n\r\n.cl-effect-20 a span::before {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground: #fff;\r\n\tcolor: #2f4351;\r\n\tcontent: attr(data-hover);\r\n\t-webkit-transform: rotateX(270deg);\r\n\ttransform: rotateX(270deg);\r\n\ttransition: -webkit-transform 0.6s;\r\n\ttransition: transform 0.6s;\r\n\ttransition: transform 0.6s, -webkit-transform 0.6s;\r\n\t-webkit-transform-origin: 0 0;\r\n\ttransform-origin: 0 0;\r\n\tpointer-events: none;\r\n}\r\n\r\n.cl-effect-20 a:hover span,\r\n.cl-effect-20 a:focus span {\r\n\tbackground: #2f4351;\r\n}\r\n\r\n.cl-effect-20 a:hover span::before,\r\n.cl-effect-20 a:focus span::before {\r\n\t-webkit-transform: rotateX(10deg);\r\n\ttransform: rotateX(10deg);\r\n}\r\n\r\n/* Effect 21: borders slight translate */\r\n\r\n.cl-effect-21 a {\r\n\tpadding: 10px;\r\n\tcolor: #237546;\r\n\tfont-weight: 700;\r\n\ttext-shadow: none;\r\n\ttransition: color 0.3s;\r\n}\r\n\r\n.cl-effect-21 a::before,\r\n.cl-effect-21 a::after {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 2px;\r\n\tbackground: #fff;\r\n\tcontent: '';\r\n\topacity: 0;\r\n\ttransition: opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: opacity 0.3s, transform 0.3s;\r\n\ttransition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;\r\n\t-webkit-transform: translateY(-10px);\r\n\ttransform: translateY(-10px);\r\n}\r\n\r\n.cl-effect-21 a::before {\r\n\ttop: 0;\r\n\t-webkit-transform: translateY(-10px);\r\n\ttransform: translateY(-10px);\r\n}\r\n\r\n.cl-effect-21 a::after {\r\n\tbottom: 0;\r\n\t-webkit-transform: translateY(10px);\r\n\ttransform: translateY(10px);\r\n}\r\n\r\n.cl-effect-21 a:hover,\r\n.cl-effect-21 a:focus {\r\n\tcolor: #fff;\r\n}\r\n\r\n.cl-effect-21 a:hover::before,\r\n.cl-effect-21 a:focus::before,\r\n.cl-effect-21 a:hover::after,\r\n.cl-effect-21 a:focus::after {\r\n\topacity: 1;\r\n\t-webkit-transform: translateY(0px);\r\n\ttransform: translateY(0px);\r\n}\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ### NEW ###-->\r\n  <mat-card>\r\n    <mat-grid-list *ngIf=\"!isMobile\" cols=\"3\" rowHeight=\"200px\">\r\n        <mat-grid-tile>\r\n            <mat-toolbar-row>\r\n                <h4>Hurtige links</h4>\r\n                <ul class=\"cl-effect-1 list-unstyled quick-links\">\r\n                  <li><a [routerLink]=\"['/landing-page']\"> Forside </a></li>\r\n                  <li><a [routerLink]=\"['/about']\"> Om </a></li>\r\n                  <li *ngIf=\"isDevelopmentBuild\"><a [routerLink]=\"['/patch-notes']\">Patch Notes</a></li>\r\n                  <li><a (click)=\"authorize()\" [routerLink]=\"['/admin']\">Admin</a></li>\r\n                </ul>\r\n              </mat-toolbar-row>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n            <mat-toolbar-row>\r\n                <h4>Feedback</h4>\r\n                <ul class=\"cl-effect-1 list-unstyled quick-links\">\r\n                  <li><a [routerLink]=\"['/feedback']\"> Del din historie / Lad os høre din mening </a></li>\r\n                  <li><a [routerLink]=\"['/contact']\"> Kontakt </a></li>\r\n                  <li class=\"empty\">empty</li>\r\n                  <li class=\"empty\">empty</li>\r\n                </ul>\r\n              </mat-toolbar-row>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n            <mat-toolbar-row>\r\n                <h4>Privat og vilkår</h4>\r\n                <ul class=\"cl-effect-1 list-unstyled quick-links\">\r\n                  <li><a [routerLink]=\"['/privacy-policy']\"> Handelsbetingelser og Privatlivspolitik </a></li>\r\n                  <li><a [routerLink]=\"['/terms-of-service']\"> Brugsvilkår </a></li>\r\n                  <li><a [routerLink]=\"['/prices']\"> Priser </a></li>\r\n                  <li class=\"empty\">empty</li>\r\n                </ul>\r\n              </mat-toolbar-row>\r\n        </mat-grid-tile>\r\n      </mat-grid-list>\r\n\r\n      <mat-list *ngIf=\"isMobile\">\r\n        <mat-icon [routerLink]=\"['/']\">home</mat-icon>\r\n        <mat-icon [routerLink]=\"['/about']\">info</mat-icon>\r\n        <mat-icon [routerLink]=\"['/contact']\">email</mat-icon>\r\n        <mat-icon [routerLink]=\"['/feedback']\">border_color</mat-icon>\r\n        <mat-icon [routerLink]=\"['/privacy-policy']\">verified_user</mat-icon>\r\n        <mat-icon [routerLink]=\"['/terms-of-service']\">gavel</mat-icon>\r\n        <mat-icon>language</mat-icon>\r\n        <mat-icon [routerLink]=\"['/prices']\">credit_card</mat-icon>\r\n      </mat-list>\r\n\r\n      <mat-toolbar-row>\r\n          <p class=\"cl-effect-1 list-unstyled quick-links signature\"><a class=\"text-green ml-2\" [routerLink]=\"['/']\" target=\"_blank\">© 2018  SingleNetværket</a> </p>\r\n      </mat-toolbar-row>\r\n\r\n  </mat-card>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mobile_detector_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mobile-detector.service */ "./src/app/mobile-detector.service.ts");
/* harmony import */ var _user_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-role.service */ "./src/app/user-role.service.ts");
/* harmony import */ var _entity_user_role_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entity/user/role.model */ "./src/app/entity/user/role.model.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FooterComponent = /** @class */ (function () {
    function FooterComponent(mds, urs, authService, router, toastr) {
        this.mds = mds;
        this.urs = urs;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.isMobile = false;
        this.isDevelopmentBuild = true;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.isMobile = this.mds.check();
    };
    FooterComponent.prototype.authorize = function () {
        var _this = this;
        this.urs.getList().subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                if (snapshot.payload.val().fk_id === _this.authService.afAuth.auth.currentUser.uid) {
                    var role = new _entity_user_role_model__WEBPACK_IMPORTED_MODULE_3__["Role"](snapshot.payload.val());
                    if (role.type === _this.urs.userTypes.ADMIN) {
                        _this.successToast("Du har nu admin adgang", 👍);
                        _this.router.navigate(['/admin-module']);
                    }
                    else {
                        _this.errorToast("Du har ikke adgang.", 'Fejl!');
                    }
                }
            });
        });
        //let userRole: Role = this.urs.getUserRoleByUserID(this.authService.afAuth.auth.currentUser.uid);
        //if (userRole.fk_id === "Din Mor") {
        //}
    };
    FooterComponent.prototype.successToast = function (msg, title) {
        this.toastr.clear();
        this.toastr.success(msg, title);
    };
    FooterComponent.prototype.errorToast = function (msg, title) {
        this.toastr.clear();
        this.toastr.error(msg, title);
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [_mobile_detector_service__WEBPACK_IMPORTED_MODULE_1__["MobileDetectorService"], _user_role_service__WEBPACK_IMPORTED_MODULE_2__["UserRoleService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/geo-coding-api.service.ts":
/*!*******************************************!*\
  !*** ./src/app/geo-coding-api.service.ts ***!
  \*******************************************/
/*! exports provided: GeoCodingApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoCodingApiService", function() { return GeoCodingApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeoCodingApiService = /** @class */ (function () {
    function GeoCodingApiService(http) {
        this.http = http;
        this.uri = 'https://dawa.aws.dk/postnumre/';
    }
    GeoCodingApiService.prototype.getZipFromCity = function (zip) {
        return this.http.get(this.uri + zip);
    };
    GeoCodingApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], GeoCodingApiService);
    return GeoCodingApiService;
}());



/***/ }),

/***/ "./src/app/image-upload/image-upload.component.html":
/*!**********************************************************!*\
  !*** ./src/app/image-upload/image-upload.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">Fil opload</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-group row\">\r\n            <label for=\"username\" class=\"col-4 col-form-label\">Vælg fil</label> \r\n            <div class=\"col-8\">\r\n              <form [formGroup]=\"fileForm\">\r\n                  <input formControlName=\"file\" id=\"uploadImage\" name=\"uploadImage\" class=\"\" required=\"required\" type=\"file\">\r\n              </form>\r\n            </div>\r\n          </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button mat-button color=\"warn\" (click)=\"c('Close click')\">Luk</button>\r\n        <button mat-button color=\"primary\" (click)=\"c('Close click')\">Upload</button>\r\n    </div>\r\n  </ng-template>\r\n  <button mat-raised-button color=\"primary\" class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openVerticallyCentered(content)\">Opload nyt billede</button>"

/***/ }),

/***/ "./src/app/image-upload/image-upload.component.ts":
/*!********************************************************!*\
  !*** ./src/app/image-upload/image-upload.component.ts ***!
  \********************************************************/
/*! exports provided: ImageUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadComponent", function() { return ImageUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageUploadComponent = /** @class */ (function () {
    function ImageUploadComponent(modalService) {
        this.modalService = modalService;
        this.fileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ImageUploadComponent.prototype.openBackDropCustomClass = function (content) {
        this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
    };
    ImageUploadComponent.prototype.openWindowCustomClass = function (content) {
        this.modalService.open(content, { windowClass: 'dark-modal' });
    };
    ImageUploadComponent.prototype.openSm = function (content) {
        this.modalService.open(content, { size: 'sm' });
    };
    ImageUploadComponent.prototype.openLg = function (content) {
        this.modalService.open(content, { size: 'lg' });
    };
    ImageUploadComponent.prototype.openVerticallyCentered = function (content) {
        this.modalService.open(content, { centered: true });
    };
    ImageUploadComponent.prototype.ngOnInit = function () {
    };
    ImageUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'image-upload',
            template: __webpack_require__(/*! ./image-upload.component.html */ "./src/app/image-upload/image-upload.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: ["\n    .dark-modal .modal-content {\n      background-color: #292b2c;\n      color: white;\n    }\n    .dark-modal .close {\n      color: white;\n    }\n    .light-blue-backdrop {\n      background-color: #5cb3fd;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], ImageUploadComponent);
    return ImageUploadComponent;
}());



/***/ }),

/***/ "./src/app/landing-page-header/landing-page-header.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/landing-page-header/landing-page-header.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n margin: 5px;\r\n -webkit-transform: translateY(25%);\r\n         transform: translateY(25%);\r\n top:0;\r\n}\r\n\r\nmat-form-field {\r\n    margin: 10px;\r\n}\r\n\r\nbutton {\r\n    margin: 5px;\r\n}\r\n\r\n.singleton-container {\r\n    width: 50%;\r\n}\r\n\r\n.singleton {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    top: 75%;\r\n    -webkit-transform: translateY(-75%);\r\n            transform: translateY(-75%);\r\n    width: 25%;\r\n}\r\n\r\n.mobileBtn {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    width:50%;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.center {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    width: 50%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\nform {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\nimg {\r\n    width:50%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display:block;\r\n}\r\n\r\ndiv > form {\r\n    margin-top:12.5%;\r\n    display: inline-block;\r\n}\r\n\r\na {\r\n    background-color: transparent;\r\n    border-color: snow;\r\n    color: snow;\r\n}\r\n\r\n.col {\r\n    padding: 10px;\r\n    color: snow;\r\n}\r\n\r\n.mobile {\r\n    display:none;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n\r\n    div .left {\r\n        display:none;\r\n    }\r\n\r\n    .mobile {\r\n        display: block;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/landing-page-header/landing-page-header.component.html":
/*!************************************************************************!*\
  !*** ./src/app/landing-page-header/landing-page-header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isMobile\" class=\"container\">\r\n\r\n    <a [routerLink]=\"['/landing-page']\"><img class=\"mobile\" src=\"./assets/images/Logo_white.png\"></a>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col left\">\r\n        <a [routerLink]=\"['/landing-page']\"><img src=\"./assets/images/Logo_white.png\"></a>\r\n      </div>\r\n      <div *ngIf=\"!isMobile && !isLoggedOn\" class=\"col right\">\r\n        <mat-card>\r\n            <form [formGroup]=\"loginForm\">\r\n                <mat-form-field>\r\n                    <mat-label>Email</mat-label>\r\n                    <input formControlName=\"email\" name=\"email\" matInput placeholder=\"email\" autofocus>\r\n                </mat-form-field>\r\n                \r\n                <mat-form-field>\r\n                    <mat-label>Password</mat-label>\r\n                    <input formControlName=\"password\" name=\"password\" matInput placeholder=\"password\" type=\"password\">\r\n                </mat-form-field>\r\n    \r\n                <button (click)=\"tryLogin(loginForm.value)\" mat-raised-button>Login</button>\r\n                <button (click)=\"tryFacebookLogin()\" mat-raised-button color=\"primary\">Login med Facebook</button>\r\n                <button (click)=\"tryGoogleLogin()\" mat-raised-button color=\"accent\">Login med Google</button>\r\n            </form>\r\n        </mat-card>\r\n      </div>\r\n\r\n      <div *ngIf=\"!isMobile && isLoggedOn\" class=\"col right\">\r\n        <button matTooltip=\"Logget på som {{username}}\" class=\"singleton\" routerLink=\"/events\" mat-raised-button>Til Events</button>\r\n      </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"isMobile\">\r\n\r\n  <a [routerLink]=\"['/']\"><img class=\"mobile\" src=\"./assets/images/Logo_white.png\"></a>\r\n\r\n  <div *ngIf=\"!isLoggedOn\">\r\n      <button class=\"mobileBtn\" mat-raised-button (click)=\"openDialog()\">Login</button>\r\n      <button class=\"mobileBtn\" (click)=\"tryFacebookLogin()\" mat-raised-button color=\"primary\">Login med Facebook</button>\r\n      <button class=\"mobileBtn\" (click)=\"tryGoogleLogin()\" mat-raised-button color=\"accent\">Login med Google</button>    \r\n  </div>\r\n  \r\n\r\n  <div *ngIf=\"isLoggedOn\">\r\n      <button class=\"mobileBtn\" matTooltip=\"Logget på som {{username}}\" routerLink=\"/loggedin-dashboard\" mat-raised-button>Til Dashboard</button>\r\n  </div>\r\n\r\n</div>\r\n\r\n<ngx-spinner\r\nbdColor = \"rgba(51, 51, 51, 0.8)\"\r\nsize = \"large\"\r\ncolor = \"#fff\"\r\ntype = \"square-loader\">\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/landing-page-header/landing-page-header.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/landing-page-header/landing-page-header.component.ts ***!
  \**********************************************************************/
/*! exports provided: LandingPageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageHeaderComponent", function() { return LandingPageHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _mobile_login_header_mobile_login_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mobile-login-header/mobile-login-header.component */ "./src/app/mobile-login-header/mobile-login-header.component.ts");
/* harmony import */ var _mobile_detector_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mobile-detector.service */ "./src/app/mobile-detector.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _user_firebase_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user-firebase.service */ "./src/app/user-firebase.service.ts");
/* harmony import */ var _entity_user_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../entity/user/user */ "./src/app/entity/user/user.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var LandingPageHeaderComponent = /** @class */ (function () {
    function LandingPageHeaderComponent(authService, dialog, mds, spinner, ufbs, toastr, router) {
        this.authService = authService;
        this.dialog = dialog;
        this.mds = mds;
        this.spinner = spinner;
        this.ufbs = ufbs;
        this.toastr = toastr;
        this.router = router;
        this.isMobile = false;
        this.isLoggedOn = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    LandingPageHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isMobile = this.mds.check();
        this.authService.afAuth.auth.onAuthStateChanged(function (user) {
            if (user && user.emailVerified) {
                _this.isLoggedOn = true;
                //First sign in AKA account creation
                _this.ufbs.getUserByID(user.uid).subscribe(function (value) {
                    if (value === null) {
                        _this.authService.doSocialLoginRegister(user);
                        _this.showSuccess("Du er nu oprettet & logget ind 👍 ", "👍  ");
                    }
                    else {
                        _this.ufbs.getUserByID(user.uid).subscribe(function (value) {
                            var u = new _entity_user_user__WEBPACK_IMPORTED_MODULE_8__["User"](value);
                            _this.ufbs.setStorage(u);
                            _this.username = u.username;
                            if (_this.router.url === "/landing-page") {
                                _this.showSuccess("Velkommen tilbage 🙂", _this.ufbs.getStorage().username);
                                _this.router.navigate(['/events']);
                            }
                        });
                    }
                    _this.spinner.hide();
                });
            }
            else if (user && !user.emailVerified) {
                _this.toastr.warning("Det lader til at du har et login, men ikke har bekræftet din email. Dette skal gøres inden 24 timer.", 'ℹ️ ');
            }
        });
    };
    LandingPageHeaderComponent.prototype.tryLogin = function (formData) {
        var _this = this;
        this.spinner.show();
        this.authService.doLogin(formData).then(function () {
            _this.spinner.hide();
        }).catch(function () {
            _this.spinner.hide();
        });
    };
    LandingPageHeaderComponent.prototype.tryFacebookLogin = function () {
        var _this = this;
        this.spinner.show();
        this.authService.doFacebookLogin().then(function (callback) {
            _this.spinner.hide();
        }).catch(function (error) {
            _this.spinner.hide();
        });
    };
    LandingPageHeaderComponent.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.spinner.show();
        this.authService.doGoogleLogin().then(function () {
            _this.spinner.hide();
        }).catch(function () {
            _this.spinner.hide();
        });
    };
    LandingPageHeaderComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_mobile_login_header_mobile_login_header_component__WEBPACK_IMPORTED_MODULE_4__["MobileLoginHeaderComponent"], {
            width: '250px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    LandingPageHeaderComponent.prototype.showSuccess = function (msg, status) {
        if (msg === void 0) { msg = ""; }
        if (status === void 0) { status = ""; }
        this.toastr.clear();
        this.toastr.success(msg, status);
    };
    LandingPageHeaderComponent.prototype.translateCallback = function (message) {
        if (message.includes('An account already exists')) {
            return "En konto findes allerede oprettet med den samme email addresse. Dette skyldes at du allerede har en Google konto eller Facebook konto tilknyttet SingleNetværket. Log derfor ind med den anden.";
        }
    };
    LandingPageHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'landing-page-header',
            template: __webpack_require__(/*! ./landing-page-header.component.html */ "./src/app/landing-page-header/landing-page-header.component.html"),
            styles: [__webpack_require__(/*! ./landing-page-header.component.css */ "./src/app/landing-page-header/landing-page-header.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _mobile_detector_service__WEBPACK_IMPORTED_MODULE_5__["MobileDetectorService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _user_firebase_service__WEBPACK_IMPORTED_MODULE_7__["UserFirebaseService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
    ], LandingPageHeaderComponent);
    return LandingPageHeaderComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css?v=${new Date().getTime()}":
/*!***********************************************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css?v=${new Date().getTime()} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1, h2, h3, h4, h5 {\r\n    text-align: center;\r\n}\r\n\r\n.promotionText {\r\n    font-size: 14px;\r\n}\r\n\r\n.display-none {\r\n    visibility: hidden;\r\n}\r\n\r\nbutton {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 20px;\r\n}\r\n\r\n.container {\r\n    margin-bottom: 30px;\r\n}\r\n\r\nmat-card {\r\n    border-radius: 0px;\r\n}\r\n\r\n.pr-image {\r\n    width: 80%;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n    .desktop {\r\n        display: none;\r\n    }\r\n\r\n    mat-card {\r\n        border-radius: 0px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html?v=${new Date().getTime()}":
/*!************************************************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html?v=${new Date().getTime()} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<cookies-consent></cookies-consent>\r\n<landing-page-header></landing-page-header>\r\n<div class=\"container\">\r\n  <mat-card>\r\n      <div class=\"row\">\r\n          <div class=\"col-sm desktop\">\r\n            <h2>Events</h2>\r\n            <dummy-list></dummy-list>\r\n          </div>\r\n          <div class=\"col-sm\">\r\n            <h2>Opret Profil</h2>\r\n            <create-account-form></create-account-form>\r\n          </div>\r\n          <div class=\"col-sm desktop\">\r\n            <h2>Info</h2>\r\n            <mat-card>\r\n                <p class=\"promotionText\"><strong>Gratis</strong> profil resten af året. Indtil 1/1-2019</p>\r\n            </mat-card>\r\n          </div>\r\n        </div>\r\n  </mat-card>\r\n</div>\r\n<ngx-spinner\r\nbdColor = \"rgba(51, 51, 51, 0.8)\"\r\nsize = \"large\"\r\ncolor = \"#fff\"\r\ntype = \"square-loader\">\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var angular2_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-cookie */ "./node_modules/angular2-cookie/core.js");
/* harmony import */ var angular2_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _user_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-firebase.service */ "./src/app/user-firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(spinner, cs, authService, ufbs) {
        this.spinner = spinner;
        this.cs = cs;
        this.authService = authService;
        this.ufbs = ufbs;
    }
    LandingPageComponent.prototype.ngOnChanges = function () {
    };
    LandingPageComponent.prototype.ngOnInit = function () {
        this.clearCache();
    };
    LandingPageComponent.prototype.onLoading = function () {
        this.spinner.show();
    };
    LandingPageComponent.prototype.onLoaded = function () {
        this.spinner.hide();
    };
    LandingPageComponent.prototype.clearCache = function () {
        var millis = Number(Date.now().toString()) / 1000;
        if (this.cs.get('last_visit') != undefined) {
            var dateStr = this.cs.get('last_visit');
            var thenMillis = Number(dateStr);
            if (thenMillis + (21600 * 100) <= millis) {
                this.cs.put('last_visit', millis + "");
                location.reload(true);
            }
        }
        else {
            this.cs.put('last_visit', millis + "");
        }
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html?v=${new Date().getTime()} */ "./src/app/landing-page/landing-page.component.html?v=${new Date().getTime()}"),
            styles: [__webpack_require__(/*! ./landing-page.component.css?v=${new Date().getTime()} */ "./src/app/landing-page/landing-page.component.css?v=${new Date().getTime()}")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"], typeof (_a = typeof angular2_cookie__WEBPACK_IMPORTED_MODULE_2__["CookieService"] !== "undefined" && angular2_cookie__WEBPACK_IMPORTED_MODULE_2__["CookieService"]) === "function" && _a || Object, _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _user_firebase_service__WEBPACK_IMPORTED_MODULE_4__["UserFirebaseService"]])
    ], LandingPageComponent);
    return LandingPageComponent;
    var _a;
}());



/***/ }),

/***/ "./src/app/loggedin-dashboard/loggedin-dashboard.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/loggedin-dashboard/loggedin-dashboard.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card-menu {\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    display: block;\r\n    height: 100%;\r\n}\r\n\r\nmat-card {\r\n    margin: 20px;\r\n}\r\n\r\n.dashboard-button {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.center {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display:block;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\nh1, h2 {\r\n    color:snow;\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    transition: -webkit-transform 1s;\r\n    transition: transform 1s;\r\n    transition: transform 1s, -webkit-transform 1s;\r\n}\r\n\r\nimg:hover {\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n}\r\n\r\n.col-sm {\r\n    padding: 10px;\r\n}\r\n\r\ndiv > img {\r\n    padding: 20px;\r\n    width:100%;\r\n}\r\n\r\n.responsive {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n/* Responsive image grid */\r\n\r\n.row {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    padding: 0 4px;\r\n  }\r\n\r\n/* Create four equal columns that sits next to each other */\r\n\r\n.column {\r\n    flex: 25%;\r\n    max-width: 25%;\r\n    padding: 0 4px;\r\n  }\r\n\r\n.column img {\r\n    margin-top: 8px;\r\n    vertical-align: middle;\r\n  }\r\n\r\n/* Responsive layout - makes a two column-layout instead of four columns */\r\n\r\n@media screen and (max-width: 800px) {\r\n    .column {\r\n      flex: 50%;\r\n      max-width: 50%;\r\n    }\r\n  }\r\n\r\n/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */\r\n\r\n@media screen and (max-width: 600px) {\r\n    .column {\r\n      flex: 100%;\r\n      max-width: 100%;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/loggedin-dashboard/loggedin-dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/loggedin-dashboard/loggedin-dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n    <h1>Overblik</h1>\r\n\r\n    <mat-card *ngIf=\"!isMobile\">\r\n        <mat-grid-list cols=\"3\" rowHeight=\"50px\">\r\n            <mat-grid-tile>\r\n                    <h3>Seneste events</h3>\r\n            </mat-grid-tile>\r\n            <mat-grid-tile>\r\n                \r\n            </mat-grid-tile>\r\n            <mat-grid-tile>\r\n                    <h3>Rating af mine events</h3>\r\n            </mat-grid-tile>\r\n        </mat-grid-list>\r\n        <mat-grid-list cols=\"3\" rowHeight=\"350px\">\r\n            <mat-grid-tile>\r\n               <mat-card>\r\n                    <mat-chip-list>\r\n                        <div class=\"center\">\r\n                            <mat-chip *ngFor=\"let recTile of recommendationTiles | slice:-6\" color=\"primary\" selected><mat-icon>today</mat-icon>{{recTile.name}}<mat-icon>group</mat-icon>{{recTile.pCount}}</mat-chip>\r\n                        </div>\r\n                    </mat-chip-list>\r\n\r\n                    <mat-card-actions>\r\n                        <button routerLink=\"/events\" mat-button color=\"primary\">Se flere</button> \r\n                    </mat-card-actions>\r\n\r\n               </mat-card>\r\n            </mat-grid-tile>\r\n            <mat-grid-tile>\r\n\r\n            </mat-grid-tile>\r\n            <mat-grid-tile>\r\n                <mat-card>\r\n                    <mat-chip-list>\r\n                        <div class=\"center\">\r\n                            <mat-chip *ngFor=\"let feedback of feedbackTiles\" color=\"accent\" selected><mat-icon>today</mat-icon>{{feedback.fk_event}}<mat-icon>thumb_up_alt</mat-icon> + {{feedback.score}}</mat-chip>\r\n                            \r\n                            <mat-card-actions>\r\n                                <button *ngIf=\"tCount === 0\" mat-button color=\"warn\">Ingen bedømmelser</button>\r\n                            </mat-card-actions>\r\n                        \r\n                        </div>\r\n                    </mat-chip-list>\r\n                </mat-card>\r\n            </mat-grid-tile>\r\n        </mat-grid-list>\r\n    </mat-card>\r\n\r\n    <mat-card *ngIf=\"isMobile\">\r\n        <mat-chip-list>\r\n            <div class=\"center\">\r\n                <h3>Events: netop nu</h3>\r\n                <mat-chip *ngFor=\"let recTile of recommendationTiles\" color=\"primary\" selected><mat-icon>today</mat-icon>{{recTile.eventName}}<mat-icon>group</mat-icon>{{recTile.participants}}</mat-chip>\r\n            </div>\r\n        </mat-chip-list>\r\n    </mat-card>\r\n\r\n    <mat-card *ngIf=\"isMobile\">\r\n        <mat-chip-list>\r\n            <div class=\"center\">\r\n                <h3>Rating af mine events</h3>\r\n                <mat-chip *ngFor=\"let feedback of feedbackTiles\" color=\"accent\" selected><mat-icon>today</mat-icon>{{feedback.fk_event}}<mat-icon>thumb_up_alt</mat-icon> + {{feedback.score}}</mat-chip>\r\n            </div>\r\n        </mat-chip-list>\r\n    </mat-card>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/loggedin-dashboard/loggedin-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/loggedin-dashboard/loggedin-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: LoggedinDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedinDashboardComponent", function() { return LoggedinDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-firebase.service */ "./src/app/user-firebase.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _rating_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rating.service */ "./src/app/rating.service.ts");
/* harmony import */ var _event_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event-firebase.service */ "./src/app/event-firebase.service.ts");
/* harmony import */ var _mobile_detector_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mobile-detector.service */ "./src/app/mobile-detector.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoggedinDashboardComponent = /** @class */ (function () {
    function LoggedinDashboardComponent(ufbs, authService, rs, efbs, md) {
        var _this = this;
        this.ufbs = ufbs;
        this.authService = authService;
        this.rs = rs;
        this.efbs = efbs;
        this.md = md;
        this.isMobile = false;
        this.tiles = [
            { text: 'Events', link: '/events', enabled: true },
            { text: 'Min Profil', link: '/my-profile', enabled: true },
            { text: 'Oversigt', link: '/loggedin-dashboard', enabled: true },
            { text: 'Betaling', link: '/payment', enabled: true },
            { text: 'Beskeder', link: '/privmsg', enabled: false },
        ];
        this.tCount = 0;
        this.rs.getRecentRatingsForUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                _this.feedbackTiles = [];
                _this.efbs.getEventByKey(snapshot.fk_event).snapshotChanges().subscribe(function (ss) {
                    _this.feedbackTiles.push({ score: snapshot.score, fk_event: ss.payload.val().name, fk_host: snapshot.fk_host });
                });
                _this.tCount = _this.feedbackTiles.length;
            });
        });
        this.efbs.getList().subscribe(function (snapshots) {
            _this.recommendationTiles = [];
            snapshots.forEach(function (snapshot) {
                if (snapshot.participants != undefined) {
                    _this.recommendationTiles.push({ name: snapshot.name, pCount: snapshot.participants.length });
                }
                else {
                    _this.recommendationTiles.push({ name: snapshot.name, pCount: snapshot.participantCount });
                }
            });
        });
    }
    LoggedinDashboardComponent.prototype.ngOnInit = function () {
        this.isMobile = this.md.check();
    };
    LoggedinDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loggedin-dashboard',
            template: __webpack_require__(/*! ./loggedin-dashboard.component.html */ "./src/app/loggedin-dashboard/loggedin-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./loggedin-dashboard.component.css */ "./src/app/loggedin-dashboard/loggedin-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_user_firebase_service__WEBPACK_IMPORTED_MODULE_1__["UserFirebaseService"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _rating_service__WEBPACK_IMPORTED_MODULE_3__["RatingService"], _event_firebase_service__WEBPACK_IMPORTED_MODULE_4__["EventFirebaseService"], _mobile_detector_service__WEBPACK_IMPORTED_MODULE_5__["MobileDetectorService"]])
    ], LoggedinDashboardComponent);
    return LoggedinDashboardComponent;
}());



/***/ }),

/***/ "./src/app/mobile-detector.service.ts":
/*!********************************************!*\
  !*** ./src/app/mobile-detector.service.ts ***!
  \********************************************/
/*! exports provided: MobileDetectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileDetectorService", function() { return MobileDetectorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MobileDetectorService = /** @class */ (function () {
    function MobileDetectorService() {
    }
    MobileDetectorService.prototype.check = function (w) {
        if (w === void 0) { w = 900; }
        return window.screen.width <= w;
    };
    MobileDetectorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MobileDetectorService);
    return MobileDetectorService;
}());



/***/ }),

/***/ "./src/app/mobile-login-header/mobile-login-header.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/mobile-login-header/mobile-login-header.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mobile-login-header/mobile-login-header.component.html":
/*!************************************************************************!*\
  !*** ./src/app/mobile-login-header/mobile-login-header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\">\r\n    <mat-form-field>\r\n        <mat-label>Email</mat-label>\r\n        <input matInput formControlName=\"email\" placeholder=\"email\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <mat-label>Password</mat-label>\r\n        <input matInput formControlName=\"password\" type=\"password\" placeholder=\"password\">\r\n    </mat-form-field>\r\n    <button mat-raised-button (click)=\"tryLogin(loginForm.value)\">Login</button>\r\n</form>"

/***/ }),

/***/ "./src/app/mobile-login-header/mobile-login-header.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/mobile-login-header/mobile-login-header.component.ts ***!
  \**********************************************************************/
/*! exports provided: MobileLoginHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileLoginHeaderComponent", function() { return MobileLoginHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MobileLoginHeaderComponent = /** @class */ (function () {
    function MobileLoginHeaderComponent(authService, dialog) {
        this.authService = authService;
        this.dialog = dialog;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    MobileLoginHeaderComponent_1 = MobileLoginHeaderComponent;
    MobileLoginHeaderComponent.prototype.ngOnInit = function () {
    };
    MobileLoginHeaderComponent.prototype.tryLogin = function (formData) {
        this.authService.doLogin(formData);
    };
    MobileLoginHeaderComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(MobileLoginHeaderComponent_1, {
            width: '250px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    MobileLoginHeaderComponent = MobileLoginHeaderComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mobile-login-header',
            template: __webpack_require__(/*! ./mobile-login-header.component.html */ "./src/app/mobile-login-header/mobile-login-header.component.html"),
            styles: [__webpack_require__(/*! ./mobile-login-header.component.css */ "./src/app/mobile-login-header/mobile-login-header.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], MobileLoginHeaderComponent);
    return MobileLoginHeaderComponent;
    var MobileLoginHeaderComponent_1;
}());



/***/ }),

/***/ "./src/app/my-event/my-event.component.css":
/*!*************************************************!*\
  !*** ./src/app/my-event/my-event.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    color: snow;\r\n    text-align: center;\r\n}\r\n\r\nmat-card {\r\n    margin: 10px;\r\n}\r\n\r\nmat-form-field {\r\n    display: block;\r\n}\r\n\r\nbutton {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    width: 25%;\r\n}\r\n\r\n.center {\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/my-event/my-event.component.html":
/*!**************************************************!*\
  !*** ./src/app/my-event/my-event.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<h1>Mit Event</h1>\r\n<mat-card>\r\n\r\n    <mat-card>\r\n            <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        Hvad & Hvor\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                        Ændre detaljer ved at klikke på kassen\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                  \r\n                <form [formGroup]=\"firstFormGroup\">\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"title\" formControlName=\"eventName\" required> <br>\r\n                        </mat-form-field>\r\n                        <mat-form-field>\r\n                            <textarea formControlName=\"eventDescription\" matInput placeholder=\"Beskrivelse\" rows=\"3\"\r\n                            matTooltip=\"Du kan trække nede i højre hjørne for at forstørre tekstfeltet\"\r\n                            aria-label=\"Button that displays a tooltip when focused or hovered over\" required></textarea> <br>\r\n                        </mat-form-field>\r\n                        <mat-form-field>\r\n                                <mat-label><fa name=\"tag\"></fa> Kategori</mat-label>\r\n                                <mat-select formControlName=\"eventCategory\" name=\"eventCategory\" placeholder=\"Vælg emne\" required>\r\n                                    <mat-option value=\"Andet\">Andet</mat-option>\r\n                                    <mat-option value=\"Hjemmehygge\">Hjemmehygge</mat-option>\r\n                                    <mat-option value=\"Fest i privathjem\">Fest i privathjem</mat-option>\r\n                                    <mat-option value=\"Fest uden for privaten\">Fest uden for privaten</mat-option>\r\n                                    <mat-option value=\"For børn\">For børn</mat-option>\r\n                                    <mat-option value=\"Spis sammen på restaurant\">Spis sammen på restaurant</mat-option>\r\n                                    <mat-option value=\"Biograf\">Biograf</mat-option>\r\n                                    <mat-option value=\"KateNaturoplevelsegori\">Naturoplevelse</mat-option>\r\n                                    <mat-option value=\"Ferie\">Ferie</mat-option>\r\n                                    <mat-option value=\"Koncert\">Koncert</mat-option>\r\n                                    <mat-option value=\"Kultur\">Kultur</mat-option>\r\n                                    <mat-option value=\"Sport\">Sport</mat-option>\r\n                                </mat-select>  <br>\r\n                        </mat-form-field>\r\n    \r\n                        <mat-label><fa name=\"home\"></fa> Adresse</mat-label>\r\n    \r\n                        <mat-grid-list cols=\"3\" rowHeight=\"70px\">\r\n                            <mat-grid-tile>\r\n                                <mat-form-field>\r\n                                    <mat-label>Vej</mat-label>\r\n                                    <input matInput formControlName=\"eventLocationStreet\" placeholder=\"Vej\" required> <br>\r\n                                </mat-form-field>\r\n                            </mat-grid-tile>\r\n                            <mat-grid-tile>\r\n                                    <mat-form-field>\r\n                                        <mat-label>{{apiZipValue}}</mat-label>\r\n                                        <input matInput formControlName=\"eventLocationCity\" placeholder=\"By\" readonly\r\n                                        matTooltip=\"Dette felt udfyldes automatisk\"> <br>\r\n                                    </mat-form-field>\r\n                                </mat-grid-tile>\r\n                                <mat-grid-tile>\r\n                                        <mat-form-field>\r\n                                            <mat-label>Post Nr.</mat-label>\r\n                                            <input (keyup)=\"lookUpZip($event)\" matInput formControlName=\"eventLocationZip\" placeholder=\"#\" required> <br>\r\n                                        </mat-form-field>\r\n                                </mat-grid-tile>\r\n                        </mat-grid-list>\r\n                    </form>\r\n                  \r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel>\r\n                    <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                            Hvem\r\n                        </mat-panel-title>\r\n                        <mat-panel-description>\r\n                            Ændre detaljer ved at klikke på kassen\r\n                        </mat-panel-description>\r\n                    </mat-expansion-panel-header>\r\n                      \r\n                    <form [formGroup]=\"secondFormGroup\">\r\n                            <ng-template matStepLabel>Målgruppe</ng-template>\r\n                                <mat-label>Kønsfordeling</mat-label> <br>\r\n                                <mat-radio-group formControlName=\"eventGender\">\r\n                                    <mat-radio-button name=\"eventGender\" value=\"Kun for mænd\">Kun for mænd</mat-radio-button>\r\n                                    <mat-radio-button name=\"eventGender\" value=\"Kun for kvinder\">Kun for kvinder</mat-radio-button>\r\n                                    <mat-radio-button name=\"eventGender\" value=\"50/50\">50/50</mat-radio-button>\r\n                                </mat-radio-group>\r\n        \r\n                                <br> <mat-label>Børn</mat-label> <br>\r\n                                <mat-radio-group formControlName=\"eventTargetGroup\">\r\n                                    <mat-radio-button name=\"eventTargetGroup\" value=\"Kun med børn\">Kun med børn</mat-radio-button>\r\n                                    <mat-radio-button name=\"eventTargetGroup\" value=\"Kun uden børn\">Kun uden børn</mat-radio-button>\r\n                                    <mat-radio-button name=\"eventTargetGroup\" value=\"Børn velkomne\">Børn velkomne</mat-radio-button>\r\n                                </mat-radio-group>\r\n        \r\n        \r\n                                <br> <label>Aldersgruppe</label>\r\n        \r\n                                <mat-grid-list cols=\"2\" rowHeight=70px>\r\n                                    <mat-grid-tile>\r\n                                        <mat-form-field>\r\n                                            <mat-label>Fra</mat-label>\r\n                                            <input matInput type=\"number\" min=\"18\" max=\"98\" formControlName=\"eventMinAge\" required>\r\n                                        </mat-form-field>\r\n                                    </mat-grid-tile>\r\n                                    <mat-grid-tile>\r\n                                        <mat-form-field>\r\n                                            <mat-label>Til</mat-label>\r\n                                            <input matInput type=\"number\" min=\"18\" max=\"99\" formControlName=\"eventMaxAge\" required>\r\n                                        </mat-form-field>\r\n                                    </mat-grid-tile>\r\n                                </mat-grid-list>\r\n        \r\n                                <label>Antal Gæster</label>\r\n        \r\n                                <mat-grid-list cols=\"2\" rowHeight=70px>\r\n                                    <mat-grid-tile>\r\n                                        <mat-form-field>\r\n                                            <mat-label>Min</mat-label>\r\n                                            <input matInput type=\"number\" min=\"2\" max=\"499\" formControlName=\"eventMinGuests\" placeholder=\"2\" required>\r\n                                        </mat-form-field>\r\n                                        </mat-grid-tile>\r\n                                    <mat-grid-tile>\r\n                                        <mat-form-field>\r\n                                            <mat-label>Max</mat-label>\r\n                                            <input matInput type=\"number\" min=\"2\" max=\"499\" formControlName=\"eventMaxGuests\" placeholder=\"499\" required>\r\n                                        </mat-form-field>\r\n                                        </mat-grid-tile>\r\n                                </mat-grid-list>\r\n        \r\n                                <mat-label>Tving på venteliste?</mat-label> <br>\r\n                                <mat-radio-group formControlName=\"eventQueue\">\r\n                                    <mat-radio-button name=\"eventQueue\" value=\"Ja\">Ja</mat-radio-button>\r\n                                    <mat-radio-button name=\"eventQueue\" value=\"Nej\">Nej</mat-radio-button>\r\n                                </mat-radio-group>\r\n                          </form>\r\n                      \r\n                </mat-expansion-panel>\r\n\r\n                <mat-expansion-panel>\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>\r\n                                Hvornår\r\n                            </mat-panel-title>\r\n                            <mat-panel-description>\r\n                                Ændre detaljer ved at klikke på kassen\r\n                            </mat-panel-description>\r\n                        </mat-expansion-panel-header>\r\n                          \r\n                        <form [formGroup]=\"thirdFormGroup\">\r\n                                <ng-template matStepLabel>Tidspunkt</ng-template>\r\n                                <label>Dato for eventet</label> <br>\r\n                                <mat-form-field>\r\n                                      <input matInput [matDatepicker]=\"picker\" formControlName=\"eventDate\" placeholder=\"Vælg en dato\">\r\n                                      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                      <mat-datepicker #picker></mat-datepicker>\r\n                                  </mat-form-field>\r\n      \r\n                              <br> <label>Tidspunkt for eventet</label> <br>\r\n                              <mat-grid-list cols=\"2\" rowHeight=70px>\r\n                                  <mat-grid-tile>\r\n                                      <mat-form-field>\r\n                                          <mat-label>Start</mat-label>\r\n                                          <input matInput type=\"time\" formControlName=\"eventStartTime\" required>\r\n                                      </mat-form-field>\r\n                                  </mat-grid-tile>\r\n                                  <mat-grid-tile>\r\n                                      <mat-form-field>\r\n                                          <mat-label>Slut</mat-label>\r\n                                          <input matInput type=\"time\" formControlName=\"eventEndTime\" required>\r\n                                      </mat-form-field>\r\n                                  </mat-grid-tile>\r\n                              </mat-grid-list>\r\n      \r\n                              <label>Tilmeldingsfrist</label> <br>\r\n                                <mat-form-field>\r\n                                      <mat-label>Dato</mat-label>\r\n                                      <input matInput [matDatepicker]=\"picker2\" formControlName=\"eventDeadlineDate\" placeholder=\"Vælg en deadline\">\r\n                                      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                                      <mat-datepicker #picker2></mat-datepicker>\r\n                                  </mat-form-field>\r\n      \r\n                                  <br> <label>Tilmeldingsfrist</label> <br>\r\n                                  <mat-form-field>\r\n                                      <mat-label>Tid</mat-label>\r\n                                      <input matInput type=\"time\" formControlName=\"eventDeadlineTime\" required> \r\n                                  </mat-form-field>\r\n \r\n                              </form>\r\n                          \r\n                    </mat-expansion-panel>\r\n\r\n                    <mat-expansion-panel>\r\n                            <mat-expansion-panel-header>\r\n                                <mat-panel-title>\r\n                                    Priser\r\n                                </mat-panel-title>\r\n                                <mat-panel-description>\r\n                                    Ændre detaljer ved at klikke på kassen\r\n                                </mat-panel-description>\r\n                            </mat-expansion-panel-header>\r\n                              \r\n                            <form [formGroup]=\"fourthFormGroup\">\r\n                                    <ng-template matStepLabel>Pris & Betaling</ng-template>\r\n                                    <mat-form-field>\r\n                                      <mat-label>Pris</mat-label>\r\n                                      <input type=\"number\" matInput placeholder=\"DKK,-\" formControlName=\"eventPrice\" required>\r\n                                    </mat-form-field>\r\n          \r\n                                    <mat-form-field>\r\n                                          <mat-label><fa name=\"tag\"></fa> Betalingsform</mat-label>\r\n                                          <mat-select formControlName=\"eventPaymentOption\" name=\"eventPaymentOption\" placeholder=\"Vælg emne\" required>\r\n                                              <mat-option value=\"Ingen\">Ingen</mat-option>\r\n                                              <mat-option value=\"Kontant\">Kontant</mat-option>\r\n                                              <mat-option value=\"Mobilepay\">Mobilepay</mat-option>\r\n                                              <mat-option value=\"Bankoverførelse\">Bankoverførelse</mat-option>\r\n                                          </mat-select> \r\n                                  </mat-form-field>\r\n          \r\n                                  <mat-form-field>\r\n                                          <mat-label><fa name=\"tag\"></fa> Hvornår betales der</mat-label>\r\n                                          <mat-select (selectionChange)=\"onItemChange($event.value)\" name=\"eventPaymentDue\" formControlName=\"eventPaymentDue\" placeholder=\"Vælg emne\" required>\r\n                                              <mat-option value=\"Aldrig\">Aldrig</mat-option>\r\n                                              <mat-option value=\"Efter en gæst tilmelder sig\">Efter en gæst tilmelder sig</mat-option>\r\n                                              <mat-option value=\"Kontant ved ankomst på dagen\">Kontant ved ankomst på dagen</mat-option>\r\n                                              <mat-option value=\"Dato\">Dato</mat-option>\r\n                                          </mat-select> \r\n                                  </mat-form-field>\r\n          \r\n                                  <label *ngIf=\"isPaymentDeadlineDate\">Dato for betaling</label> <br>\r\n                                    <mat-form-field *ngIf=\"isPaymentDeadlineDate\">\r\n                                          <input matInput [matDatepicker]=\"picker\" formControlName=\"eventDate\" placeholder=\"Vælg en dato\">\r\n                                          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                          <mat-datepicker #picker></mat-datepicker>\r\n                                  </mat-form-field>\r\n    \r\n                                  </form>\r\n                              \r\n                        </mat-expansion-panel>\r\n\r\n                        <mat-expansion-panel>\r\n                                <mat-expansion-panel-header>\r\n                                    <mat-panel-title>\r\n                                        Billede\r\n                                    </mat-panel-title>\r\n                                    <mat-panel-description>\r\n                                        Ændre detaljer ved at klikke på kassen\r\n                                    </mat-panel-description>\r\n                                </mat-expansion-panel-header>\r\n                                  \r\n                                <form [formGroup]=\"fifthFormGroup\">\r\n                                        <ng-template matStepLabel>Billede</ng-template>\r\n                                        <mat-card>\r\n                                              <label>Fil</label>\r\n                                              <input type=\"file\" formControlName=\"eventFile\"\r\n                                              matTooltip=\"Dette felt er valgfrit\">\r\n                                        </mat-card>\r\n                                      </form>\r\n                                  \r\n                            </mat-expansion-panel>\r\n                            <button [disabled]=\"hasUpdated\" (click)=\"onUpdateEvent()\" mat-raised-button color=\"primary\">Opdater event</button>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <p class=\"center\">-- Event wall with messages from users will be here. --</p>\r\n    </mat-card>\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/my-event/my-event.component.ts":
/*!************************************************!*\
  !*** ./src/app/my-event/my-event.component.ts ***!
  \************************************************/
/*! exports provided: MyEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyEventComponent", function() { return MyEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entity_event_event_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entity/event/event.model */ "./src/app/entity/event/event.model.ts");
/* harmony import */ var _event_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-firebase.service */ "./src/app/event-firebase.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _user_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-firebase.service */ "./src/app/user-firebase.service.ts");
/* harmony import */ var _geo_coding_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../geo-coding-api.service */ "./src/app/geo-coding-api.service.ts");
/* harmony import */ var _entity_helper_EventAddress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../entity/helper/EventAddress */ "./src/app/entity/helper/EventAddress.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyEventComponent = /** @class */ (function () {
    function MyEventComponent(efbs, authService, ufbs, _formBuilder, geoAPI, toast, router) {
        this.efbs = efbs;
        this.authService = authService;
        this.ufbs = ufbs;
        this._formBuilder = _formBuilder;
        this.geoAPI = geoAPI;
        this.toast = toast;
        this.router = router;
        this.hasUpdated = false;
        this.apiZipValue = "By";
        this.isPaymentDeadlineDate = false;
    }
    MyEventComponent.prototype.ngOnInit = function () {
        this.myEvent = this.efbs.myEventSelection;
        this.firstFormGroup = this._formBuilder.group({
            eventName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            eventDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            eventLocationStreet: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            eventLocationCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            eventLocationZip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            eventCategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            eventTargetGroup: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            eventMinAge: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            eventMaxAge: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            eventMinGuests: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            eventMaxGuests: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            eventGender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            eventQueue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            eventDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            eventStartTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            eventEndTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            eventDeadlineDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            eventDeadlineTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.fourthFormGroup = this._formBuilder.group({
            eventPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            eventPaymentOption: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            eventPaymentDue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            eventPaymentDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.fifthFormGroup = this._formBuilder.group({
            eventFile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.getDisplayData();
    };
    MyEventComponent.prototype.onItemChange = function (value) {
        if (value === "Dato") {
            this.isPaymentDeadlineDate = true;
        }
        else {
            this.isPaymentDeadlineDate = false;
        }
    };
    MyEventComponent.prototype.onUpdateEvent = function () {
        var _this = this;
        var e = this.formDataToModel();
        this.efbs.updateEvent(this.efbs.myEventSelection.key, e).then(function () {
            _this.toast.success('Dit event er blevet opdateret', '👍  ');
            _this.hasUpdated = true;
            setTimeout(function () {
                _this.hasUpdated = false;
            }, 2000);
        });
    };
    MyEventComponent.prototype.formDataToModel = function () {
        var event = new _entity_event_event_model__WEBPACK_IMPORTED_MODULE_1__["Event"]({});
        event.name = this.firstFormGroup.value.eventName;
        event.address = new _entity_helper_EventAddress__WEBPACK_IMPORTED_MODULE_7__["EventAddress"](this.firstFormGroup.value.eventLocationStreet, this.apiZipValue, this.firstFormGroup.value.eventLocationZip);
        event.category = this.firstFormGroup.value.eventCategory;
        event.description = this.firstFormGroup.value.eventDescription;
        event.dateStart = this.thirdFormGroup.value.eventDate;
        event.deadlineDate = this.thirdFormGroup.value.eventDeadlineDate;
        event.deadlineTime = this.thirdFormGroup.value.eventDeadlineTime;
        event.timeEnd = this.thirdFormGroup.value.eventEndTime;
        event.timeStart = this.thirdFormGroup.value.eventStartTime;
        event.paymentDate = this.fourthFormGroup.value.eventPaymentDate;
        event.paymentDue = this.fourthFormGroup.value.eventPaymentDue;
        event.paymentOption = this.fourthFormGroup.value.eventPaymentOption;
        event.price = this.fourthFormGroup.value.eventPrice;
        event.file = this.fifthFormGroup.value.eventFile;
        event.genderRatio = this.secondFormGroup.value.eventGender;
        event.hostRating = this.ufbs.getStorage().rating;
        event.maxAge = this.secondFormGroup.value.eventMaxAge;
        event.minAge = this.secondFormGroup.value.eventMinAge;
        event.maxGuests = this.secondFormGroup.value.eventMaxGuests;
        event.minGuests = this.secondFormGroup.value.eventMinGuests;
        event.queue = this.secondFormGroup.value.eventQueue;
        event.targetGroup = this.secondFormGroup.value.eventTargetGroup;
        event.participants = [{ username: this.ufbs.getStorage().username }];
        event.host = this.authService.afAuth.auth.currentUser.uid;
        if (event.hostRating === undefined) {
            event.hostRating = 0;
        }
        return event;
    };
    MyEventComponent.prototype.lookUpZip = function (event) {
        var _this = this;
        if (event.target.value.length > 3) {
            this.geoAPI.getZipFromCity(event.target.value).map(function (response) { return response.json(); }).subscribe(function (result) { return _this.apiZipValue = result.navn; });
        }
    };
    MyEventComponent.prototype.getDisplayData = function () {
        var event = this.efbs.myEventSelection;
        console.log(new Date(event.deadlineDate));
        console.log(new Date(event.dateStart));
        /* First form group*/
        this.firstFormGroup.get('eventName').setValue(event.name);
        this.firstFormGroup.get('eventLocationCity').setValue(event.address.city);
        this.firstFormGroup.get('eventLocationStreet').setValue(event.address.street);
        this.firstFormGroup.get('eventLocationZip').setValue(event.address.zip);
        this.firstFormGroup.get('eventDescription').setValue(event.description);
        this.firstFormGroup.get('eventCategory').setValue(event.category);
        /* Second form group */
        this.secondFormGroup.get('eventTargetGroup').setValue(event.targetGroup);
        this.secondFormGroup.get('eventMinAge').setValue(event.minAge);
        this.secondFormGroup.get('eventMaxAge').setValue(event.maxAge);
        this.secondFormGroup.get('eventMinGuests').setValue(event.minGuests);
        this.secondFormGroup.get('eventMaxGuests').setValue(event.maxGuests);
        this.secondFormGroup.get('eventGender').setValue(event.genderRatio);
        this.secondFormGroup.get('eventQueue').setValue(event.queue);
        /* Third form group */
        this.thirdFormGroup.get('eventDate').setValue(new Date(event.dateStart));
        this.thirdFormGroup.get('eventStartTime').setValue(event.timeStart);
        this.thirdFormGroup.get('eventEndTime').setValue(event.timeEnd);
        this.thirdFormGroup.get('eventDeadlineDate').setValue(new Date(event.deadlineDate));
        this.thirdFormGroup.get('eventDeadlineTime').setValue(event.deadlineTime);
        /* Fourth form group */
        this.fourthFormGroup.get('eventPrice').setValue(event.price);
        this.fourthFormGroup.get('eventPaymentOption').setValue(event.paymentOption);
        this.fourthFormGroup.get('eventPaymentDue').setValue(event.paymentDue);
        this.fourthFormGroup.get('eventPaymentDate').setValue(event.paymentDate);
        /* Fifth form group */
        this.fifthFormGroup.get('eventFile').setValue(event.file);
    };
    MyEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-event',
            template: __webpack_require__(/*! ./my-event.component.html */ "./src/app/my-event/my-event.component.html"),
            styles: [__webpack_require__(/*! ./my-event.component.css */ "./src/app/my-event/my-event.component.css")]
        }),
        __metadata("design:paramtypes", [_event_firebase_service__WEBPACK_IMPORTED_MODULE_2__["EventFirebaseService"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _user_firebase_service__WEBPACK_IMPORTED_MODULE_5__["UserFirebaseService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _geo_coding_api_service__WEBPACK_IMPORTED_MODULE_6__["GeoCodingApiService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], MyEventComponent);
    return MyEventComponent;
}());



/***/ }),

/***/ "./src/app/my-events/my-events.component.css":
/*!***************************************************!*\
  !*** ./src/app/my-events/my-events.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    color: snow;\r\n}\r\n\r\nmat-form-field {\r\n    width: 100%;\r\n}\r\n\r\n.error {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/my-events/my-events.component.html":
/*!****************************************************!*\
  !*** ./src/app/my-events/my-events.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<h1>Mine events</h1>\r\n<mat-card>\r\n    <mat-form-field id=\"search\" color=\"primary\">\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Søg\">\r\n    </mat-form-field>\r\n  \r\n  <div class=\"mat-elevation-z8\">\r\n      <button routerLink='/events' class=\"error\" mat-button color=\"primary\">{{error}}</button>\r\n      <table *ngIf=\"!isMobile && events.length > 0\" mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n  \r\n          <!--- Note that these columns can be defined in any order.\r\n                The actual rendered columns are set as a property on the row definition\" -->\r\n        \r\n          <!-- Title Column -->\r\n          <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Event </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n          </ng-container>\r\n        \r\n          <!-- City Column -->\r\n          <ng-container matColumnDef=\"address\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> By </th>\r\n            <td mat-cell *matCellDef=\"let element\">{{element.address.street}}, {{element.address.city}}, {{element.address.zip}}</td>\r\n          </ng-container>\r\n  \r\n          <!-- Category Column -->\r\n          <ng-container matColumnDef=\"category\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Kategori </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.category}} </td>\r\n          </ng-container>\r\n        \r\n          <!-- Distance Column -->\r\n          <ng-container matColumnDef=\"distance\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Afstand </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{10+10}} KM </td>\r\n          </ng-container>\r\n        \r\n          <!-- Gender Column -->\r\n          <ng-container matColumnDef=\"genderRatio\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Kønsfordeling </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.genderRatio}} </td>\r\n          </ng-container>\r\n        \r\n          <!-- Children Column -->\r\n          <ng-container matColumnDef=\"targetGroup\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Børn </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.targetGroup}} </td>\r\n          </ng-container>\r\n        \r\n          <!-- Participants Column -->\r\n          <ng-container matColumnDef=\"available\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Pladser </th>\r\n            <td mat-cell *matCellDef=\"let element\"> Ledig </td>\r\n          </ng-container>\r\n\r\n          <!-- Actions Column -->\r\n          <ng-container matColumnDef=\"actions\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n                <button (click)=\"onEditClick(element)\" routerLink=\"/my-event\" mat-button color=\"primary\">Rediger</button>\r\n                <button (click)=\"openDialog(element)\" mat-button color=\"warn\">Slet</button>\r\n            </td>\r\n          </ng-container>\r\n        \r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n  \r\n      <table *ngIf=\"isMobile\" mat-table [dataSource]=\"dataSourceMobile\" matSort class=\"mat-elevation-z8\">\r\n  \r\n            <!--- Note that these columns can be defined in any order.\r\n                  The actual rendered columns are set as a property on the row definition\" -->\r\n          \r\n            <!-- Title Column -->\r\n            <ng-container matColumnDef=\"name\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Event </th>\r\n              <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n            </ng-container>\r\n          \r\n            <!-- City Column -->\r\n            <ng-container matColumnDef=\"address\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> By </th>\r\n              <td mat-cell *matCellDef=\"let element\"> {{element.address}} </td>\r\n            </ng-container>\r\n          \r\n            <!-- Participants Column -->\r\n            <ng-container matColumnDef=\"available\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Pladser </th>\r\n              <td mat-cell *matCellDef=\"let element\"> Ledig </td>\r\n            </ng-container>\r\n\r\n            <!-- Actions Column -->\r\n          <ng-container matColumnDef=\"actions\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\r\n              <td mat-cell *matCellDef=\"let element\">\r\n                  <button (click)=\"onEditClick(element)\" routerLink=\"/my-event\" mat-button color=\"primary\">Rediger</button>\r\n                  <button (click)=\"openDialog(element)\" mat-button color=\"warn\">Slet</button>\r\n              </td>\r\n            </ng-container>\r\n          \r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumnsMobile\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumnsMobile;\"></tr>\r\n        </table>\r\n  \r\n    <mat-paginator *ngIf=\"!isMobile\" [pageSizeOptions]=\"[5, 10, 15, 20, 25]\"></mat-paginator>\r\n    <mat-paginator *ngIf=\"isMobile\" [pageSizeOptions]=\"[5, 10, 15, 20, 25]\"></mat-paginator>\r\n    \r\n  </div>\r\n  \r\n  <ngx-spinner\r\n  bdColor = \"rgba(51, 51, 51, 0.8)\"\r\n  size = \"large\"\r\n  color = \"#fff\"\r\n  type = \"square-loader\">\r\n  </ngx-spinner>\r\n  \r\n  \r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/my-events/my-events.component.ts":
/*!**************************************************!*\
  !*** ./src/app/my-events/my-events.component.ts ***!
  \**************************************************/
/*! exports provided: MyEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyEventsComponent", function() { return MyEventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _event_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-firebase.service */ "./src/app/event-firebase.service.ts");
/* harmony import */ var _mobile_detector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mobile-detector.service */ "./src/app/mobile-detector.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _user_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-firebase.service */ "./src/app/user-firebase.service.ts");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.component */ "./src/app/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyEventsComponent = /** @class */ (function () {
    function MyEventsComponent(efbs, mds, spinner, ufbs, dialog, authService) {
        var _this = this;
        this.efbs = efbs;
        this.mds = mds;
        this.spinner = spinner;
        this.ufbs = ufbs;
        this.dialog = dialog;
        this.authService = authService;
        this.isMobile = false;
        this.error = "";
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.displayedColumns = ['name', 'address', 'distance', 'category', 'genderRatio', 'targetGroup', 'available', 'actions'];
        this.dataSourceMobile = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.displayedColumnsMobile = ['name', 'address', 'available', 'actions'];
        this.events = [];
        this.efbs.getEventsByHost(this.authService.afAuth.auth.currentUser.uid).subscribe(function (res) {
            _this.events = res;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.events);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.dataSourceMobile = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.events);
            _this.dataSourceMobile.paginator = _this.paginator;
            _this.dataSourceMobile.sort = _this.sort;
            _this.spinner.hide();
        });
    }
    MyEventsComponent.prototype.ngOnInit = function () {
        this.spinner.show();
        this.isMobile = this.mds.check();
    };
    MyEventsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.events.length < 1) {
                _this.spinner.hide();
                _this.error = "Du har ikke oprettet et event endnu.";
            }
        }, 3000);
    };
    MyEventsComponent.prototype.onEditClick = function (element) {
        var e = element;
        this.efbs.myEventSelection = e;
    };
    MyEventsComponent.prototype.onDeleteClick = function (element) {
        this.efbs.deleteEvent(element.key);
    };
    MyEventsComponent.prototype.openDialog = function (element) {
        var dialogRef = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogComponent"], {
            width: '400px',
            data: { key: element.key, buttonNo: "For Guds skyld nej!", buttonYes: "Ja", dialogText: "Er du sikker på at du vil slette dette event?" }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], MyEventsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], MyEventsComponent.prototype, "sort", void 0);
    MyEventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-events',
            template: __webpack_require__(/*! ./my-events.component.html */ "./src/app/my-events/my-events.component.html"),
            styles: [__webpack_require__(/*! ./my-events.component.css */ "./src/app/my-events/my-events.component.css")]
        }),
        __metadata("design:paramtypes", [_event_firebase_service__WEBPACK_IMPORTED_MODULE_2__["EventFirebaseService"], _mobile_detector_service__WEBPACK_IMPORTED_MODULE_3__["MobileDetectorService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"], _user_firebase_service__WEBPACK_IMPORTED_MODULE_5__["UserFirebaseService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], MyEventsComponent);
    return MyEventsComponent;
}());



/***/ }),

/***/ "./src/app/my-profile/my-profile.component.css":
/*!*****************************************************!*\
  !*** ./src/app/my-profile/my-profile.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    color: snow;\r\n    text-align: center;\r\n}\r\n\r\n.mat-tab-profile {\r\n    background-color:#fff;\r\n    margin-top: 10px;\r\n}\r\n\r\nmat-form-field {\r\n    margin: 10px;\r\n}\r\n\r\nmat-slide-toggle {\r\n    margin: 10px;\r\n}\r\n\r\n.block-field {\r\n    display:block;\r\n    width: 50%;\r\n}\r\n\r\nmat-tab-group {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n/* Progress bar */\r\n\r\nmat-progress-bar {\r\n    width: 100%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display:block;\r\n    height:40px;\r\n}\r\n\r\n.alert {\r\n    text-align: center;\r\n}\r\n\r\nlabel, p, button {\r\n    margin: 10px;\r\n    display: block;\r\n}"

/***/ }),

/***/ "./src/app/my-profile/my-profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/my-profile/my-profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n    <h1>Min Profil</h1>\r\n\r\n    <mat-progress-bar \r\n    class=\"example-margin\"\r\n    [color]=\"color\"\r\n    [mode]=\"mode\"\r\n    [value]=\"value\">></mat-progress-bar>\r\n    \r\n    <!-- Desktop -->\r\n    <div class=\"row\">\r\n        \r\n        <mat-tab-group class=\"mat-tab-profile\">\r\n            <mat-tab label=\"Person Data\">\r\n\r\n                <mat-card>\r\n                    <form [formGroup]=\"personDataForm\">\r\n                    <mat-form-field class=\"block-field\">\r\n                            <input matInput id=\"name\" formControlName=\"firstName\" name=\"firstName\" placeholder=\"Fornavn\" type=\"text\" autofocus>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field>\r\n                            <input matInput id=\"lastname\" formControlName=\"lastName\" name=\"lastName\" placeholder=\"Efternavn\" type=\"text\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"block-field\">\r\n                            <input id=\"birthday\" formControlName=\"birthday\" matInput [matDatepicker]=\"picker\" placeholder=\"Fødselsdag\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #picker></mat-datepicker>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"block-field\">\r\n                        <mat-select placeholder=\"Køn\">\r\n                            <mat-option value=\"Mand\">Mand</mat-option>\r\n                            <mat-option value=\"Kvinde\">Kvinde</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                    </form>\r\n                    <mat-card-actions>\r\n                            <button mat-button color=\"primary\" (click)=\"updatePersonData(personDataForm.value)\">Opdater</button>\r\n                    </mat-card-actions>\r\n                </mat-card>\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Kontakt\">\r\n\r\n                <mat-card>\r\n                    <form [formGroup]=\"contactForm\">\r\n                        <mat-form-field class=\"block-field\">\r\n                            <input matInput matTooltip=\"8 cifre\" type=\"tel\" formControlName=\"phone\" placeholder=\"Telefon/mobil\"/>\r\n                        </mat-form-field>\r\n\r\n                        <mat-form-field>\r\n                            <input matInput type=\"text\" formControlName=\"street\" class=\"form-control\" id=\"inputAddress\" placeholder=\"Adresse\">\r\n                        </mat-form-field>\r\n\r\n                        <mat-form-field>\r\n                            <input matInput type=\"text\" formControlName=\"city\" class=\"form-control\" id=\"inputBy\" placeholder=\"By\">\r\n                        </mat-form-field>\r\n\r\n                        <mat-form-field>\r\n                            <input matInput type=\"text\" formControlName=\"zip\" class=\"form-control\" id=\"inputZip\" placeholder=\"Postnummer\">\r\n                        </mat-form-field>\r\n                    </form>\r\n                    <mat-card-actions>\r\n                            <button mat-button color=\"primary\" (click)=\"updateContact(contactForm.value)\">Opdater</button>\r\n                    </mat-card-actions>\r\n                </mat-card>  \r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Familie\">\r\n                <mat-card>\r\n                        <form [formGroup]=\"childrenForm\">\r\n                            <mat-form-field class=\"block-field\">\r\n                                <input (keyup)=\"displayBirthdayInput($event.target.value)\" matInput type=\"number\" formControlName=\"numberOfChildren\" placeholder=\"Antal børn\"/>\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field *ngFor=\"let child of frontEndModellerChildren; let i = index;\" class=\"block-field\">\r\n                                <input formControlName=\"{{child.formControlName}}\" matInput [matDatepicker]=\"i\" placeholder=\"{{child.view}}\" [attr.id]=\"dtPicker + i\">\r\n                                <mat-datepicker-toggle matSuffix [for]=\"i\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #i></mat-datepicker>   \r\n                                       \r\n                            </mat-form-field>\r\n\r\n\r\n                        </form>\r\n                        \r\n                </mat-card>\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Billeder\">\r\n                <mat-card>\r\n\r\n                    <div *ngIf=\"!hasImages\" class=\"ng-hide\">\r\n                        <div class=\"alert alert-warning\" role=\"alert\">\r\n                            <div *ngIf=\"!hasImages\" class=\"ng-hide\"></div>\r\n                            <strong>Hov!</strong> Der er ingen billeder oploadet.\r\n                        </div>\r\n                    </div>\r\n\r\n                    <mat-card>\r\n                       <user-image-gallery></user-image-gallery> \r\n                    </mat-card>\r\n\r\n                    <mat-card>\r\n                        <image-upload></image-upload>\r\n                    </mat-card>\r\n                \r\n                </mat-card>\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Indstillinger\">\r\n                <mat-card>\r\n\r\n                    <form [formGroup]=\"settingsForm\">\r\n                        \r\n                        \r\n                        <mat-label class=\"block-field\">Nye Arrangementer</mat-label>\r\n                        <mat-slide-toggle matInput formControlName=\"newsletterEvent\"\r\n                            (change)=\"changedNewsEvent()\"\r\n                            class=\"example-margin\"\r\n                            color=\"primary\"\r\n                            [checked]=\"newEvents\">{{newEvents ? trueText : falseText}}</mat-slide-toggle>\r\n                        \r\n                            <mat-label class=\"block-field\">Daglige notifikationer</mat-label>\r\n                            <mat-slide-toggle formControlName=\"newsletterDaily\"\r\n                            (change)=\"changedNewsDaily()\"\r\n                            class=\"example-margin\"\r\n                            color=\"primary\"\r\n                            [checked]=\"newsDaily\">{{newsDaily ? trueText : falseText}}</mat-slide-toggle>\r\n\r\n                            <mat-label class=\"block-field\">Ugentlige notifikationer</mat-label>\r\n                            <mat-slide-toggle formControlName=\"newsletterWeekly\"\r\n                            (change)=\"changedNewsWeekly()\"\r\n                            class=\"example-margin\"\r\n                            color=\"primary\"\r\n                            [checked]=\"newsWeekly\">{{newsWeekly ? trueText : falseText}}</mat-slide-toggle>\r\n                        \r\n                            <mat-card-actions>\r\n                                <button mat-button color=\"primary\" (click)=\"updateSettings(settingsForm.value)\">Opdater</button>\r\n                            </mat-card-actions>\r\n\r\n                    </form>\r\n\r\n                </mat-card>\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Deaktivering\">\r\n\r\n                <mat-card>\r\n                    <h4>Skjul/vis profil</h4>\r\n                    <button (click)=\"deactivateAccount(!state)\" mat-raised-button>{{activationText}}</button>\r\n\r\n                    <h4>Slet Profil</h4>\r\n                    <label *ngIf=\"usernameValidation === this.username\"> <strong>Advarsel:</strong> denne handling er permanent. Al credit, fremgang vil blive slettet og kan ikke gøres om</label>\r\n                    <form>\r\n                        <mat-form-field>\r\n                            <input (keyup)=\"usernameInput($event.target.value)\"  matTooltip=\"Bemærk at du skal tage højde for store og små bogstaver\" matInput placeholder=\"Indtast brugernavn\">\r\n                        </mat-form-field>\r\n                        <button *ngIf=\"usernameValidation === this.username\" (click)=\"deleteAccount()\" mat-raised-button color=\"warn\">Slet profil</button>\r\n                    </form>\r\n                    \r\n                </mat-card>\r\n            </mat-tab>\r\n\r\n\r\n        </mat-tab-group>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/my-profile/my-profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/my-profile/my-profile.component.ts ***!
  \****************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-firebase.service */ "./src/app/user-firebase.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _entity_user_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity/user/user */ "./src/app/entity/user/user.ts");
/* harmony import */ var _mobile_detector_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mobile-detector.service */ "./src/app/mobile-detector.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent(ufbs, authService, mds, toast) {
        this.ufbs = ufbs;
        this.authService = authService;
        this.mds = mds;
        this.toast = toast;
        this.activationError = "Profilen er ikke aktiv. Udfyld alle obligatoriske felter og/eller tryk aktiver i den sidste tab";
        //Progress Bar Material
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 0;
        //bufferValue= 75;
        this.isMobile = false;
        // Activation
        this.activationText = "";
        this.usernameValidation = "";
        // Subscription
        this.paidUntil = "Ikke betalt";
        //Family
        this.numberOfChildren = 0;
        this.maxChildren = 3;
        this.frontEndModellerChildren = [];
        //Settings
        this.newEvents = false;
        this.newsDaily = false;
        this.newsWeekly = false;
        this.trueText = "Yes";
        this.falseText = "No";
        this.username = "Indlæser...";
        this.email = "Indlæser...";
        this.personDataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            birthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        this.childrenForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            numberOfChildren: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            birthdayChild1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            birthdayChild2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            birthdayChild3: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.settingsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            newsletterEvent: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            newsletterDaily: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            newsletterWeekly: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.accountDeletionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            confirmationText: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    MyProfileComponent.prototype.ngOnInit = function () {
        this.isMobile = this.mds.check();
        this.getDisplayData();
        this.accountIsCompleted();
        this.hasImages = false;
    };
    MyProfileComponent.prototype.getDisplayData = function () {
        var _this = this;
        this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe(function (value) {
            var user = new _entity_user_user__WEBPACK_IMPORTED_MODULE_4__["User"](value);
            _this.username = user.username;
            _this.email = user.email;
            _this.state = user.isActivated;
            _this.activationText = _this.state ? "Deaktiver" : "Aktiver";
            var d = new Date(user.subscribed_until);
            _this.paidUntil = d.getDate().toString() + "-" + (d.getMonth() + 1).toString() + "-" + d.getUTCFullYear().toString();
        });
    };
    MyProfileComponent.prototype.updateProfile = function (formData) {
        var _this = this;
        this.ufbs.updateUser(formData, this.authService.afAuth.auth.currentUser.uid);
        this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe(function (value) {
            _this.ufbs.setStorage(new _entity_user_user__WEBPACK_IMPORTED_MODULE_4__["User"](value));
        });
        this.accountProgress();
    };
    MyProfileComponent.prototype.updateContact = function (formData) {
        var mergedObj = { phone: formData.phone, address: { street: formData.street, city: formData.city, zip: formData.zip } };
        this.updateProfile(mergedObj);
    };
    MyProfileComponent.prototype.updateChildren = function (formData) {
        var updatesObj = { numberOfChildren: formData.numberOfChildren };
        var appendObj = {};
        if (formData.numberOfChildren > 0) {
            appendObj = { children: { childOne: formData.birthdayChild1, childTwo: formData.birthdayChild2,
                    childThree: formData.birthdayChild3 } };
        }
        var mergedObj = Object.assign(updatesObj, appendObj);
        this.updateProfile(mergedObj);
    };
    MyProfileComponent.prototype.updateSettings = function (formData) {
        var updatesObj = { newsletter: { dailyNews: formData.newsletterDaily, weeklyNews: formData.newsletterWeekly,
                newEvents: formData.newsletterEvent } };
        this.updateProfile(updatesObj);
    };
    MyProfileComponent.prototype.updatePersonData = function (formData) {
        this.updateProfile(formData);
    };
    MyProfileComponent.prototype.accountProgress = function () {
        var _this = this;
        var count = 20;
        var id = this.authService.afAuth.auth.currentUser.uid;
        this.ufbs.getUserByID(id).subscribe(function (value) {
            count += 10 * Object.keys(value).length;
            count == 100 ? _this.ufbs.updateUser({ isActivated: true }, id) : _this.ufbs.updateUser({ isActivated: false }, id);
            _this.value = count;
        });
    };
    MyProfileComponent.prototype.accountIsCompleted = function () {
        var _this = this;
        this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe(function (value) {
            if (Object.keys(value).length >= 11) {
                _this.toast.success('Din profil er nu komplet.', '👍  ');
            }
            else {
                _this.toast.warning('Din profil er ikke aktiv. Du mangler at udfylde alle obligatoriske felter', 'Hov!');
            }
        });
    };
    MyProfileComponent.prototype.deactivateAccount = function (value) {
        this.ufbs.updateUser({ isActivated: value }, this.authService.afAuth.auth.currentUser.uid);
    };
    MyProfileComponent.prototype.deleteAccount = function () {
        this.ufbs.deleteUser(this.ufbs.getStorage().email);
    };
    MyProfileComponent.prototype.displayBirthdayInput = function (eventTargetValue) {
        this.numberOfChildren = eventTargetValue;
        this.frontEndModellerChildren = [];
        if (eventTargetValue <= this.maxChildren) {
            for (var i = 0; i < eventTargetValue; i++) {
                this.frontEndModellerChildren.push({ id: "kidBirthday" + (1 + i), formControlName: "birthdayChild" + (1 + i), matDatePicker: "pickerChild" + (1 + i), view: "Fødselsdag for barn" });
            }
        }
    };
    MyProfileComponent.prototype.changedNewsEvent = function () {
        this.newEvents = !this.newEvents;
    };
    MyProfileComponent.prototype.changedNewsDaily = function () {
        this.newsDaily = !this.newsDaily;
    };
    MyProfileComponent.prototype.changedNewsWeekly = function () {
        this.newsWeekly = !this.newsWeekly;
    };
    MyProfileComponent.prototype.usernameInput = function (input) {
        this.usernameValidation = input;
    };
    MyProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-profile',
            template: __webpack_require__(/*! ./my-profile.component.html */ "./src/app/my-profile/my-profile.component.html"),
            styles: [__webpack_require__(/*! ./my-profile.component.css */ "./src/app/my-profile/my-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_user_firebase_service__WEBPACK_IMPORTED_MODULE_1__["UserFirebaseService"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _mobile_detector_service__WEBPACK_IMPORTED_MODULE_5__["MobileDetectorService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], MyProfileComponent);
    return MyProfileComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/patch-notes/patch-notes.component.css":
/*!*******************************************************!*\
  !*** ./src/app/patch-notes/patch-notes.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    text-align: center;\r\n    color: snow;\r\n}"

/***/ }),

/***/ "./src/app/patch-notes/patch-notes.component.html":
/*!********************************************************!*\
  !*** ./src/app/patch-notes/patch-notes.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<landing-page-header *ngIf=\"!displayNavbar\"></landing-page-header>\r\n<app-navbar *ngIf=\"displayNavbar\"></app-navbar>\r\n\r\n<h1>Patch Notes</h1>\r\n<mat-card>\r\n\r\n    <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            09/11-2018\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            Test dokument\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n\r\n        <h4>Test dokument</h4>\r\n        <p>Vi har løst opgaver fra testdokumentet. De løste opgaver er markeret med grøn på dette Google docs\r\n          <a href=\"https://drive.google.com/open?id=1w43isJIXsU2dTWRCl1Qntha46nn2hSDNN5DXECY13co\">Test dokument</a>.\r\n        </p>\r\n\r\n        <h4></h4>\r\n        <p></p>\r\n\r\n      </mat-expansion-panel>\r\n\r\n    <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            02/11-2018\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            Firebase backend\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n\r\n        <h4>Julegave</h4>\r\n        <p>Guna har rykket sitet fra domænet fra singlen.dk/singlenetwork/ til singlen.dk. Begge virker p.t. (denne Patch Note)</p>\r\n\r\n        <h4>Tests af Firebase funktioner</h4>\r\n        <p>Vi har brugt tid på at teste at automatiske emails sendes til de rette modtagere og kan hente nødvendig data. Eksempelvis data såsom: score, antal events, dage til event starter.</p>\r\n        <p>Og at funktionerne reagere på de rette parametre og tjekker efter de rette kriterier. (2 dage før, en uge før, hvis der er rating så skriv denne mail (ellers skriv en anden) m.v.</p>\r\n        <h4>Status på Firebase functions</h4>\r\n        <p>Vi er nu 'færdige' med implementering af backend, så vi kan rykke videre til de andre presserende opgaver.</p>\r\n\r\n        <h5>Obs</h5>\r\n        <p>Til Henrik & Diana: i må gerne ligge jeres events ind ved at oprette dem igennem sitet. Brug jeres login og så ellers gå igang :)\r\n          På den måde er vi sikre på at det format jeres event data har er det rigtige. \r\n        </p>\r\n\r\n      </mat-expansion-panel>\r\n\r\n    <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            26/10-2019\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            Automatik\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n\r\n        <h4>Cron jobs</h4>\r\n        <p>Vi bruger <a href=\"https://cron-job.org\"></a> <fa name=\"link\"></fa> cron-job.org til at køre tidsbestemte routiner.</p>\r\n        <h4>Refactoring</h4>\r\n        <p>Kode opdateringer. Bl.a. til at redigere et event, vise dato.</p>\r\n        <h4>Firebase function: Månedens hopper</h4>\r\n        <p>Implementation af automatiseret routine der udvælger månedens hopper ud fra parametre der kan ændres. Default: flest events på en måned.</p>\r\n        <h4>Firebase function: Slettelse af event</h4>\r\n        <p>Alle deltagere orienteres hvis et event, som de deltager i, slettes af værten.</p>\r\n        <h4>Firebase function: Giv ekstra dage</h4>\r\n        <p>Systemet kan give en bruger ekstra dage til sit medlemsskab. Lige nu gives der for afholdt event og for månedens hopper.</p>\r\n        <h4>Firebase function: Husk at rate</h4>\r\n        <p>En funktion der håndterer at påminde deltagere om at rate. De får denne 24 timer efter et events afholdelsesdato</p>\r\n        <h4>Firebase function: Påmindelser</h4>\r\n        <p>Brugere orienteres henholdsvis en uge of 2 dage før et event finder sted.</p>\r\n\r\n        <h5>Obs</h5>\r\n        <p>Ved firebase funktioner, forståes der automatik. Altså emails der sendes ud til de korrekte modtager, når et event(programmering) affyrer. </p>\r\n\r\n      </mat-expansion-panel>\r\n\r\n    <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            19/10-2018\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            Automatik\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n\r\n        <h4>Firebase Cloud Functions</h4>\r\n        <p>Der er hul igennem til automatiserede funktioner, som kører når diverse events(programmering) affyrer.</p>\r\n        <h4>Function 1: Kontaktform</h4>\r\n        <p>Der er lavet en funktion som håndterer mails sendt fra kontaktformen [Kontakt]</p>\r\n        <h4>Function 2: Velkomstmail</h4>\r\n        <p>Håndterer mails der skal sendes til nye brugere, når de opretter sig.</p>\r\n        <h4>Function 3: Sletning af profil</h4>\r\n        <p>Håndterer mails der sendes når brugere de sletter deres profil.</p>\r\n        <h4>Function 4: Nyhedsbrev</h4>\r\n        <p>Giver admins evnen til at sende et nyhedsbrev ud til alle sitets brugere.</p>\r\n\r\n        <h5>Bemærk</h5>\r\n        <p>Dette er en kæmpe opgave, og vil formodentlig løbe over flere patch notes. Vi tester funktionerne internt.\r\n          Det vil på et senere tidspunkt være muligt at teste dem offentligt for sitets admins.\r\n        </p>\r\n      \r\n      </mat-expansion-panel>\r\n\r\n    <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            12/10-2018\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            Messenging, admin, refactor\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n\r\n        <h4>Messenging</h4>\r\n        <p>Inde på det enkelte event er der en væg, hvor brugerne kan skrive beskeder. Beskedens ejermand kan slette og værten kan slette.</p>\r\n        <h4>Forbedret sikkerhed</h4>\r\n        <p>Der er brugt tid på at implementerer sti beskyttelse, så kun autoriserede brugere kan få adgang til resourcer.</p>\r\n        <h4>Admin</h4>\r\n        <p>Der er lavet en tabel for brugertyper. Hvis man er admin kan man få adgang til admin panelet i footeren</p>\r\n        <h4>Newsletter</h4>\r\n        <p>Som admin kan man nu skrive nyhedsbreve ud. Dog bliver de ikke sendt ud endnu. Denne feature afhæner af cloud functions</p>\r\n        <h4>Toastr</h4>\r\n        <p>System der viser brugeren beskeder når der logges ind er implementeret. Det understøtte også tips/info, hvor der kunne være behov for det.</p>\r\n\r\n      </mat-expansion-panel>\r\n\r\n    <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            05/10-2018\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            Titel\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n\r\n        <h4>Betalingsflow</h4>\r\n        <p>Der er oprettet et element i menuen, hvor brugere kan betale, hvor PensoPay kan se hvordan flowet er.</p>\r\n        <h4>Forbedret sikkerhed</h4>\r\n        <p>Der er brugt tid på at forbedre login og autorisering.</p>\r\n        <h4>Responsive design forbedringer</h4>\r\n        <p>Vi har forbedret det responsive design så det er mere mobil venligt</p>\r\n        <h4>Navigations menu opdateringer</h4>\r\n        <p>Der er kommet nye felter i menuen, inklusiv rating. </p>\r\n        <h4>Dashboard opdateringer</h4>\r\n        <p>Nye events bliver vist i dashboard inklusive rating af værtens arrangementer.</p>\r\n        <h4>HTML opdateringer</h4>\r\n        <p>Deaktivering/aktivering af profil og sletning. Advarsels tekst m.fl.</p>\r\n\r\n      </mat-expansion-panel>\r\n\r\n    <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            28/09-2018\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            Events genbesøgt\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n\r\n        <h4>Opret et event</h4>\r\n        <p>Der kan oprettes events og disse kan findes i tabellen over alle events.</p>\r\n        <h4>Det enkelte Events</h4>\r\n        <p>Det er muligt at klikke på de enkelte events og komme ind på siden på dennes side, hvor der kan læses detaljer, se mødelister osv.</p>\r\n        <h4>Tilmelding/framelding</h4>\r\n        <p>Brugere kan tilmelde sig events og framelde sig events</p>\r\n        <h4>Rating</h4>\r\n        <p>Inde på de enkelte events kan brugere nu bedømme et arrangement. Der gives en score fra 1-5 og værtens totale score beregnes ved hver bedømmelse.</p>\r\n        <p>*En score gives for det enkelte event. En brugeres score er den totale sum af alle hans/hendes arrangementer / n, hvor n er antallet.</p>\r\n        <h4>Slette et event</h4>\r\n        <p>Der er nu muligt at slette sine egne arrangementer.</p>\r\n\r\n      </mat-expansion-panel>\r\n\r\n      <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              21/09-2018\r\n            </mat-panel-title>\r\n            <mat-panel-description>\r\n              Social login & event redigering \r\n            </mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n\r\n        <h4>Social Login</h4>\r\n        <p>Det er nu muligt at logge ind med Google/Facebook (og stadigvæk med oprettet konto email+password)</p>\r\n        <h4>Mine events</h4>\r\n        <p>Brugeren kan se en liste over de events, som kan selv er arrangør for.</p>\r\n        <h4>Mit event</h4>\r\n        <p>Ved at klikke på et event i listen over sine events, kan brugeren redigere eget event.</p>\r\n        <h4>Filtre</h4>\r\n        <p>Filtrene i filtervinduet virker nu på tabellen og der er kommet en ekstra indstilling: kategori</p>\r\n        <h4>HTML rettelser</h4>\r\n        <p>Footer opdateret, fyldtekst opdateret, favicon, responsive design problemer rettet</p>\r\n        \r\n      </mat-expansion-panel>\r\n\r\n        <mat-card-actions>\r\n          <a href=\"https://www.fenrirgamestudio.dk\" mat-button>FENRIR GAME STUDIO</a>\r\n        </mat-card-actions>\r\n          \r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/patch-notes/patch-notes.component.ts":
/*!******************************************************!*\
  !*** ./src/app/patch-notes/patch-notes.component.ts ***!
  \******************************************************/
/*! exports provided: PatchNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatchNotesComponent", function() { return PatchNotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PatchNotesComponent = /** @class */ (function () {
    function PatchNotesComponent(authService) {
        this.authService = authService;
        this.displayNavbar = false;
    }
    PatchNotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.afAuth.auth.onAuthStateChanged(function (user) {
            if (user) {
                _this.displayNavbar = true;
            }
        });
    };
    PatchNotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patch-notes',
            template: __webpack_require__(/*! ./patch-notes.component.html */ "./src/app/patch-notes/patch-notes.component.html"),
            styles: [__webpack_require__(/*! ./patch-notes.component.css */ "./src/app/patch-notes/patch-notes.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], PatchNotesComponent);
    return PatchNotesComponent;
}());



/***/ }),

/***/ "./src/app/payment/payment.component.css":
/*!***********************************************!*\
  !*** ./src/app/payment/payment.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    text-align: center;\r\n    color: snow;\r\n}\r\n\r\nmat-form-field, button {\r\n    margin: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/payment/payment.component.html":
/*!************************************************!*\
  !*** ./src/app/payment/payment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar>\r\n\r\n</app-navbar>\r\n<h1>{{title}}</h1>\r\n<mat-card>\r\n  \r\n  <mat-vertical-stepper #stepper>\r\n    <mat-step [stepControl]=\"firstFormGroup\">\r\n      <form [formGroup]=\"firstFormGroup\">\r\n        <ng-template matStepLabel>Vælg medlemstype</ng-template>\r\n        <mat-form-field>\r\n          <mat-label><fa name=\"tag\"></fa> Type</mat-label>\r\n          <mat-select (selectionChange)=\"selectionFormValue($event.value)\" formControlName=\"type\" name=\"payment type\" placeholder=\"Vælg emne\" required>\r\n            <mat-option value=\"\"></mat-option>\r\n            <mat-option value=\"Månedlig Abonnement\">Månedligt Abonnement</mat-option>\r\n            <mat-option value=\"1 Måneds Medlemsskab\">1 Måneds Medlemsskab</mat-option>\r\n          </mat-select> \r\n        </mat-form-field>\r\n        <div>\r\n          <button mat-button matStepperNext>Næste</button>\r\n        </div>\r\n      </form>\r\n    </mat-step>\r\n    <mat-step [stepControl]=\"secondFormGroup\">\r\n      <form [formGroup]=\"secondFormGroup\">\r\n        <ng-template matStepLabel>Vælg betalingsform</ng-template>\r\n        <mat-form-field>\r\n            <mat-label><fa name=\"tag\"></fa> Type</mat-label>\r\n            <mat-select (selectionChange)=\"cardFormValue($event.value)\" formControlName=\"card\" name=\"payment method\" placeholder=\"Vælg emne\" required>\r\n              <mat-option value=\"\"></mat-option>\r\n              <mat-option value=\"Visa/Dankort\">Visa/Dankort</mat-option>\r\n              <mat-option value=\"Mastercard\">Mastercard</mat-option>\r\n            </mat-select> \r\n          </mat-form-field>\r\n        <div>\r\n          <button mat-button matStepperPrevious>Tilbage</button>\r\n          <button mat-button matStepperNext>Næste</button>\r\n        </div>\r\n      </form>\r\n    </mat-step>\r\n    <mat-step>\r\n      <ng-template matStepLabel>Bekræft</ng-template>\r\n      <mat-card>\r\n        <h4>Oversigt</h4>\r\n        <p>Du har valgt <strong>{{selection}}</strong> </p>\r\n        <p>Du betaler med <strong>{{card}}</strong> </p>\r\n        <mat-checkbox\r\n        [(ngModel)]=\"checked\"\r\n        [(indeterminate)]=\"indeterminate\"\r\n        [labelPosition]=\"labelPosition\" \r\n        color=\"primary\">Jeg har læst og accepteret\r\n          <a routerLink='/privacy-policy'>handelsbetingelserne</a>\r\n        </mat-checkbox>\r\n      </mat-card>\r\n      <div>\r\n        <button mat-button matStepperPrevious>Tilbage</button>\r\n        <button mat-button color=\"warn\" (click)=\"stepper.reset()\">Start forfra</button>\r\n        <button [disabled]=\"!checked\" matTooltip=\"Når du trykker her vil du automatisk blive ført videre til vores betalingsplatform\" mat-raised-button color=\"primary\" matStepperNext>Bekræft</button>\r\n      </div>\r\n    </mat-step>\r\n  </mat-vertical-stepper>\r\n  \r\n  \r\n  <!-- Copyright 2018 Google Inc. All Rights Reserved.\r\n      Use of this source code is governed by an MIT-style license that\r\n      can be found in the LICENSE file at http://angular.io/license -->\r\n\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-firebase.service */ "./src/app/user-firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(_formBuilder, ufbs) {
        this._formBuilder = _formBuilder;
        this.ufbs = ufbs;
        this.selectOptions = ['Månedlig Abonnement', '1 Måneds Medlemsskab'];
        this.cardOptions = ['Visa/Dankort', 'Mastercard'];
        this.title = "Betaling";
        this.selection = "";
        this.card = "";
        this.checked = false;
    }
    PaymentComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            card: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            username: this.ufbs.getStorage().username,
            email: this.ufbs.getStorage().email,
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    PaymentComponent.prototype.selectionFormValue = function (s) {
        this.selection = s;
    };
    PaymentComponent.prototype.cardFormValue = function (c) {
        this.card = c;
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/app/payment/payment.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _user_firebase_service__WEBPACK_IMPORTED_MODULE_2__["UserFirebaseService"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/pipes/active-blocked.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/active-blocked.pipe.ts ***!
  \**********************************************/
/*! exports provided: ActiveBlockedPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveBlockedPipe", function() { return ActiveBlockedPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ActiveBlockedPipe = /** @class */ (function () {
    function ActiveBlockedPipe() {
    }
    ActiveBlockedPipe.prototype.transform = function (value) {
        return value ? 'Ja' : 'Nej';
    };
    ActiveBlockedPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'activeBlocked' })
    ], ActiveBlockedPipe);
    return ActiveBlockedPipe;
}());



/***/ }),

/***/ "./src/app/prices/prices.component.css":
/*!*********************************************!*\
  !*** ./src/app/prices/prices.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n}\r\n\r\nimg {\r\n    width: 100%;\r\n    height: auto;\r\n}"

/***/ }),

/***/ "./src/app/prices/prices.component.html":
/*!**********************************************!*\
  !*** ./src/app/prices/prices.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<landing-page-header *ngIf=\"!displayNavbar\"></landing-page-header>\r\n<app-navbar *ngIf=\"displayNavbar\"></app-navbar>\r\n\r\n<mat-card>\r\n  <mat-card>\r\n    <h2>Betalingsmuligheder</h2>\r\n    <img src=\"assets/images/cards.png\">\r\n  </mat-card>\r\n  <mat-card>\r\n    <h2>Medlemskab</h2>\r\n      <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n          <!--- Note that these columns can be defined in any order.\r\n                The actual rendered columns are set as a property on the row definition\" -->\r\n        \r\n          <!-- Position Column -->\r\n          <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef> Vare </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item.name | uppercase }} </td>\r\n          </ng-container>\r\n        \r\n          <!-- Name Column -->\r\n          <ng-container matColumnDef=\"price\">\r\n            <th mat-header-cell *matHeaderCellDef> Pris </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{ item.price }},- DKK </td>\r\n          </ng-container>\r\n        \r\n          <!-- Weight Column -->\r\n          <ng-container matColumnDef=\"type\">\r\n            <th mat-header-cell *matHeaderCellDef> Kategori </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item.type | uppercase}} </td>\r\n          </ng-container>\r\n        \r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n        \r\n  </mat-card>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/prices/prices.component.ts":
/*!********************************************!*\
  !*** ./src/app/prices/prices.component.ts ***!
  \********************************************/
/*! exports provided: PricesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricesComponent", function() { return PricesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ITEM_DATA = [
    { name: '1 måneds medlemsskab', price: 60, type: "engangsbeløb" },
    { name: 'Månedlig abonnement', price: 50, type: "månedlig subskription" },
];
var PricesComponent = /** @class */ (function () {
    function PricesComponent(authService) {
        this.authService = authService;
        this.displayedColumns = ['name', 'price', 'type'];
        this.dataSource = ITEM_DATA;
        this.displayNavbar = false;
    }
    PricesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.afAuth.auth.onAuthStateChanged(function (user) {
            if (user) {
                _this.displayNavbar = true;
            }
        });
    };
    PricesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prices',
            template: __webpack_require__(/*! ./prices.component.html */ "./src/app/prices/prices.component.html"),
            styles: [__webpack_require__(/*! ./prices.component.css */ "./src/app/prices/prices.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], PricesComponent);
    return PricesComponent;
}());



/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.css":
/*!*************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    margin: 10px;\r\n}"

/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.html":
/*!**************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<landing-page-header *ngIf=\"!displayNavbar\"></landing-page-header>\r\n<app-navbar *ngIf=\"displayNavbar\"></app-navbar>\r\n\r\n<mat-card>\r\n  <h2>Handelsbetingelser for SingleNetværket IVS</h2>\r\n  <mat-card>\r\n    <h4>SingleNetværket IVS</h4>\r\n    <p>Valbygårdsvej 44, sttv <br>\r\n        2500 Valby <br>\r\n        TLF: +45 6056 0018 <br>\r\n        CVR: 39557150 <br>\r\n    </p>\r\n  </mat-card>\r\n  <h3>Generelt</h3>\r\n  <p>SingleNetværket IVS stiller et abonnement baseret online tjeneste til rådighed på <a href=\"http://singlen.dk.\"><fa name=\"link\"></fa> http://singlen.dk.</a> Vilkårene er gældende mellem den enkelte bruger og SingleNetværket IVS.\r\n      Disse vilkår og betingelser for brug gælder for aftaler mellem SingleNetværket IVS og én fysisk person (herefter “Brugeren”) vedrørende Tjenesten. Kun personer, der er 18 år eller ældre og bor i Danmark, kan indgå en aftale med SingleNetværket IVS vedrørende Tjenesten.\r\n      Disse Betingelser udgør samlet den aftale, der er gældende mellem Brugeren og SingleNetværket IVS.\r\n      For at få adgang til Tjenesten, skal Brugeren læse og acceptere handelsbetingelserne.\r\n  </p>\r\n  <h3>Ydelsens omfang</h3>\r\n  <p>Tjenesten giver Brugeren adgang til SingleNetværket IVS's tjenester bestemt ved bestilling.\r\n  </p>\r\n  <h3>Adgang til tjenesten</h3>\r\n  <p>Brugeren skal for at få adgang til Tjenesten registrere en brugerkonto på portalen.</p>\r\n  <h3>Registrering og brugeradgang\r\n  </h3>\r\n  <p>Brugeren er ansvarlig for at sikre, at de angivne oplysninger er korrekte på registreringstidspunktet. Ved registrering må Brugeren kun give oplysninger vedrørende egne betalings- og kreditkort.\r\n      Ved registrering skal Brugeren angive et brugernavn og et password (herefter “Login Oplysninger”). Brugerens Login Oplysninger er personlige og må ikke bruges af andre med mindre andet er anført på produktet.\r\n      Brugeren skal opbevare Login Oplysningerne på et sikkert sted, således at andre ikke kan få uberettiget adgang til dem. Brugeren er ansvarlig for al brug af sin brugerkonto.\r\n      Hvis Brugeren får mistanke om ulovlig brug af Brugerens Login Oplysninger, skal Brugeren omgående underrette SingleNetværket IVS samt ændre sit password.\r\n  </p>\r\n  <h3>Gebyrer og Betaling</h3>\r\n  <p>Gebyrer for brug af Tjenesten skal betales i henhold til den til enhver tid gældende prisliste, der er tilgængelig på hjemmesiden.\r\n      Betaling for abonnementet sker forud hver måned.\r\n      Brugeren skal udføre betalingen for abonnementet via de af SingleNetværket IVS tilbudte betalingsmidler på hjemmesiden. Brugeren forpligter sig til at underskrive de nødvendige dokumenter, og til ved hver betalingsdato at have tilstrækkelige midler til betaling tilgængelige via det valgte betalingsmiddel.\r\n  </p>\r\n  <h3>Tilpasninger og ændringer</h3>\r\n  <p>SingleNetværket IVS forbeholder sig retten til at ændre gebyret og andre betingelser for Tjenesten. Ændringen skal meddeles til Brugeren senest tredive (30) dage inden ændringen træder i kraft. I tilfælde af sådanne ændringer er Brugeren berettiget til at opsige abonnementet med virkning fra den dag, hvor ændringen træder i kraft. Hvis Brugeren ikke opsiger abonnementet før ændringen træder i kraft, skal det betragtes som accept af ændringen. Ændringer, der er til åbenbar fordel for Brugeren, gælder med det samme uden opsigelsesret for Brugeren.</p>\r\n  <h3>Opsigelse af abonnement</h3>\r\n  <p>Opsigelse af Tjenesten kan ske ved udgang af betalings-perioden på 1 måned fra seneste betaling. For at opsige sin aftale skal man bruge det, på forsiden, angivede link\r\n      eller kontakte SingleNetværket IVS via info@singlen.dk\r\n  </p>\r\n  <h3>Betaling</h3>\r\n  <p>SingleNetværket IVS modtager online betalinger med Dankort, Visa/Dankort, Mastercard.\r\n      Betaling vil først blive trukket på din konto, når den fysiske vare afsendes eller det virtuelle produkt er oprettet med mindre andet er aftalt eller fremgår af din ordre.\r\n      Alle beløb på hjemmesiden er inklusiv moms.\r\n      Hjemmesiden bruger følgende valutaer til prissætning:\r\n      Denmark - Kroner (DKK)\r\n      SingleNetværket IVS benytter en sikker betalingsserver, der krypterer alle oplysninger med SSL protokol hvilket betyder din data er sikker og ikke kan læses af andre udefrakommende.\r\n      SingleNetværket IVS's egen hjemmeside bruger ligeledes kryptering med SSL protokol.\r\n  </p>\r\n  <h3>Fortrydelsesret</h3>\r\n  <p>Der gives 14 dages fuld returret på varer købt på hjemmesiden med mindre andet er aftalt eller fremgår af din ordre.\r\n      Den 14 dags periode starter den dag hvor ordren er leveret.\r\n      Eventuelle returneringsomkostninger afholder du selv.\r\n      Ønske om fortrydelse skal meddeles os senest 14 efter leveringen og være os i hænde seneste 14 dage efter vi er informeret om dit brug af fortrydelsesretten.\r\n      Ønske om brug af fortrydelsesret skal gives sendes på mail info@singlen.dk. I meddelelsen skal der gøres tydeligt opmærksom på dit ønske om brugen af fortrydelsesret.\r\n  </p>\r\n  <h3>Reklamationsret</h3>\r\n  <p>Der gives 2 års reklamationsret på produkter i henhold til den danske købelov. Reklamationsretten gælder for alle fejl i software, materiale og fabrikation.\r\n      Reklamation vedr. fejl og mangler skal meddeles til SingleNetværket IVS i rimelig tid efter varens modtagelse. \r\n      Her anses max. to måneder som rimelig tid, med mindre andet er aftalt.\r\n      Vi refunderer rimelige fragtomkostninger.\r\n      Reklamationen frafalder ved forkert eller ualmindelig betjening af produktet.\r\n      SingleNetværket IVS dækker returneringsomkostningerne i rimeligt omfang.\r\n      Ved returnering kontaktes virksomheden:\r\n  </p>\r\n  <mat-card>\r\n    <h4>SingleNetværket IVS</h4>\r\n    <p>Valbygårdsvej 44, sttv <br>\r\n        2500 Valby <br>\r\n        TLF: +45 6056 0018 <br>\r\n        Reklamationer modtages ikke hvis disse er sendt på efterkrav.\r\n    </p>\r\n  </mat-card>\r\n  <h3>Kunde- & Privatlivspolitik</h3>\r\n  <p>Vi videresælger ikke personlige oplysninger og videregiver ikke dine personlige oplysninger til andre, de er kun registreret i vores kundekartotek. Du kan til enhver tid få slettet dine oplysninger.\r\n      For at du kan indgå aftale med SingleNetværket IVS, har vi brug for følgende oplysninger:\r\n  </p>\r\n  <ul>\r\n    <li>Navn</li>\r\n    <li>Addresse</li>\r\n    <li>Telefonnummer</li>\r\n    <li>Email addresse</li>\r\n  </ul>\r\n  <p>Vi foretager registreringen af dine personoplysninger med det formål, at kunne levere varen til dig.\r\n      Personoplysningerne registreres hos SingleNetværket IVS og opbevares i op til fem år, hvorefter oplysningerne slettes.\r\n      Når der indsamles personoplysninger via vores hjemmeside, sikrer vi, at det altid sker ved afgivelse af dit udtrykkelige samtykke, således at du er informeret om præcis, hvilke oplysninger, der indsamles og hvorfor.\r\n      Direktøren og de ansatte for SingleNetværket IVS har adgang til de oplysninger, der registreres om dig.\r\n      Den dataansvarlige i SingleNetværket IVS er: Diana Ransgaard Sørensen\r\n      Vi opbevarer og transmitterer ikke kundeoplysninger krypteret.\r\n      Som registreret hos SingleNetværket IVS har du altid ret til at gøre indsigelse mod registreringen. Du har også ret til indsigt i, hvilke oplysninger, der er registreret om dig. Disse rettigheder har du efter Persondataloven og henvendelse i forbindelse hermed rettes til info@singlen.dk.\r\n  </p>\r\n  <h4>Cookies</h4>\r\n  <p>På <a href=\"http://singlen.dk\"><fa name=\"link\"></fa> http://singlen.dk</a> anvendes cookies med det formål at optimere hjemmesiden og dets funktionalitet, og dermed gøre besøget så nemt som muligt for dig.\r\n      Du kan til enhver tid slette cookies fra din computer, se vejledningen på <a href=\"http://thagaard.org/cookiehandtering\"><fa name=\"link\"></fa> thagaard.org/cookiehandtering/.</a>\r\n  </p>\r\n  <h4>Log-statistik</h4>\r\n  <p>Vi bruger en log-statistik på <a href=\"http://singlen.dk\"><fa name=\"link\"></fa> http://singlen.dk</a>, hvilket betyder, at et statistik-system opsamler information, som kan give et statistisk billede af, hvor mange besøgende vi har, hvor de kommer fra og hvor på websitet det forlades mv.\r\n      Logstatistikken anvendes kun med det formål, at optimere SingleNetværket IVS's hjemmeside.\r\n  </p>\r\n  <h3>Klagemuligheder</h3>\r\n  <p>Klager over produkter kan sendes til:</p>\r\n  <mat-card>\r\n    <h4>Konkurrence- og Forbrugerstyrelsens</h4>\r\n    <p>Carl Jacobsens Vej 35 <br>\r\n        2500 Valby <br>\r\n        <a href=\"http://www.forbrug.dk\"><fa name=\"link\"></fa> www.forbrug.dk</a> <br>\r\n        For EU-borgere uden for EU skal klager sendes via EU Kommissionens online klageplatform. <br>\r\n        ec.europa.eu <br>\r\n        Ved klage skal vores email adresse angives: info@singlen.dk samt hjemmesiden du har købt varen på. <br>\r\n        </p>\r\n  </mat-card>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.ts":
/*!************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.ts ***!
  \************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent(authService) {
        this.authService = authService;
        this.displayNavbar = false;
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.afAuth.auth.onAuthStateChanged(function (user) {
            if (user) {
                _this.displayNavbar = true;
            }
        });
    };
    PrivacyPolicyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'privacy-policy',
            template: __webpack_require__(/*! ./privacy-policy.component.html */ "./src/app/privacy-policy/privacy-policy.component.html"),
            styles: [__webpack_require__(/*! ./privacy-policy.component.css */ "./src/app/privacy-policy/privacy-policy.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "./src/app/rate-event/rate-event.component.css":
/*!*****************************************************!*\
  !*** ./src/app/rate-event/rate-event.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form, button {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    width: 50%;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nmat-form-field {\r\n    display: block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/rate-event/rate-event.component.html":
/*!******************************************************!*\
  !*** ./src/app/rate-event/rate-event.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<mat-card>\r\n\r\n      <form>\r\n\r\n        <mat-label>Rating</mat-label> <br>\r\n        <mat-form-field>\r\n            <mat-select placeholder=\"Vælg en score\" [formControl]=\"ratingForm\">\r\n              <mat-select-trigger>\r\n                  {{ratingForm.value}}\r\n              </mat-select-trigger>\r\n                <mat-option value=\"1\"><mat-icon>star</mat-icon></mat-option>\r\n                <mat-option value=\"2\"><mat-icon>star</mat-icon><mat-icon>star</mat-icon></mat-option>\r\n                <mat-option value=\"3\"><mat-icon>star</mat-icon><mat-icon>star</mat-icon><mat-icon>star</mat-icon></mat-option>\r\n                <mat-option value=\"4\"><mat-icon>star</mat-icon><mat-icon>star</mat-icon><mat-icon>star</mat-icon><mat-icon>star</mat-icon></mat-option>\r\n                <mat-option value=\"5\"><mat-icon>star</mat-icon><mat-icon>star</mat-icon><mat-icon>star</mat-icon><mat-icon>star</mat-icon><mat-icon>star</mat-icon></mat-option>\r\n              </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-label>Bemærkning</mat-label> <br>\r\n        <mat-form-field>\r\n          <textarea [formControl]=\"ratingFormText\" matInput placeholder=\"Dette felt er valgfrit\"\r\n            matTooltip=\"Du kan trække nede i højre hjørne for at forstørre tekstfeltet\">\r\n          </textarea>\r\n        </mat-form-field>\r\n\r\n      </form>\r\n\r\n  <mat-card>\r\n      <h4>Vejledning</h4>\r\n      <p><strong>1</strong> gives til eventet hvor mange ting gik galt. Det var nærmest lidt pinligt, du glæder dig \r\n        til at lægge oplevelsen bag dig. Karakteren anvendes også hvor der var bemærkelsesværdig dårlige overensstemmelse mellem pris og indhold.         \r\n      </p> <br>\r\n\r\n      <p><strong>2</strong> gives til eventet hvor mange ting gik galt. Det var nærmest lidt pinligt, du glæder dig \r\n        til at lægge oplevelsen bag dig. Karakteren anvendes også hvor der var bemærkelsesværdig dårlige overensstemmelse mellem pris og indhold.                 \r\n      </p> <br>\r\n\r\n      <p><strong>3</strong> gives for et fint arrangement, hvor der var god overensstemmelse mellem \r\n        beskrivelsen og indholdet. Du har dog svært ved at svinge dig op til at synes, det var fantastisk.                        \r\n      </p> <br>\r\n\r\n      <p><strong>4</strong> giver for et velgennemført og rigtigt fint arrangement. Du er gået glad og beriget hjem \r\n        efter eventet, hvor du føler, at du har haft en rigtigt god oplevelse.                \r\n      </p> <br>\r\n\r\n      <p><strong>5</strong> her synger englene, og du tænker, at det netop gennemførte event gerne må \r\n        bruges som reference for fremtidige events. Du skal dog ikke tænke 13-tal på den gamle skala, men vi er absolut på 12 på den nye karakterskala :-)                          \r\n      </p>\r\n      <mat-card-actions>\r\n        \r\n      </mat-card-actions>\r\n  </mat-card>\r\n\r\n  <button [disabled]=\"hasRated\" mat-raised-button (click)=\"rate(ratingForm.value, ratingFormText.value)\" color=\"primary\">Indsend bedømmelse</button>\r\n\r\n</mat-card>"

/***/ }),

/***/ "./src/app/rate-event/rate-event.component.ts":
/*!****************************************************!*\
  !*** ./src/app/rate-event/rate-event.component.ts ***!
  \****************************************************/
/*! exports provided: RateEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateEventComponent", function() { return RateEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-firebase.service */ "./src/app/user-firebase.service.ts");
/* harmony import */ var _event_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event-firebase.service */ "./src/app/event-firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rating_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rating.service */ "./src/app/rating.service.ts");
/* harmony import */ var _entity_rating_rating_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../entity/rating/rating.model */ "./src/app/entity/rating/rating.model.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RateEventComponent = /** @class */ (function () {
    function RateEventComponent(ufbs, efbs, route, rs, authService, toast, router) {
        var _this = this;
        this.ufbs = ufbs;
        this.efbs = efbs;
        this.route = route;
        this.rs = rs;
        this.authService = authService;
        this.toast = toast;
        this.router = router;
        this.ratingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.ratingFormText = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.hasRated = false;
        this.route.queryParams.subscribe(function (params) {
            _this.efbs.getEventByKey(params['key']).snapshotChanges().subscribe(function (res) {
                _this.event = Object.assign(res.payload.val());
                _this.event.key = res.key;
            });
        });
    }
    RateEventComponent.prototype.ngOnInit = function () {
    };
    RateEventComponent.prototype.rate = function (scoreValueFromForm, feedbackValueFromForm) {
        var _this = this;
        this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe(function (userSnapshot) {
            var r = new _entity_rating_rating_model__WEBPACK_IMPORTED_MODULE_6__["Rating"]();
            r.byUser = userSnapshot.username;
            r.feedback = feedbackValueFromForm;
            r.score = scoreValueFromForm;
            r.fk_event = _this.event.key;
            r.fk_host = _this.event.host;
            _this.rs.updateRating(r, r.byUser + r.fk_event);
        });
    };
    RateEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rate-event',
            template: __webpack_require__(/*! ./rate-event.component.html */ "./src/app/rate-event/rate-event.component.html"),
            styles: [__webpack_require__(/*! ./rate-event.component.css */ "./src/app/rate-event/rate-event.component.css")]
        }),
        __metadata("design:paramtypes", [_user_firebase_service__WEBPACK_IMPORTED_MODULE_2__["UserFirebaseService"], _event_firebase_service__WEBPACK_IMPORTED_MODULE_3__["EventFirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _rating_service__WEBPACK_IMPORTED_MODULE_5__["RatingService"], _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RateEventComponent);
    return RateEventComponent;
}());



/***/ }),

/***/ "./src/app/rating.service.ts":
/*!***********************************!*\
  !*** ./src/app/rating.service.ts ***!
  \***********************************/
/*! exports provided: RatingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingService", function() { return RatingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _node_modules_angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _entity_helper_json_converter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entity/helper/json-converter */ "./src/app/entity/helper/json-converter.ts");
/* harmony import */ var _user_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-firebase.service */ "./src/app/user-firebase.service.ts");
/* harmony import */ var _event_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-firebase.service */ "./src/app/event-firebase.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RatingService = /** @class */ (function () {
    function RatingService(afAuth, db, ufbs, efbs) {
        this.afAuth = afAuth;
        this.db = db;
        this.ufbs = ufbs;
        this.efbs = efbs;
        this.dbPath = '/ratings/';
        this.jsonConverter = new _entity_helper_json_converter__WEBPACK_IMPORTED_MODULE_3__["JsonConverter"]();
    }
    RatingService.prototype.getRecentRatingsForUserByID = function (id) {
        return this.db.list(this.dbPath, function (ref) { return ref.orderByChild('fk_host').equalTo(id); }).snapshotChanges().map(function (events) {
            return events.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    RatingService.prototype.getRatings = function () {
        return this.db.list(this.dbPath).snapshotChanges();
    };
    RatingService.prototype.insertRating = function (rating) {
        return this.db.list(this.dbPath).push(rating);
    };
    RatingService.prototype.updateRating = function (rating, key) {
        this.db.object(this.dbPath + key).update(rating);
    };
    RatingService.prototype.hasUserRatedTheEvent = function (eid) {
        return this.db.list(this.dbPath, function (ref) { return ref.orderByChild('fk_event').equalTo(eid); }).snapshotChanges();
    };
    RatingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _node_modules_angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _user_firebase_service__WEBPACK_IMPORTED_MODULE_4__["UserFirebaseService"], _event_firebase_service__WEBPACK_IMPORTED_MODULE_5__["EventFirebaseService"]])
    ], RatingService);
    return RatingService;
}());



/***/ }),

/***/ "./src/app/routing.module.ts":
/*!***********************************!*\
  !*** ./src/app/routing.module.ts ***!
  \***********************************/
/*! exports provided: routingModule, RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingModule", function() { return routingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _dummy_list_dummy_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dummy-list/dummy-list.component */ "./src/app/dummy-list/dummy-list.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _loggedin_dashboard_loggedin_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loggedin-dashboard/loggedin-dashboard.component */ "./src/app/loggedin-dashboard/loggedin-dashboard.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-profile/my-profile.component */ "./src/app/my-profile/my-profile.component.ts");
/* harmony import */ var _create_new_event_create_new_event_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-new-event/create-new-event.component */ "./src/app/create-new-event/create-new-event.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
/* harmony import */ var _terms_of_service_terms_of_service_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./terms-of-service/terms-of-service.component */ "./src/app/terms-of-service/terms-of-service.component.ts");
/* harmony import */ var _cookies_consent_cookies_consent_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cookies-consent/cookies-consent.component */ "./src/app/cookies-consent/cookies-consent.component.ts");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "./src/app/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _my_events_my_events_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./my-events/my-events.component */ "./src/app/my-events/my-events.component.ts");
/* harmony import */ var _prices_prices_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./prices/prices.component */ "./src/app/prices/prices.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _my_event_my_event_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./my-event/my-event.component */ "./src/app/my-event/my-event.component.ts");
/* harmony import */ var _patch_notes_patch_notes_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./patch-notes/patch-notes.component */ "./src/app/patch-notes/patch-notes.component.ts");
/* harmony import */ var _view_event_view_event_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./view-event/view-event.component */ "./src/app/view-event/view-event.component.ts");
/* harmony import */ var _rate_event_rate_event_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./rate-event/rate-event.component */ "./src/app/rate-event/rate-event.component.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./core/auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var _attended_events_attended_events_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./attended-events/attended-events.component */ "./src/app/attended-events/attended-events.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var routes = [
    { path: 'landing-page', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"] },
    { path: 'loggedin-dashboard', component: _loggedin_dashboard_loggedin_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["LoggedinDashboardComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'events', component: _events_events_component__WEBPACK_IMPORTED_MODULE_6__["EventsComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'my-profile', component: _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_7__["MyProfileComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'create-new-event', component: _create_new_event_create_new_event_component__WEBPACK_IMPORTED_MODULE_8__["CreateNewEventComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"] },
    { path: 'feedback', component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_11__["FeedbackComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"] },
    { path: 'terms-of-service', component: _terms_of_service_terms_of_service_component__WEBPACK_IMPORTED_MODULE_12__["TermsOfServiceComponent"] },
    { path: 'cookies-consent', component: _cookies_consent_cookies_consent_component__WEBPACK_IMPORTED_MODULE_13__["CookiesConsentComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'privacy-policy', component: _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_14__["PrivacyPolicyComponent"] },
    { path: 'my-events', component: _my_events_my_events_component__WEBPACK_IMPORTED_MODULE_15__["MyEventsComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'prices', component: _prices_prices_component__WEBPACK_IMPORTED_MODULE_16__["PricesComponent"] },
    { path: 'payment', component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_17__["PaymentComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'my-event', component: _my_event_my_event_component__WEBPACK_IMPORTED_MODULE_18__["MyEventComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'patch-notes', component: _patch_notes_patch_notes_component__WEBPACK_IMPORTED_MODULE_19__["PatchNotesComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'view-event', component: _view_event_view_event_component__WEBPACK_IMPORTED_MODULE_20__["ViewEventComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'rate-event', component: _rate_event_rate_event_component__WEBPACK_IMPORTED_MODULE_21__["RateEventComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'attended-events', component: _attended_events_attended_events_component__WEBPACK_IMPORTED_MODULE_24__["AttendedEventsComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'admin-module', loadChildren: function () { return _admin_admin_module__WEBPACK_IMPORTED_MODULE_22__["AdminModule"]; }, canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    {
        path: 'dummy-list',
        component: _dummy_list_dummy_list_component__WEBPACK_IMPORTED_MODULE_3__["DummyListComponent"]
    },
    { path: '',
        redirectTo: '/landing-page',
        pathMatch: 'full'
    },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
// export const ModuleRouting: ModuleWithProviders = RouterModule.forRoot(routes);
var routingModule = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes);
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/table-filter.service.ts":
/*!*****************************************!*\
  !*** ./src/app/table-filter.service.ts ***!
  \*****************************************/
/*! exports provided: TableFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFilterService", function() { return TableFilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableFilterService = /** @class */ (function () {
    function TableFilterService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    TableFilterService.prototype.onDistanceChange = function (distance) {
        this.distance = distance.toString();
        this.sendEvent(this.distance);
    };
    TableFilterService.prototype.onChildrenChange = function (children) {
        this.children = children ? "Kun med børn" : "Kun uden børn";
        this.sendEvent(this.children);
    };
    TableFilterService.prototype.onGenderChange = function (gender) {
        this.gender = gender;
        this.sendEvent(this.gender);
    };
    TableFilterService.prototype.onCategoryChange = function (category) {
        this.category = category;
        this.sendEvent(this.category);
    };
    TableFilterService.prototype.sendEvent = function (value) {
        this.subject.next(value);
    };
    TableFilterService.prototype.getEvent = function () {
        return this.subject.asObservable();
    };
    TableFilterService.prototype.clearFilters = function () {
        this.category = "";
        this.gender = "";
        this.children = "";
        this.distance = "";
        this.sendEvent("");
    };
    TableFilterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TableFilterService);
    return TableFilterService;
}());



/***/ }),

/***/ "./src/app/terms-of-service/terms-of-service.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/terms-of-service/terms-of-service.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    margin: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/terms-of-service/terms-of-service.component.html":
/*!******************************************************************!*\
  !*** ./src/app/terms-of-service/terms-of-service.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<landing-page-header *ngIf=\"!displayNavbar\"></landing-page-header>\r\n<app-navbar *ngIf=\"displayNavbar\"></app-navbar>\r\n\r\n<mat-card [innerHTML]=\"inputHTML\">\r\n            \r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/terms-of-service/terms-of-service.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/terms-of-service/terms-of-service.component.ts ***!
  \****************************************************************/
/*! exports provided: TermsOfServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfServiceComponent", function() { return TermsOfServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TermsOfServiceComponent = /** @class */ (function () {
    function TermsOfServiceComponent(http, authService) {
        this.http = http;
        this.authService = authService;
        this.displayNavbar = false;
    }
    TermsOfServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.readTosFile();
        this.authService.afAuth.auth.onAuthStateChanged(function (user) {
            if (user) {
                _this.displayNavbar = true;
            }
        });
    };
    TermsOfServiceComponent.prototype.readTosFile = function () {
        var _this = this;
        console.log("before");
        this.http.get('./assets/files/Retningslinjer.txt', { responseType: 'text' }).subscribe(function (data) {
            console.log("after");
            _this.inputHTML = _this.inputTextToHTML(data);
        });
        /*this.http.get('./assets/files/Retningslinjer.txt', { responseType: 'text' }).subscribe(data => {
    
                console.log("Hallo?");
                //this.inputHTML = data;
                //this.inputHTML = this.inputTextToHTML(data);
        }).unsubscribe(); */
    };
    TermsOfServiceComponent.prototype.inputTextToHTML = function (inputDoc) {
        var outputHTML = "<h2>";
        var temp = inputDoc.substring(0, inputDoc.indexOf("\n"));
        outputHTML += temp + "</h2>" + "<br>";
        inputDoc = inputDoc.replace(inputDoc.substring(0, temp.length + "\n".length), "");
        var count = 0;
        while (inputDoc.indexOf("\n") >= 0 && count < 100) {
            temp = inputDoc.substring(0, inputDoc.indexOf("\n"));
            if (temp.length <= "\n".length) {
                outputHTML += "<p></p>";
                if (temp.length == 0) {
                    if (inputDoc.length > 0) {
                        inputDoc = inputDoc.replace(inputDoc.substring(0, 1), "");
                    }
                    else {
                        inputDoc = "";
                    }
                }
                else {
                    if (inputDoc.length > 0) {
                        inputDoc = inputDoc.replace(inputDoc.substring(0, temp.length), "");
                    }
                    else {
                        inputDoc = "";
                    }
                }
            }
            else {
                //Search instead of contains
                if (temp.includes("§")) {
                    outputHTML += "<h3>" + temp + "</h3>" + "<br>";
                }
                else {
                    outputHTML += "<p>" + temp + "</p>";
                }
                if (inputDoc.length > 0) {
                    inputDoc = inputDoc.replace(inputDoc.substring(0, temp.length + "\n".length), "");
                }
                else {
                    inputDoc = "";
                }
            }
            count++;
        }
        return outputHTML;
    };
    TermsOfServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'terms-of-service',
            template: __webpack_require__(/*! ./terms-of-service.component.html */ "./src/app/terms-of-service/terms-of-service.component.html"),
            styles: [__webpack_require__(/*! ./terms-of-service.component.css */ "./src/app/terms-of-service/terms-of-service.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], TermsOfServiceComponent);
    return TermsOfServiceComponent;
}());



/***/ }),

/***/ "./src/app/transactional-email.service.ts":
/*!************************************************!*\
  !*** ./src/app/transactional-email.service.ts ***!
  \************************************************/
/*! exports provided: TransactionalEmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionalEmailService", function() { return TransactionalEmailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransactionalEmailService = /** @class */ (function () {
    function TransactionalEmailService(db, http) {
        this.db = db;
        this.http = http;
        this.path = "/messages/";
        this.to = 'SpicyMexican@superrito.com';
    }
    TransactionalEmailService.prototype.sendContactMail = function (formData) {
        var obj = { from: formData.email, name: formData.name, subject: formData.subject, mailText: formData.message };
        return this.http.post("https://us-central1-single-network.cloudfunctions.net/sendContactMail", obj);
    };
    TransactionalEmailService.prototype.sendNewsletter = function (formData) {
        var data = JSON.stringify({ username: formData.username, subject: formData.subject, mailMsg: formData.text });
        return this.http.post("https://us-central1-single-network.cloudfunctions.net/sendNewsletter", data);
    };
    TransactionalEmailService.prototype.test = function () {
        return this.http.get("https://us-central1-single-network.cloudfunctions.net/sendContactMail");
    };
    TransactionalEmailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], TransactionalEmailService);
    return TransactionalEmailService;
}());



/***/ }),

/***/ "./src/app/user-firebase.service.ts":
/*!******************************************!*\
  !*** ./src/app/user-firebase.service.ts ***!
  \******************************************/
/*! exports provided: UserFirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFirebaseService", function() { return UserFirebaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _node_modules_angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _entity_user_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entity/user/user */ "./src/app/entity/user/user.ts");
/* harmony import */ var _entity_helper_json_converter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entity/helper/json-converter */ "./src/app/entity/helper/json-converter.ts");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/esm5/web-storage.js");
/* harmony import */ var _user_role_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-role.service */ "./src/app/user-role.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Entity

// Helper classes

// Session storage


var UserFirebaseService = /** @class */ (function () {
    function UserFirebaseService(afAuth, db, session, urs) {
        this.afAuth = afAuth;
        this.db = db;
        this.session = session;
        this.urs = urs;
        this.dbPath = '/users/';
        this.jsonConverter = new _entity_helper_json_converter__WEBPACK_IMPORTED_MODULE_4__["JsonConverter"]();
    }
    // CRUD
    UserFirebaseService.prototype.getUsers = function () {
        this.usersObservable = this.getList(this.dbPath);
    };
    UserFirebaseService.prototype.getList = function (listPath) {
        return this.db.list(listPath).valueChanges();
    };
    /*
    getUserByID(id: string) {
      let path = this.dbPath + id;
      this.db.object(path).valueChanges().subscribe(data => {
        let user = this.jsonToObj(JSON.stringify(data));
        this.setStorage(user);
        return user;
      });
    } */
    UserFirebaseService.prototype.getUserByID = function (id) {
        return this.db.object(this.dbPath + id).valueChanges();
    };
    UserFirebaseService.prototype.getUserByIndex = function (idx) {
        var _this = this;
        var path = this.dbPath + "/" + idx;
        this.db.object(path).valueChanges().subscribe(function (data) {
            _this.setStorage(new _entity_user_user__WEBPACK_IMPORTED_MODULE_3__["User"](data));
        });
    };
    //Test passed
    UserFirebaseService.prototype.insertUser = function (user, id) {
        this.db.object(this.dbPath + id).update(user);
        this.urs.insertRole({ fk_id: id, type: this.urs.userTypes.MEMBER });
    };
    UserFirebaseService.prototype.updateUser = function (objwithUpdates, id) {
        this.db.object(this.dbPath + id).update(objwithUpdates);
    };
    UserFirebaseService.prototype.deleteUser = function (key) {
        var usersRef = this.db.list(this.dbPath);
        usersRef.remove(this.convertEmailToKey(key));
        this.afAuth.auth.currentUser.delete();
    };
    // Session storage
    UserFirebaseService.prototype.setStorage = function (user, expired) {
        if (expired === void 0) { expired = 0; }
        this.session.set("user", user, expired, 's');
    };
    UserFirebaseService.prototype.getStorage = function () {
        var user = this.session.get("user");
        return user;
    };
    UserFirebaseService.prototype.objToJSON = function (userObject) {
        return JSON.parse(JSON.stringify(userObject));
    };
    UserFirebaseService.prototype.jsonToObj = function (json) {
        var obj = this.jsonConverter.convertJsonToUserObj(json);
        return obj;
    };
    UserFirebaseService.prototype.convertEmailToKey = function (email) {
        return email.replace('.', '¤').replace('@', '%');
    };
    UserFirebaseService.prototype.convertKeyToEmail = function (key) {
        return key.replace('¤', '.').replace('%', '@');
    };
    UserFirebaseService.prototype.clearSession = function () {
        this.session.remove("user");
    };
    UserFirebaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _node_modules_angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            angular_web_storage__WEBPACK_IMPORTED_MODULE_5__["SessionStorageService"], _user_role_service__WEBPACK_IMPORTED_MODULE_6__["UserRoleService"]])
    ], UserFirebaseService);
    return UserFirebaseService;
}());



/***/ }),

/***/ "./src/app/user-image-gallery/user-image-gallery.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/user-image-gallery/user-image-gallery.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-image-gallery/user-image-gallery.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/user-image-gallery/user-image-gallery.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <br>\r\n    <!---\r\n    <button (click)=\"addRandomImage()\"><i class=\"fas fa-plus\" aria-hidden=\"true\"></i>&nbsp;&nbsp;Add image</button>\r\n    <button (click)=\"removeLastImage()\"><i class=\"fas fa-plus\" aria-hidden=\"true\"></i>&nbsp;&nbsp;Remove an image</button>\r\n    -->\r\n  \r\n    <ks-modal-gallery [id]=\"5\" [modalImages]=\"images\"[plainGalleryConfig]=\"plainGalleryGrid\">\r\n\r\n    </ks-modal-gallery>\r\n    \r\n</section>"

/***/ }),

/***/ "./src/app/user-image-gallery/user-image-gallery.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/user-image-gallery/user-image-gallery.component.ts ***!
  \********************************************************************/
/*! exports provided: UserImageGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserImageGalleryComponent", function() { return UserImageGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-modal-gallery */ "./node_modules/angular-modal-gallery/angular-modal-gallery.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserImageGalleryComponent = /** @class */ (function () {
    function UserImageGalleryComponent(galleryService) {
        this.galleryService = galleryService;
        this.imageIndex = 1;
        this.galleryId = 1;
        this.customPlainGalleryRowConfig = {
            strategy: angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["PlainGalleryStrategy"].CUSTOM,
            layout: new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["AdvancedLayout"](-1, true)
        };
        this.customPlainGalleryColumnConfig = {
            strategy: angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["PlainGalleryStrategy"].CUSTOM,
            layout: new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["AdvancedLayout"](-1, true)
        };
        this.customPlainGalleryRowDescConfig = {
            strategy: angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["PlainGalleryStrategy"].CUSTOM,
            layout: new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["AdvancedLayout"](-1, true)
        };
        this.plainGalleryRow = {
            strategy: angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["PlainGalleryStrategy"].ROW,
            layout: new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["LineLayout"]({ width: '80px', height: '80px' }, { length: 2, wrap: true }, 'flex-start')
        };
        this.plainGalleryRowSpaceAround = {
            strategy: angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["PlainGalleryStrategy"].ROW,
            layout: new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["LineLayout"]({ width: '50px', height: '50px' }, { length: 2, wrap: true }, 'space-around')
        };
        this.plainGalleryRowATags = {
            strategy: angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["PlainGalleryStrategy"].ROW,
            layout: new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["LineLayout"]({ width: '95px', height: '63px' }, { length: 4, wrap: true }, 'flex-start'),
            // when advanced is defined, additionalBackground: '50% 50%/cover' will be used by default.
            // I added this here, to be more explicit.
            advanced: { aTags: true, additionalBackground: '50% 50%/cover' }
        };
        this.plainGalleryColumn = {
            strategy: angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["PlainGalleryStrategy"].COLUMN,
            layout: new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["LineLayout"]({ width: '50px', height: '50px' }, { length: 3, wrap: true }, 'flex-start')
        };
        this.plainGalleryGrid = {
            strategy: angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["PlainGalleryStrategy"].GRID,
            layout: new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["GridLayout"]({ width: '80px', height: '80px' }, { length: 3, wrap: true })
        };
        this.images = [];
        this.imagesHtmlDescriptions = [
            new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](0, {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img1.jpg',
                extUrl: 'http://www.google.com'
            }),
            new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](1, {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img2.png',
                description: '<ol><li>This is</li><li>the description</li><li>number</li><li>2</li></ol>'
            }),
            new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](2, {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img3.jpg',
                description: 'Description 3',
                extUrl: 'http://www.google.com'
            }, {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/img3.png',
                title: 'custom title 2',
                alt: 'custom alt 2',
                ariaLabel: 'arial label 2'
            }),
            new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](3, {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img4.jpg',
                description: 'Description 4',
                extUrl: 'http://www.google.com'
            }),
            new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](4, {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img5.jpg'
            }, {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/img5.jpg'
            })
        ];
        this.imagesRect = [
            new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](0, {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/milan-pegasus-gallery-statue.jpg',
                description: 'Description 1'
            }, {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/t-milan-pegasus-gallery-statue.jpg'
            }),
            new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](1, {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/pexels-photo-47223.jpeg'
            }, {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/t-pexels-photo-47223.jpg'
            }),
            new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](2, {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/pexels-photo-52062.jpeg',
                description: 'Description 3'
            }, {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/t-pexels-photo-52062.jpg',
                description: 'Description 3'
            }),
            new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](3, {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/pexels-photo-66943.jpeg',
                description: 'Description 4'
            }, {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/t-pexels-photo-66943.jpg'
            }),
            new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](4, {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/pexels-photo-93750.jpeg'
            }, {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/t-pexels-photo-93750.jpg'
            }),
            new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](5, {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/pexels-photo-94420.jpeg',
                description: 'Description 6'
            }, {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/t-pexels-photo-94420.jpg'
            }),
            new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](6, {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/pexels-photo-96947.jpeg'
            }, {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/t-pexels-photo-96947.jpg'
            })
        ];
        this.imagesMixedSizes = [
            new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](0, {
                // modal
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/pexels-photo-135230.png',
                description: 'Description 1'
            }),
            new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](1, {
                // modal
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/pexels-photo-547115.jpeg'
            }),
            new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](2, {
                // modal
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/pexels-photo-556664.jpeg',
                description: 'Description 3'
            }),
            new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](3, {
                // modal
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/pexels-photo-787594.jpeg',
                description: 'Description 4'
            }),
            new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](4, {
                // modal
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/pexels-photo-803105.jpeg'
            })
        ];
        // example of images with small previews (they are different files) to show
        // loading spinners
        this.imagesForLoadingSpinner = [
            new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](0, {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/loading-spinner-samples/pexels-photo-74506.jpg'
            }, { img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/loading-spinner-samples/pexels-photo-74506-thumb.jpg' }),
            new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](1, {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/loading-spinner-samples/pexels-photo-106006.jpg'
            }, { img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/loading-spinner-samples/pexels-photo-106006-thumb.jpg' }),
            new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](2, {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/loading-spinner-samples/pexels-photo-464336.jpg'
            }, { img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/loading-spinner-samples/pexels-photo-464336-thumb.jpg' }),
            new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](3, {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/loading-spinner-samples/pexels-photo.jpg'
            }, { img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/loading-spinner-samples/pexels-photo-thumb.jpg' }),
            new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](4, {
                img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/loading-spinner-samples/traffic-highway-lights-night-56891.jpg'
            }, { img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/loading-spinner-samples/traffic-highway-lights-night-56891-thumb.jpg' })
        ];
        // array with a single image inside (the first one)
        this.singleImage = [this.images[0]];
        this.dotsConfig = {
            visible: false
        };
        this.customDescription = {
            strategy: angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["DescriptionStrategy"].ALWAYS_VISIBLE,
            imageText: 'Look this image ',
            numberSeparator: ' of ',
            beforeTextDescription: ' => '
        };
        this.customDescriptionStyle = {
            strategy: angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["DescriptionStrategy"].ALWAYS_VISIBLE,
            imageText: 'Look this image ',
            numberSeparator: ' of ',
            beforeTextDescription: ' => ',
            style: {
                bgColor: 'rgba(255,0,0,.5)',
                textColor: 'blue',
                marginTop: '3px',
                marginBottom: '0px',
                marginLeft: '5px',
                marginRight: '5px',
                position: 'absolute',
                top: '0px',
                height: '25px'
                // be careful to use width, in particular with % values
            }
        };
        this.customDescriptionHideIfEmpty = {
            strategy: angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["DescriptionStrategy"].HIDE_IF_EMPTY,
            imageText: 'Look this image ',
            numberSeparator: ' of ',
            beforeTextDescription: ' => '
        };
        this.customFullDescription = {
            strategy: angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["DescriptionStrategy"].ALWAYS_VISIBLE,
            // you should build this value programmaticaly with the result of (show)="..()" event
            customFullDescription: 'Custom description of the current visible image'
            // if customFullDescription !== undefined, all other fields will be ignored
            // imageText: '',
            // numberSeparator: '',
            // beforeTextDescription: '',
        };
        this.customFullDescriptionHidden = {
            strategy: angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["DescriptionStrategy"].ALWAYS_HIDDEN,
            // you should build this value programmaticaly with the result of (show)="..()" event
            customFullDescription: 'Custom description of the current visible image'
            // if customFullDescription !== undefined, all other fields will be ignored
            // imageText: '',
            // numberSeparator: '',
            // beforeTextDescription: '',
        };
        // customButtonsSize: ButtonSize = {
        //   width: 10,
        //   height: 10,
        //   unit: 'px'
        // };
        this.buttonsConfigDefault = {
            visible: true,
            strategy: angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonsStrategy"].DEFAULT
        };
        this.buttonsConfigSimple = {
            visible: true,
            strategy: angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonsStrategy"].SIMPLE
        };
        this.buttonsConfigAdvanced = {
            visible: true,
            strategy: angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonsStrategy"].ADVANCED
        };
        this.buttonsConfigFull = {
            visible: true,
            strategy: angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonsStrategy"].FULL
        };
        // default buttons but extUrl will open the link in a new tab instead of the current one
        // this requires to specify all buttons manually (also if they are not really custom)
        this.customButtonsConfigExtUrlNewTab = {
            visible: true,
            strategy: angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonsStrategy"].CUSTOM,
            buttons: [
                {
                    className: 'ext-url-image',
                    type: angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonType"].EXTURL,
                    extUrlInNewTab: true // <--- this is the important thing to understand this example
                },
                {
                    className: 'download-image',
                    type: angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonType"].DOWNLOAD
                },
                {
                    className: 'close-image',
                    type: angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonType"].CLOSE
                }
            ]
        };
        this.customButtonsFontAwesomeConfig = {
            visible: true,
            strategy: angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonsStrategy"].CUSTOM,
            buttons: [
                {
                    className: 'fas fa-plus white',
                    type: angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonType"].CUSTOM,
                    ariaLabel: 'custom plus aria label',
                    title: 'custom plus title',
                    fontSize: '20px'
                },
                {
                    className: 'fas fa-times white',
                    type: angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonType"].CLOSE,
                    ariaLabel: 'custom close aria label',
                    title: 'custom close title',
                    fontSize: '20px'
                },
                {
                    className: 'fas fa-download white',
                    type: angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonType"].DOWNLOAD,
                    ariaLabel: 'custom download aria label',
                    title: 'custom download title',
                    fontSize: '20px'
                },
                {
                    className: 'fas fa-external-link-alt white',
                    type: angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonType"].EXTURL,
                    ariaLabel: 'custom exturl aria label',
                    title: 'custom exturl title',
                    fontSize: '20px'
                }
            ]
        };
        this.previewConfigOneImage = {
            visible: true,
            number: 1
        };
        this.previewConfigNoArrows = {
            visible: true,
            arrows: false
        };
        this.previewConfigNoClickable = {
            visible: true,
            clickable: false
        };
        // TODO still not implemented
        this.previewConfigAlwaysCenter = {
            visible: true
        };
        this.previewConfigCustomSize = {
            visible: true,
            size: { width: '30px', height: '30px' }
        };
        this.accessibilityConfig = {
            backgroundAriaLabel: 'CUSTOM Modal gallery full screen background',
            backgroundTitle: 'CUSTOM background title',
            plainGalleryContentAriaLabel: 'CUSTOM Plain gallery content',
            plainGalleryContentTitle: 'CUSTOM plain gallery content title',
            modalGalleryContentAriaLabel: 'CUSTOM Modal gallery content',
            modalGalleryContentTitle: 'CUSTOM modal gallery content title',
            loadingSpinnerAriaLabel: 'CUSTOM The current image is loading. Please be patient.',
            loadingSpinnerTitle: 'CUSTOM The current image is loading. Please be patient.',
            mainContainerAriaLabel: 'CUSTOM Current image and navigation',
            mainContainerTitle: 'CUSTOM main container title',
            mainPrevImageAriaLabel: 'CUSTOM Previous image',
            mainPrevImageTitle: 'CUSTOM Previous image',
            mainNextImageAriaLabel: 'CUSTOM Next image',
            mainNextImageTitle: 'CUSTOM Next image',
            dotsContainerAriaLabel: 'CUSTOM Image navigation dots',
            dotsContainerTitle: 'CUSTOM dots container title',
            dotAriaLabel: 'CUSTOM Navigate to image number',
            previewsContainerAriaLabel: 'CUSTOM Image previews',
            previewsContainerTitle: 'CUSTOM previews title',
            previewScrollPrevAriaLabel: 'CUSTOM Scroll previous previews',
            previewScrollPrevTitle: 'CUSTOM Scroll previous previews',
            previewScrollNextAriaLabel: 'CUSTOM Scroll next previews',
            previewScrollNextTitle: 'CUSTOM Scroll next previews'
        };
        this.name = "" + _angular_core__WEBPACK_IMPORTED_MODULE_0__["VERSION"].full;
    }
    UserImageGalleryComponent.prototype.ngOnInit = function () {
    };
    UserImageGalleryComponent.prototype.openImageModalRow = function (image) {
        console.log('Opening modal gallery from custom plain gallery row, with image: ', image);
        var index = this.getCurrentIndexCustomLayout(image, this.images);
        this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, { layout: new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["AdvancedLayout"](index, true) });
    };
    UserImageGalleryComponent.prototype.openImageModalColumn = function (image) {
        console.log('Opening modal gallery from custom plain gallery column, with image: ', image);
        var index = this.getCurrentIndexCustomLayout(image, this.images);
        this.customPlainGalleryColumnConfig = Object.assign({}, this.customPlainGalleryColumnConfig, { layout: new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["AdvancedLayout"](index, true) });
    };
    UserImageGalleryComponent.prototype.openImageModalRowDescription = function (image) {
        console.log('Opening modal gallery from custom plain gallery row and description, with image: ', image);
        var index = this.getCurrentIndexCustomLayout(image, this.imagesRect);
        this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["AdvancedLayout"](index, true) });
    };
    UserImageGalleryComponent.prototype.onButtonBeforeHook = function (event) {
        console.log('onButtonBeforeHook ', event);
        if (!event || !event.button) {
            return;
        }
        // Invoked after a click on a button, but before that the related
        // action is applied.
        // For instance: this method will be invoked after a click
        // of 'close' button, but before that the modal gallery
        // will be really closed.
        if (event.button.type === angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonType"].DELETE) {
            // remove the current image and reassign all other to the array of images
            console.log('delete in app with images count ' + this.images.length);
            this.images = this.images.filter(function (val) { return event.image && val.id !== event.image.id; });
        }
    };
    UserImageGalleryComponent.prototype.onButtonAfterHook = function (event) {
        console.log('onButtonAfterHook ', event);
        if (!event || !event.button) {
            return;
        }
        // Invoked after both a click on a button and its related action.
        // For instance: this method will be invoked after a click
        // of 'close' button, but before that the modal gallery
        // will be really closed.
    };
    UserImageGalleryComponent.prototype.onCustomButtonBeforeHook = function (event, galleryId) {
        var _this = this;
        console.log('onCustomButtonBeforeHook with galleryId=' + galleryId + ' and event: ', event);
        if (!event || !event.button) {
            return;
        }
        // Invoked after a click on a button, but before that the related
        // action is applied.
        if (event.button.type === angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonType"].CUSTOM) {
            console.log('adding a new random image at the end');
            this.addRandomImage();
            setTimeout(function () {
                _this.galleryService.openGallery(galleryId, _this.images.length - 1);
            }, 0);
        }
    };
    UserImageGalleryComponent.prototype.onCustomButtonAfterHook = function (event, galleryId) {
        console.log('onCustomButtonAfterHook with galleryId=' + galleryId + ' and event: ', event);
        if (!event || !event.button) {
            return;
        }
        // Invoked after both a click on a button and its related action.
    };
    UserImageGalleryComponent.prototype.onImageLoaded = function (event) {
        // angular-modal-gallery will emit this event if it will load successfully input images
        console.log('onImageLoaded action: ' + angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Action"][event.action]);
        console.log('onImageLoaded result:' + event.result);
    };
    UserImageGalleryComponent.prototype.onVisibleIndex = function (event) {
        console.log('onVisibleIndex action: ' + angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Action"][event.action]);
        console.log('onVisibleIndex result:' + event.result);
    };
    UserImageGalleryComponent.prototype.onIsFirstImage = function (event) {
        console.log('onIsFirstImage onfirst action: ' + angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Action"][event.action]);
        console.log('onIsFirstImage onfirst result:' + event.result);
    };
    UserImageGalleryComponent.prototype.onIsLastImage = function (event) {
        console.log('onIsLastImage onlast action: ' + angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Action"][event.action]);
        console.log('onIsLastImage onlast result:' + event.result);
    };
    UserImageGalleryComponent.prototype.onCloseImageModal = function (event) {
        console.log('onClose action: ' + angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Action"][event.action]);
        console.log('onClose result:' + event.result);
        // reset custom plain gallery config
        this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, { layout: new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["AdvancedLayout"](-1, true) });
        this.customPlainGalleryColumnConfig = Object.assign({}, this.customPlainGalleryColumnConfig, { layout: new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["AdvancedLayout"](-1, true) });
        this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["AdvancedLayout"](-1, true) });
    };
    UserImageGalleryComponent.prototype.addRandomImage = function () {
        var imageToCopy = this.images[Math.floor(Math.random() * this.images.length)];
        var newImage = new angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](this.images.length - 1, imageToCopy.modal, imageToCopy.plain);
        this.images = this.images.concat([newImage]);
    };
    UserImageGalleryComponent.prototype.removeLastImage = function () {
        if (this.images.length > 1) {
            console.log("Remove Function called");
            this.images.pop();
            this.images = this.images.slice();
            console.log("Remaining images: " + this.images.length);
        }
    };
    UserImageGalleryComponent.prototype.openModalViaService = function (id, index) {
        console.log('opening gallery with index ' + index);
        this.galleryService.openGallery(id, index);
    };
    UserImageGalleryComponent.prototype.trackById = function (index, item) {
        return item.id;
    };
    UserImageGalleryComponent.prototype.getCurrentIndexCustomLayout = function (image, images) {
        return image ? images.indexOf(image) : -1;
    };
    UserImageGalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-image-gallery',
            template: __webpack_require__(/*! ./user-image-gallery.component.html */ "./src/app/user-image-gallery/user-image-gallery.component.html"),
            styles: [__webpack_require__(/*! ./user-image-gallery.component.css */ "./src/app/user-image-gallery/user-image-gallery.component.css")]
        }),
        __metadata("design:paramtypes", [angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["GalleryService"]])
    ], UserImageGalleryComponent);
    return UserImageGalleryComponent;
}());



/***/ }),

/***/ "./src/app/user-role.service.ts":
/*!**************************************!*\
  !*** ./src/app/user-role.service.ts ***!
  \**************************************/
/*! exports provided: UserRoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoleService", function() { return UserRoleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _node_modules_angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserRoleService = /** @class */ (function () {
    function UserRoleService(afAuth, db) {
        this.afAuth = afAuth;
        this.db = db;
        this.dbPath = '/user-roles/';
        this.userTypes = {
            ADMIN: "admin",
            MEMBER: "member",
            MODERATOR: "moderator"
        };
    }
    UserRoleService.prototype.getList = function () {
        return this.db.list(this.dbPath).snapshotChanges();
    };
    UserRoleService.prototype.insertRole = function (obj) {
        this.db.list(this.dbPath).push(obj);
    };
    UserRoleService.prototype.updateRole = function (obj, id) {
        this.db.object(this.dbPath + id).update(obj);
    };
    UserRoleService.prototype.flushSetup = function () {
        this.insertRole({ fk_id: "3BB4t1qL0mh0c55LfiTy55kdLhK2", type: "admin" });
        this.insertRole({ fk_id: "XxftCOedzEYwLBbcYkyTw1K4nts1", type: "admin" });
        this.insertRole({ fk_id: "yI9xT7NCsZh3pTS1DxBb8fvoXz62", type: "admin" });
        this.insertRole({ fk_id: "baKzGAMnzJPQ9EzJ73RrvG0iGR33", type: "member" });
    };
    UserRoleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _node_modules_angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], UserRoleService);
    return UserRoleService;
}());



/***/ }),

/***/ "./src/app/view-event/view-event.component.css":
/*!*****************************************************!*\
  !*** ./src/app/view-event/view-event.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mobileContainer {\r\n    margin-top: 20px;\r\n}\r\n\r\n.wall-img {\r\n    max-width: 50px;\r\n    max-height: 50px;\r\n    margin: 10px;\r\n}\r\n\r\n.round {\r\n    -webkit-border-top-left-radius: 1px;\r\n    -webkit-border-top-right-radius: 2px;\r\n    -webkit-border-bottom-right-radius: 3px;\r\n    -webkit-border-bottom-left-radius: 4px;\r\n  \r\n    -moz-border-radius-topleft: 1px;\r\n    -moz-border-radius-topright: 2px;\r\n    -moz-border-radius-bottomright: 3px;\r\n    -moz-border-radius-bottomleft: 4px;\r\n  \r\n    border-top-left-radius: 1px;\r\n    border-top-right-radius: 2px;\r\n    border-bottom-right-radius: 3px;\r\n    border-bottom-left-radius: 4px;\r\n}\r\n\r\nmat-card-title {\r\n    font-size: 16px;\r\n}\r\n\r\n.wall-timedate {\r\n    color: rgba(110,110,110, 1);\r\n    font-size: 12px;\r\n}\r\n\r\nbutton {\r\n    margin: 10px;\r\n}\r\n\r\n.usernameBtn {\r\n    margin: 0px !important;\r\n}\r\n\r\nmat-card {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.wall {\r\n    width: 90%;\r\n}\r\n\r\n.participants {\r\n    width: 48.7%;\r\n}\r\n\r\n#mat-tab-content-0-0 > div {\r\n    overflow: hidden !important;\r\n}\r\n\r\nmat-chip {\r\n    -webkit-transform: scale(0.8);\r\n            transform: scale(0.8);\r\n}"

/***/ }),

/***/ "./src/app/view-event/view-event.component.html":
/*!******************************************************!*\
  !*** ./src/app/view-event/view-event.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div *ngIf=\"!isMobile\">\r\n\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n              <mat-card>\r\n                  <mat-card-title>{{selectedEvent.name}}\r\n                    <mat-chip-list>\r\n                      <mat-chip color=\"primary\" selected><mat-icon>person</mat-icon> {{hostName}}</mat-chip>\r\n                    </mat-chip-list>\r\n                  </mat-card-title>\r\n                  <mat-card-subtitle><fa name=\"tag\"></fa> <span style=\"font-style:italic\">{{  selectedEvent.category }} </span><br><br>\r\n                    <p style=\"white-space: pre-line\">{{selectedEvent.description}}}</p>\r\n                  </mat-card-subtitle>\r\n                  <img src=\"/assets/images/event_placeholder.jpg\" mat-card-image>\r\n                  <mat-card-content>\r\n      \r\n                    <p><strong>Adresse:</strong><br> {{selectedEvent.address.street}} , {{selectedEvent.address.city}} , {{selectedEvent.address.zip}}</p>\r\n                    <p><strong>Dato</strong><br> Under udvikling</p>\r\n                    <p><strong>Kønsfordeling</strong><br> {{selectedEvent.genderRatio}}</p>\r\n                    <p><strong>Børn</strong><br> {{selectedEvent.targetGroup}}</p>\r\n                    <p><strong>Fra</strong><br> {{selectedEvent.minAge}} til {{selectedEvent.maxAge}}</p>\r\n                    <p><strong>Pladser</strong><br> {{selectedEvent.maxGuests}}</p>\r\n                    <p><strong>Pris</strong><br> {{selectedEvent.price}} DKK</p>\r\n                    <p><strong>Hvordan betales der: </strong><br> {{selectedEvent.paymentOption}}</p>\r\n                    <p><strong>Hvornår betales der:</strong><br> {{selectedEvent.paymentDue}}</p>\r\n                  </mat-card-content>\r\n                  <mat-card-actions>\r\n                    <button *ngIf=\"!isParticipating\" (click)=\"onAttend()\" mat-button color=\"primary\">Tilmeld</button>\r\n                    <button *ngIf=\"isParticipating\" (click)=\"onUnattend()\" mat-button color=\"warn\">Frameld</button>\r\n                    <button mat-button (click)=\"onRateClick()\">Bedøm dette event</button>\r\n                  </mat-card-actions>\r\n              </mat-card>\r\n          </div>\r\n          <div class=\"col\">\r\n              <mat-card class=\"wall\">\r\n                  <mat-card-title><h3>Væg</h3></mat-card-title>\r\n              \r\n                  <div *ngFor=\"let post of wall.posts; let idx = index\">\r\n                    <mat-card *ngIf=\"idx > 0\">\r\n                      <mat-card-title>\r\n                        <img class=\"wall-img round\" src=\"/assets/images/Logo.png\">\r\n                        <a routerLink=\"/view-profile/\">{{userNames[idx-1]}}</a>\r\n                        <p class=\"wall-timedate\">{{tempDate}}</p>\r\n                      </mat-card-title>\r\n                      <mat-card-content>{{post.message}}</mat-card-content>\r\n                      <mat-card-actions>\r\n                        <button *ngIf=\"post.fk_id === this.authService.afAuth.auth.currentUser.uid || this.selectedEvent.host === this.authService.afAuth.auth.currentUser.uid\" (click)=\"deleteWallPost(post)\" mat-button color=\"warn\">Slet</button>\r\n                      </mat-card-actions>\r\n                    </mat-card>\r\n                  </div>\r\n              \r\n                  <mat-card-actions>\r\n                    <button (click)=\"openWallPostDialog()\" mat-raised-button color=\"primary\">Svar</button>\r\n                  </mat-card-actions>\r\n              </mat-card>\r\n          </div>\r\n        </div>\r\n\r\n        <mat-card class=\"participants\">\r\n            <mat-tab-group>\r\n                <mat-tab label=\"Deltagere\">\r\n                  <mat-list>\r\n                      <mat-list-item *ngFor=\"let participant of participantsDisplayNames\">\r\n                        <button class=\"usernameBtn\" color=\"primary\" mat-button><mat-icon>person</mat-icon>{{participant}}</button>\r\n                      </mat-list-item>\r\n                  </mat-list>\r\n                </mat-tab>\r\n                <mat-tab label=\"Venteliste\">\r\n                  <mat-list>\r\n                    <p *ngIf=\"inQueue.length < 1\">Der er ingen på ventelisten.</p>\r\n                  </mat-list>\r\n                </mat-tab>\r\n              </mat-tab-group>\r\n        </mat-card>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"isMobile\">\r\n  <mat-card class=\"mobileContainer\">\r\n          <mat-card-title>{{selectedEvent.name}}</mat-card-title>\r\n          <mat-card-subtitle><fa name=\"tag\"></fa> {{  selectedEvent.category }} <br><br>\r\n            {{selectedEvent.description}}\r\n          </mat-card-subtitle>\r\n          <img src=\"../../singlenetwork/assets/images/event_placeholder.jpg\" mat-card-image>\r\n          <mat-card-content>\r\n\r\n            <p><strong>Adresse:</strong><br> {{selectedEvent.address.street}} , {{selectedEvent.address.city}} , {{selectedEvent.address.zip}}</p>\r\n            <p><strong>Dato</strong><br> Under udvikling</p>\r\n            <p><strong>Kønsfordeling</strong><br> {{selectedEvent.genderRatio}}</p>\r\n            <p><strong>Børn</strong><br> {{selectedEvent.targetGroup}}</p>\r\n            <p><strong>Fra</strong><br> {{selectedEvent.minAge}} til {{selectedEvent.maxAge}}</p>\r\n            <p><strong>Pladser</strong><br> {{selectedEvent.maxGuests}}</p>\r\n            <p><strong>Pris</strong><br> {{selectedEvent.price}} DKK</p>\r\n            <p><strong>Hvordan betales der: </strong><br> {{selectedEvent.paymentOption}}</p>\r\n            <p><strong>Hvornår betales der:</strong><br> {{selectedEvent.paymentDue}}</p>\r\n          </mat-card-content>\r\n          <mat-card-actions>\r\n            <button *ngIf=\"!isParticipating\" (click)=\"onAttend()\" mat-button color=\"primary\">Tilmeld</button>\r\n            <button *ngIf=\"isParticipating\" (click)=\"onUnattend()\" mat-button color=\"warn\">Frameld</button>\r\n            <button mat-button (click)=\"onRateClick()\" [routerLink]=\"['/rate-event']\">Bedøm dette event</button>\r\n          </mat-card-actions>\r\n  </mat-card>\r\n\r\n  <mat-card class=\"mobileContainer\">\r\n      <mat-tab-group>\r\n          <mat-tab label=\"Deltagere\">\r\n            <mat-list>\r\n                <mat-list-item *ngFor=\"let participant of participantsDisplayNames\">\r\n                  <button color=\"primary\" mat-button><mat-icon>person</mat-icon>{{participant}}</button>\r\n                </mat-list-item>\r\n            </mat-list>\r\n          </mat-tab>\r\n          <mat-tab label=\"Venteliste\">\r\n            <mat-list>\r\n              <p *ngIf=\"inQueue.length < 1\">Der er ingen på ventelisten.</p>\r\n               </mat-list>\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n  </mat-card>\r\n\r\n  <mat-card *ngFor=\"let post of wall.posts; let idx = index\">\r\n      <mat-card-title>\r\n        <img class=\"wall-img round\" src=\"../../singlenetwork/assets/images/Logo.png\">\r\n        <a routerLink=\"/view-profile/\">{{userNames[idx]}}</a>\r\n        <p class=\"wall-timedate\">{{tempDate}}</p>\r\n      </mat-card-title>\r\n      <mat-card-content>{{post.message}}</mat-card-content>\r\n      <mat-card-actions>\r\n        <button *ngIf=\"post.fk_id === this.authService.afAuth.auth.currentUser.uid || this.selectedEvent.host === this.authService.afAuth.auth.currentUser.uid\" (click)=\"deleteWallPost(idx)\" mat-button color=\"warn\">Slet</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/view-event/view-event.component.ts":
/*!****************************************************!*\
  !*** ./src/app/view-event/view-event.component.ts ***!
  \****************************************************/
/*! exports provided: ViewEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEventComponent", function() { return ViewEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _entity_event_event_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entity/event/event.model */ "./src/app/entity/event/event.model.ts");
/* harmony import */ var _event_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event-firebase.service */ "./src/app/event-firebase.service.ts");
/* harmony import */ var _user_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-firebase.service */ "./src/app/user-firebase.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _mobile_detector_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mobile-detector.service */ "./src/app/mobile-detector.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _entity_user_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../entity/user/user */ "./src/app/entity/user/user.ts");
/* harmony import */ var _wall_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../wall.service */ "./src/app/wall.service.ts");
/* harmony import */ var _entity_wall_wall_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../entity/wall/wall.model */ "./src/app/entity/wall/wall.model.ts");
/* harmony import */ var _entity_wall_wall_post_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../entity/wall/wall-post.model */ "./src/app/entity/wall/wall-post.model.ts");
/* harmony import */ var _create_wall_post_create_wall_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../create-wall-post/create-wall-post.component */ "./src/app/create-wall-post/create-wall-post.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ViewEventComponent = /** @class */ (function () {
    function ViewEventComponent(route, efbs, ufbs, router, md, authService, ws, dialog, toast) {
        var _this = this;
        this.route = route;
        this.efbs = efbs;
        this.ufbs = ufbs;
        this.router = router;
        this.md = md;
        this.authService = authService;
        this.ws = ws;
        this.dialog = dialog;
        this.toast = toast;
        this.isMobile = false;
        this.selectedEvent = new _entity_event_event_model__WEBPACK_IMPORTED_MODULE_2__["Event"]({});
        this.pKey = "";
        this.participantsDisplayNames = [];
        this.participantsData = [];
        this.inQueue = [];
        // Wall
        this.wall = new _entity_wall_wall_model__WEBPACK_IMPORTED_MODULE_10__["Wall"]({});
        this.wallKey = "";
        this.userNames = [];
        this.tempDate = new Date().toLocaleString();
        this.hostName = "...HENTER VÆRTSNAVN...";
        // Test
        this.isParticipating = false;
        this.route.queryParams.subscribe(function (params) {
            var key = params['key'];
            _this.key = key;
            /* Event */
            _this.efbs.getEventByKey(key).snapshotChanges().subscribe(function (then) {
                _this.selectedEvent = new _entity_event_event_model__WEBPACK_IMPORTED_MODULE_2__["Event"](then.payload.val());
                _this.participantsData = [];
                _this.participantsDisplayNames = [];
                for (var property in _this.selectedEvent.participants) {
                    for (var value in _this.selectedEvent.participants[property]) {
                        _this.participantsDisplayNames.push(_this.selectedEvent.participants[property][value]);
                        _this.participantsData.push({ key: property, username: _this.selectedEvent.participants[property][value] });
                    }
                }
                /* Participation limited to one signup. */
                if (_this.getParticipantKey() !== "Not Found") {
                    _this.isParticipating = true;
                }
                _this.getHostNameFromUID(_this.selectedEvent.host).then(function (value) {
                    console.log(typeof value);
                    _this.hostName = value;
                });
            });
            /* Wall */
            _this.ws.getWallByKey(_this.key).subscribe(function (snapshot) {
                _this.wall.posts = [];
                snapshot.forEach(function (value) {
                    _this.wall.fk_event = value.fk_event;
                    _this.wallKey = value.key;
                    var subPosts = [];
                    Object.values(value.posts).forEach(function (property) {
                        subPosts.push(property);
                    });
                    var idx = 0;
                    Object.keys(value.posts).forEach(function (k) {
                        _this.wall.posts.push(Object.assign(subPosts[idx], { key: k }));
                        idx++;
                    });
                });
                _this.updateDisplayForWall();
            });
        });
    }
    ViewEventComponent.prototype.ngOnInit = function () {
        this.isMobile = this.md.check();
    };
    ViewEventComponent.prototype.getParticipantKey = function () {
        var result = "Not Found";
        for (var i = 0; i < this.participantsData.length; i++) {
            if (this.participantsData[i].username === this.ufbs.getStorage().username) {
                return this.participantsData[i].key;
            }
        }
        return result;
    };
    ViewEventComponent.prototype.removeParticipant = function () {
        var _this = this;
        this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe(function (snapshot) {
            var u = new _entity_user_user__WEBPACK_IMPORTED_MODULE_8__["User"](snapshot);
            for (var i = 0; i < _this.participantsData.length; i++) {
                if (_this.participantsData[i].username === u.username) {
                    _this.participantsData.splice(i, 1);
                    _this.participantsDisplayNames.splice(i, 1);
                }
            }
        });
    };
    ViewEventComponent.prototype.onAttend = function () {
        this.efbs.joinEvent(this.key, this.ufbs.getStorage().username);
        this.isParticipating = true;
    };
    ViewEventComponent.prototype.onUnattend = function () {
        this.efbs.leaveEvent(this.key, this.getParticipantKey());
        this.removeParticipant();
        this.isParticipating = false;
    };
    ViewEventComponent.prototype.onRateClick = function () {
        var _this = this;
        var navigationExtras = {
            queryParams: {
                "key": this.key
            }
        };
        this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe(function (userSnapshot) {
            var u = new _entity_user_user__WEBPACK_IMPORTED_MODULE_8__["User"](userSnapshot);
            if (_this.participantsDisplayNames.includes(u.username)) {
                _this.router.navigate(['/rate-event'], navigationExtras);
            }
            else {
                _this.toast.warning('Du kan ikke rate et event, som du ikke har deltaget i', 'Hov!');
            }
        });
    };
    ViewEventComponent.prototype.createWallPost = function (formData) {
        this.ws.insertPost(formData, this.key);
    };
    ViewEventComponent.prototype.openWallPostDialog = function () {
        var dialogRef = this.dialog.open(_create_wall_post_create_wall_post_component__WEBPACK_IMPORTED_MODULE_12__["CreateWallPostComponent"], {
            width: '500px',
            data: { fk_wall: this.wallKey }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    ViewEventComponent.prototype.deleteWallPost = function (postObj) {
        //this.wall.posts.splice(idx, 1);
        this.ws.deletePost(this.wallKey, Object.assign(postObj, _entity_wall_wall_post_model__WEBPACK_IMPORTED_MODULE_11__["WallPost"]));
    };
    ViewEventComponent.prototype.updateDisplayForWall = function () {
        var _this = this;
        /* Display usernames */
        this.userNames = [];
        this.wall.posts.forEach(function (post) {
            _this.ufbs.getUserByID(post.fk_id).subscribe(function (u) {
                _this.userNames.push(u.username);
            });
        });
    };
    ViewEventComponent.prototype.getHostNameFromUID = function (uid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.ufbs.getUserByID(uid).subscribe(function (snapshot) {
                resolve(snapshot.username);
            });
        });
    };
    ViewEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-event',
            template: __webpack_require__(/*! ./view-event.component.html */ "./src/app/view-event/view-event.component.html"),
            styles: [__webpack_require__(/*! ./view-event.component.css */ "./src/app/view-event/view-event.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _event_firebase_service__WEBPACK_IMPORTED_MODULE_3__["EventFirebaseService"],
            _user_firebase_service__WEBPACK_IMPORTED_MODULE_4__["UserFirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _mobile_detector_service__WEBPACK_IMPORTED_MODULE_6__["MobileDetectorService"], _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _wall_service__WEBPACK_IMPORTED_MODULE_9__["WallService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"]])
    ], ViewEventComponent);
    return ViewEventComponent;
}());



/***/ }),

/***/ "./src/app/wall.service.ts":
/*!*********************************!*\
  !*** ./src/app/wall.service.ts ***!
  \*********************************/
/*! exports provided: WallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallService", function() { return WallService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _node_modules_angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WallService = /** @class */ (function () {
    function WallService(afAuth, db) {
        this.afAuth = afAuth;
        this.db = db;
        this.dbPath = '/walls/';
    }
    WallService.prototype.getList = function () {
        return this.db.list(this.dbPath).snapshotChanges();
    };
    WallService.prototype.insertWall = function (wallObj) {
        this.db.list(this.dbPath).push(wallObj);
    };
    WallService.prototype.deleteWall = function (key) {
        this.db.list(this.dbPath).remove(key);
    };
    WallService.prototype.getWallByKey = function (key) {
        var path = this.dbPath;
        return this.db.list(path, function (ref) { return ref.orderByChild('fk_event').equalTo(key); }).snapshotChanges().map(function (snapshot) {
            return snapshot.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    WallService.prototype.insertPost = function (postsObj, key) {
        this.db.list(this.dbPath + key + "/posts/").push(postsObj);
    };
    WallService.prototype.deletePost = function (wallKey, postObj) {
        this.db.list(this.dbPath + wallKey + "/posts/").remove(postObj.key);
    };
    WallService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _node_modules_angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], WallService);
    return WallService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCsm5yBkPuTL7XHFZj8JHy0eHVXfTeWG24",
        authDomain: "single-network.firebaseapp.com",
        databaseURL: "https://single-network.firebaseio.com",
        projectId: "single-network",
        storageBucket: "gs://single-network.appspot.com",
        messagingSenderId: "822295237709"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Angular\SingleNetwork\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map