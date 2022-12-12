import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NbAuthJWTToken, NbAuthService} from "@nebular/auth";
import {DeviceBasic} from "../model/device_basic";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})

export class DeviceService {
  token = "";
  constructor(private http: HttpClient, private authService: NbAuthService) {
    this.authService.getToken().subscribe(token => {
      this.token = token.toString()
    });
  }
  getDevicesBasic(): Observable<[DeviceBasic]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<[DeviceBasic]>(environment.apiUrl + "/devices",{headers: headers});
  }
}
