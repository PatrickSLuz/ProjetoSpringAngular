import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FornecedorModel } from '../model/fornecedor-model';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/auth/service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  url = environment.baseUrl + "/fornecedor";

  constructor(private http: HttpClient,
    private authService: AuthenticationService) { }

  create(fornecedor: FornecedorModel): Observable<FornecedorModel> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.token
    });

    return this.http.post<FornecedorModel>(this.url, JSON.stringify(fornecedor), { headers });
  }

  getAllFornecedores(): Observable<FornecedorModel[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.token
    });

    return this.http.get<FornecedorModel[]>(this.url, { headers });
  }

  getFornecedorById(idFornecedor: number): Observable<FornecedorModel> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.token
    });

    let url = this.url + '/id=' + idFornecedor;

    return this.http.get<FornecedorModel>(url, { headers });
  }

  deleteFornecedorById(idFornecedor: number): Observable<FornecedorModel> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.token
    });

    let url = this.url + '/id=' + idFornecedor;

    return this.http.delete<FornecedorModel>(url, { headers });
  }
}
