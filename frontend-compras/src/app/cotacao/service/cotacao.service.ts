import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from 'src/app/auth/service/authentication.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CotacaoModel } from '../model/cotacao-model';

@Injectable({
  providedIn: 'root'
})
export class CotacaoService {


  url = environment.baseUrl + "/cotacao";

  constructor(private http: HttpClient,
    private authService: AuthenticationService) { }

  create(cotacao: CotacaoModel): Observable<CotacaoModel> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.token
    });

    return this.http.post<CotacaoModel>(this.url, JSON.stringify(cotacao), { headers });
  }

  getAllCotacoes(): Observable<CotacaoModel[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.token
    });

    return this.http.get<CotacaoModel[]>(this.url, { headers });
  }
}
