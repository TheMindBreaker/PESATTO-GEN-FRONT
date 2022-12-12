export class DeviceInputs{
  deviceId!: string;
  CALL!: string
  UPDATED!: string
  MODE!:{
    TEST_MODE: boolean
    AUTO_MODE: boolean;
    MANUAL_MODE: boolean;
    STOP_MODE: boolean;
  };
  COMMON_ALARM!: boolean;
  COMMON_WARNING_ALARM!:boolean;
  COMMON_SHUTDOWN_ALARM!:boolean;
  REMOTE_MODE!:boolean;
  REMOTE_LOCK!:boolean;
  MAIN_WITH_LOAD!:boolean;
  GEN_WITH_LOAD!:boolean;
  EMERGENCY_STOP!:boolean;
  CRANK_FAILURE!:boolean
  SHUTDOWNS!: {
    SPEED_SIGNAL_LOSS: boolean;
    OVER_FREQUENCY: boolean;
    UNDER_FREQUENCY: boolean;
    OVER_VOLTAGE: boolean;
    UNDER_VOLTAGE: boolean;
    GEN_OVER_CURRENT: boolean;
    HIGH_TEMPERATURE: boolean;
    LOW_OIL_PRESSURE: boolean;
    TEMP_SENSOR_OPEN: boolean;
    OIL_PRESSURE_SENSOR_OPEN: boolean;
  };
  ALARM_SHUTDOWN!:{
    OVER_SPEED_ALARM:boolean
    UNDER_SPEED_ALARM: boolean;
  };
  SHUTDOWN_ALARM!:{
    MAINTENANCE_DUE: boolean;
    OVER_POWER: boolean;
    INPUT_PORT: boolean;
    LOW_FUEL_LEVEL: boolean;
    LOW_COOLANT_LEVEL: boolean;
  };
  ALARMS!: {
    FREQUENCY_LOSS: boolean;
  };
  WARNS_ALARMS!: {
    HIGH_WATER_TEMPERATURE: boolean;
    LOW_OIL_PRESSURE: boolean;
    GEN_OVER_CURRENT: boolean;
    BATTERY_VOLT_LOW: boolean;
    BATTERY_VOLT_HIGH: boolean;
    INPUT_PORT: boolean;
  };
  WARNS!: {
    STOP_FAILURE: boolean;
    LOW_OIL_LEVEL: boolean;
    CHARGE_FAILURE: boolean;
    SPEED_SIGNAL_LOSS: boolean;
    LOW_COOLANT_LEVEL: boolean;
    TEMP_SENSOR_OPEN: boolean;
    OIL_PRESSURE_SENSOR_OPEN: boolean;
    MAINTENANCE_DUE: boolean;
    CHARGER_FAIL_TO_CHARGE: boolean;
    OVER_POWER: boolean;
    GEN_SWITCH_FAILURE: boolean;
    MAINS_SWITCH_FAILURE: boolean;
  };
  INPUT!: {
    EMERGENCY_STOP: boolean;
    AUX1: boolean;
    AUX2: boolean;
    AUX3: boolean;
    AUX4: boolean;
    AUX5: boolean;
  };
  OUTPUT!:{
    START_RELAY: boolean;
    FUEL_RELAY: boolean;
    AUX1: boolean;
    AUX2: boolean;
    AUX3: boolean;
    AUX4: boolean;
  };
  MAINS!:{
    FAULT: boolean;
    NORMAL: boolean;
    OVER_VOLTAGE: boolean;
    UNDER_VOLTAGE: boolean;
    LOSS_OF_PHASE: boolean;
    BLACKOUT: boolean;
  };
  GEN!:{
    NORMAL: boolean;
    OVER_VOLTAGE: boolean;
    UNDER_VOLTAGE: boolean;
    OVER_FREQUENCY: boolean;
    UNDER_FREQUENCY: boolean;
    OVER_CURRENT_WARN: boolean;
    IN_SCHEDULED_NOT_RUN: boolean;
  };
}
