import { DeviceBasic } from './../model/device_basic';
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
    this.auth.getToken().subscribe(token => {
      this.token = token.toString()
    });
  }

  public getUsers():Observable<[User]>{
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<[User]>(environment.local+'list/users',{
      headers: this.headers
    })
  }

  public getDevices():Observable<[any]> {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get<[any]>(environment.local+'list/devices',{
      headers:this.headers
    })
  }

  public insertNewUser(form:any):Observable<any> {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.post(environment.local+'new/user',form, {
      headers:this.headers
    })
  }

  public findOneUser(id:string):Observable<any> {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get(environment.local+'find/user/'+id, {
      headers:this.headers
    })
  }


}
