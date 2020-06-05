import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../model/user-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL = "http://localhost:4200/api/usuario";

  constructor(private http: HttpClient) {
  }

  // Headers
  headerType = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }

  create(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.baseURL, JSON.stringify(user), this.headerType);
  }

  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.baseURL, this.headerType);
  }
}
