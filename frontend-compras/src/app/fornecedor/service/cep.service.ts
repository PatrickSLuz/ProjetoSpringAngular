import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnderecoModel } from '../model/endereco-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  searchCep(cep: string): Observable<EnderecoModel> {
    let url = "https://viacep.com.br/ws/" + cep + "/json/";
    return this.http.get<EnderecoModel>(url);
  }
}
