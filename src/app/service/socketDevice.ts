import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";
import {environment} from "../../environments/environment";


export class SocketDeviceService {
  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  deviceID: string = '';
  con: any ;
  constructor() {
  }



  public getNewMessage = (deviceID: string) => {
    let socket = io(environment.socketUrl, {autoConnect: true, extraHeaders: {devices: deviceID}});

    this.con = socket.connect();

    this.con.on("device", (message: string) =>{
      this.message$.next(message);
    })
    return this.message$.asObservable();
  };

}
