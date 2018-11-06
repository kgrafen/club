
// import { Injectable } from '@angular/core';
// import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import { EventsComponent } from './events/events.component';

// export interface DeactivationGuarded {
//   canDeactivate(nextState: string): Observable<boolean> | Promise<boolean> | boolean;
// }

// @Injectable()
// export class CanDeactivateGuard implements CanDeactivate<any> {

//   canDeactivate(component: EventsComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     console.log("Navigation guard");
//     console.log(route.params);
//     console.log(state.url);
//     return component.canDeactivate() || window.confirm("Er du sikker på at du vil forlade denne side?");
//   }

// }