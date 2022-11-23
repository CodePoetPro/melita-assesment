import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(this.addAuthToken(request)).pipe(
            catchError(error => {
                if (error instanceof HttpErrorResponse && error.status === 401){
                    if(!!request.url.includes('logout')) this.authService.logout()
                    return throwError(error);
                }
            })
          );
    }

    addAuthToken(request: HttpRequest<any>) {
        if (!!request.url.includes('login')) {
            const token = this.authService.getToken();
            return request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            })
        } else {
            return request;
        }
    }
}