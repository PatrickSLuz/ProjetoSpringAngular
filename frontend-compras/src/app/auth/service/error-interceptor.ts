import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { AuthenticationService } from '../service/authentication.service';
import { catchError } from 'rxjs/operators';
import { UserService } from 'src/app/user/service/user.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService,
        private userService: UserService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(erro => {
            if (erro.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }

            if (erro.status === 409) {
                this.userService.showMessage("Login ou E-mail já cadastrados. Verifique!!");
            }

            if (erro.status === 400) {
                this.userService.showMessage("Dados incorretos. Verifique!!");
            }

            const error = erro.error.message || erro.statusText;
            return throwError(error);
        }))
    }
}