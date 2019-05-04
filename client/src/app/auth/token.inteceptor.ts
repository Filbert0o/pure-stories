import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';

// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  private authService: AuthService;

  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.authService) {
      this.authService = this.injector.get(AuthService);
    }

    const token = this.authService.accessToken;
    console.log('token', token);


    if (localStorage.getItem('access_token')) {
      const headers = {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      };
      const dupRequest = request.clone({
        setHeaders: headers,
      });
      return next.handle(dupRequest);
    } else {
      return next.handle(request);
    }

  }

}


// import { Injectable } from '@angular/core';
// import { AuthService } from './auth.service';
// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { catchError, tap } from 'rxjs/operators';
// @Injectable()
// // providedIn: 'root'
// export class InterceptService {
//   constructor(private authService: AuthService) {}

//   // intercept request and add token
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // modify request
//     request = request.clone({
//       setHeaders: {
//         Authorization: `Bearer ${localStorage.getItem('accessToken')}`
//       }
//     });

//     console.log('----request----');
//     console.log(request);
//     console.log('--- end of request---');
//     return next.handle(request).pipe(
//       tap(
//         (event) => {
//           if (event instanceof HttpResponse) {
//             console.log(' all looks good,', 'status:', event.status);
//             // http response status code
//             // console.log(event.status);
//           }
//         },
//         (error) => {
//           // http response status code
//           console.log('----response----');
//           console.error('status code:');
//           console.error(error.status);
//           console.error(error.message);
//           console.log('--- end of response---');
//         }
//       )
//     );
//   }
// }
