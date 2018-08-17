import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DummyListComponent} from './dummy-list/dummy-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { LoggedinDashboardComponent } from './loggedin-dashboard/loggedin-dashboard.component';
import { EventsComponent } from './events/events.component';
import { MyProfileComponent } from './my-profile/my-profile.component';


const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'loggedin-dashboard', component: LoggedinDashboardComponent },
  { path: 'events', component: EventsComponent },
  { path: 'my-profile', component: MyProfileComponent },
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