import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../model/user-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: UserModel;

  url = environment.baseUrl + "/usuario";

  constructor(private http: HttpClient) { }

  create(user: UserModel): Observable<UserModel> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<UserModel>(this.url, JSON.stringify(user), { headers });
  }

  getAllUsers(): Observable<UserModel[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get<UserModel[]>(this.url, { headers });
  }

  login(user: UserModel): Observable<UserModel> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let endpoint = this.url + "/login";

    return this.http.post<UserModel>(endpoint, JSON.stringify(user), { headers });
  }

}
