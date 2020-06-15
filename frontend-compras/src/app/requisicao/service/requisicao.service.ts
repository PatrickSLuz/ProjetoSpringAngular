import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequisicaoModel, StatusReq } from '../model/requisicao-model';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/auth/service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  url = environment.baseUrl + "/requisicao";

  constructor(private http: HttpClient,
    private authService: AuthenticationService) { }

  create(requisicao: RequisicaoModel): Observable<RequisicaoModel> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.token
    });

    return this.http.post<RequisicaoModel>(this.url, JSON.stringify(requisicao), { headers });
  }

  getAllRequisicoes(): Observable<RequisicaoModel[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.token
    });

    return this.http.get<RequisicaoModel[]>(this.url, { headers });
  }

  getAllRequisicoesByStatus(status: StatusReq): Observable<RequisicaoModel[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.token
    });

    let url = this.url + '/status=' + status;

    return this.http.get<RequisicaoModel[]>(url, { headers });
  }

  getAllRequisicoesByUser(idUsuario: number): Observable<RequisicaoModel[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.token
    });

    let url = this.url + '/usuario/' + idUsuario;

    return this.http.get<RequisicaoModel[]>(url, { headers });
  }

  updateByStatus(requisicao: RequisicaoModel): Observable<RequisicaoModel> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.token
    });

    return this.http.post<RequisicaoModel>(this.url + '/status', JSON.stringify(requisicao), { headers });
  }
}
