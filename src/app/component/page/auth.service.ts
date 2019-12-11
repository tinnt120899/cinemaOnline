import { Injectable } from '@angular/core';
import {Auth} from './auth';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  BASE_API = 'http://localhost:8085/admin/account';

  // CREATE
  createNewCategory(category: Auth) {
    return this.http.post<Auth>(this.BASE_API + '/signin', category);
  }
  // CHECK LOGIN
  checkLogin(username: string, password: string) {
    const params = new HttpParams().set('username', username).set('password', password);
    return this.http.get(this.BASE_API + '/signin', { params });
  }

}

