import {DeviceValue} from "./device-value";

export class Device {
  IDENTIFIER: string = "";
  LAST_CON: string = "";
  LAST_SOCKET: Number = 0;
  LAST_IP: string = "";
  STATUS: Boolean = false;
  MODULE_PORT: Number = 0;
  DATA_MODE: Number = 0;
  MODULE_BAUD: Number = 0;
  MODULE_TYPE: string = "";
  LATITUDE: Number = 0;
  LONGITUDE: Number = 0;
  PASSWORD: Number = 0;
  DEVICE_VALUE: DeviceValue = new DeviceValue();
  
}