import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree,Resolve } from '@angular/router';
import {Observable, of} from 'rxjs';

// export interface CanComponentDeactivate {
//   canDeactivate: () => boolean;
// }

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate,CanDeactivate<any>,CanLoad,CanActivateChild,Resolve<any>  {

  constructor(private r:Router) { }
  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean {
    return confirm("You have unsaved changes. Do you really want to leave?");
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return confirm("Can enter this page?");
  }
  canLoad(route:Route,segments:UrlSegment[]):boolean{
    return confirm("Do you want to load this module?");
  }
  
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return confirm("Can enter this child route?");
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    console.log("Fetching data before navigating to the route...");
    return of({ message: "Resolved data" }); // Simulating an API call
  }
  }