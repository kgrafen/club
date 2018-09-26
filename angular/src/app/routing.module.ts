import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DummyListComponent} from './dummy-list/dummy-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { LoggedinDashboardComponent } from './loggedin-dashboard/loggedin-dashboard.component';
import { EventsComponent } from './events/events.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { CreateNewEventComponent } from './create-new-event/create-new-event.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TermsOfServiceComponent} from './terms-of-service/terms-of-service.component';
import { CookiesConsentComponent } from './cookies-consent/cookies-consent.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { PricesComponent } from './prices/prices.component';
import { PaymentComponent } from './payment/payment.component';
import { MyEventComponent } from './my-event/my-event.component';
import { PatchNotesComponent } from './patch-notes/patch-notes.component';
import { ViewEventComponent } from './view-event/view-event.component';

const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'loggedin-dashboard', component: LoggedinDashboardComponent },
  { path: 'events', component: EventsComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'create-new-event', component: CreateNewEventComponent },
  { path: 'about', component: AboutComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'terms-of-service', component: TermsOfServiceComponent },
  { path: 'cookies-consent', component: CookiesConsentComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'my-events', component: MyEventsComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'my-event', component: MyEventComponent },
  { path: 'patch-notes', component: PatchNotesComponent },
  { path: 'view-event', component: ViewEventComponent },
  {
    path: 'dummy-list',
    component: DummyListComponent,
    data: { title: 'Dummy List' }
  },
  { path: '',
    redirectTo: '/landing-page',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}