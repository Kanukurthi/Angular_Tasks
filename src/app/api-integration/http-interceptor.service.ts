import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {
  //intercept method which have httprequest which like app is sending get/post request in generic request and http handler acts a  middleware carry this request to next to chain and return it observable way the response.
  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    //we are using clone because httprequest is immutable so by using clone we get original request copy and add the custom headers
    const cloned=req.clone({
      //content-type describes the data in the application in the form of json.
      setHeaders:{
        'Content-Type':'application/json',
        'Authorization':'Bearer token-placeholder'
      }
    });
    return next.handle(cloned); // returns the cloned request to next in the http pipeline
  }

  
}
