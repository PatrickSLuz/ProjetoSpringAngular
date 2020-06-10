import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { AuthenticationService } from '../service/authentication.service';
import { catchError } from 'rxjs/operators';
import { MessageService } from 'src/app/service/message.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService,
        private msgService: MessageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(erro => {
            if (erro.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }

            if (erro.status === 409) {
                this.msgService.showMessage("Login ou E-mail já cadastrados. Verifique!!");
            }

            if (erro.status === 400) {
                this.msgService.showMessage("Dados incorretos. Verifique!!");
            }

            if (erro.status === 500) {
                this.msgService.showMessage("Houve um erro. Tente novamente!!");
            }

            const error = erro.error.message || erro.statusText;
            return throwError(error);
        }))
    }
}