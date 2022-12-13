import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NbAuthJWTToken, NbAuthService} from "@nebular/auth";
import {DeviceBasic} from "../model/device_basic";
import {Observable} from "rxjs";
import {Device} from "../model/device";
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

  getDevice(id: string): Observable<Device> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<Device>(environment.apiUrl + "/device/"+id,{headers: headers});
  }
  getCommands(modulo: string):Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get(environment.apiUrl+"/device/command/"+modulo,{
      headers: headers
    }) 
  }

}
