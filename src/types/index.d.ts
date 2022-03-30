export type location = {
  latitude: number;
  longitude: number;
};

export type locationInfo = {
  province: string;
  city: string;
  citycode: string;
  adcode: string;
};

export interface weatherInfoSubTypes {
  /** 湿度 */
  humidity: number;
  /** 风速 */
  wind_speed: number;
  /** 降水量 */
  rain: number;
}

export interface mainTypes {
  id: number;
  main: string;
  description: string;
}

export interface weatherInfoTypes extends weatherInfoSubTypes {
  /** 温度 */
  temp: number;
  main: string;
  mainList: mainTypes[];
}
