import {DeviceValue} from "./device-value";

export class Device {
  _id!: string;
  IDENTIFIER!: string;
  LAST_CON!: string;
  LAST_SOCKET!: number ;
  LAST_IP!: string;
  STATUS!: boolean;
  MODULE_PORT!: number ;
  DATA_MODE!: number ;
  MODULE_BAUD!: number ;
  MODULE_TYPE!: string;
  LATITUDE!: number ;
  LONGITUDE!: number ;
  PASSWORD!: number;
  DEVICE_VALUE!: DeviceValue;
  ALIAS!: string;

}
