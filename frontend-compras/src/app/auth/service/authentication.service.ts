import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../model/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Auth>;
  public currentUser: Observable<Auth>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Auth>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Auth {
    return this.currentUserSubject.getValue();
  }
  login(username: string, password: string) {
    return this.http.post<any>("http://localhost:8080/authenticate", { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('username');
    this.currentUserSubject.next(null);
  }

  //set name user new in storage
  setUserName(username: string) {
    localStorage.setItem('username', JSON.stringify(username));
  }

  getUserName() {
    return JSON.parse(localStorage.getItem('username'));
  }

}
