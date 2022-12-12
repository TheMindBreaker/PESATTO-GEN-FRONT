import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DeviceService} from "../../service/device.service";
import {Device} from "../../model/device";
import {SocketDeviceService} from "../../service/socketDevice";


@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  deviceID: string = "";
  Device?: Device
  constructor(private actRoute: ActivatedRoute, private deviceService : DeviceService, private socketService: SocketDeviceService) {
    this.deviceID = this.actRoute.snapshot.params['id'];
    this.getData()
  }

  getData () {
    this.deviceService.getDevice(this.deviceID).subscribe((data) => {
      this.Device = data!;
    })
  }

  getPercent(value: number, max: number) {
    let calc = (value*100) / max;
    return calc;
  }

  ngOnInit(): void {
    this.socketService.getNewMessage().subscribe(row => {
      try {
        JSON.parse(row).map((data?: Device) => {this.Device = data});
      } catch (e) {
        console.log(e);
      }

    })
  }

}
