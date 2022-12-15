import { environment } from './../../environments/environment';
import { User } from './../model/user';
import { Observable } from 'rxjs';
import { NbAuthService } from '@nebular/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  token: string = '';
  headers: any;
  

  constructor(private http: HttpClient, private auth: NbAuthService) { 
    this.token = this.auth.getToken.toString();
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
  }

  /* public getUsers():Observable<[User]>{
    this.headers;
    return this.http.get<[User]>(environment.apiUrl)
  } */
}
