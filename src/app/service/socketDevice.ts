import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";
import {environment} from "../../environments/environment";


export class SocketDeviceService {
  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  deviceID: string = '6391086e7b4b02651abce5b3';
  socket = io(environment.socketUrl,{autoConnect: true, extraHeaders: {devices: this.deviceID}});
  con: any ;
  constructor() {
    this.con = this.socket.connect();
  }

  public sendMessage(message: any) {
    console.log('onData: ', message)
    this.socket.emit('onData', message);
  }

  public getNewMessage = () => {
    this.con.on("device", (message: string) =>{
      this.message$.next(message);
    })
    return this.message$.asObservable();
  };

}
