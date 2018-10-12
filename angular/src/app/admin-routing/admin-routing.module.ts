import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { AdminNewsletterComponent } from '../admin-newsletter/admin-newsletter.component';
import { AuthGuard } from '../core/auth.guard';

const routes: Routes = [
  /*
  {path: '', redirectTo: 'admin-dashboard', pathMatch:'full'},
  {path: 'admin-dashboard', component: AdminDashboardComponent},
  {path: 'admin-newsletter', component: AdminNewsletterComponent},
  */
  
  { 
    path:'', component: AdminDashboardComponent, children: [
      {path: '', redirectTo: 'admin-newsletter', pathMatch:'full', canActivate: [AuthGuard]},
      {path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard]},
      {path: 'admin-newsletter', component: AdminNewsletterComponent, canActivate: [AuthGuard]}
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AdminRoutingModule { }
