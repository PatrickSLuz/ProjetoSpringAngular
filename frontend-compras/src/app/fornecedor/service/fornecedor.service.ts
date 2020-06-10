import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FornecedorModel } from '../model/fornecedor-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  url = environment.baseUrl + "/fornecedor";

  constructor(private http: HttpClient) { }

  create(fornecedor: FornecedorModel): Observable<FornecedorModel> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<FornecedorModel>(this.url, JSON.stringify(fornecedor), { headers });
  }

  getAllFornecedores(): Observable<FornecedorModel[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get<FornecedorModel[]>(this.url, { headers });
  }
}
