export type location = {
  latitude: number;
  longitude: number;
};

export interface queryParams extends location {
  province: string;
  city: string;
}

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

export type temp = {
  day: number;
  eve: number;
  max: number;
  min: number;
  morn: number;
  night: number;
};

export type dailyTypes = {
  dt: number;
  temp: temp;
  weather: mainTypes[];
};

export type hourlyTypes = {
  dt: number;
  temp: number;
};
export interface weatherInfoDetailTypes extends weatherInfoTypes {
  daily: dailyTypes[];
  hourly: hourlyTypes[];
}

export type hourTypes = {
  id: number;
  time: string;
  temp: number;
};

export type weekTypes = {
  id: number;
  title: string;
  img: string;
  tempHigh: number;
  tempLow: number;
};
