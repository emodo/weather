import { location } from '@/types';
import dayjs from 'dayjs';
import Store from 'store';

export function getLocation(): Promise<location> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      // 检测是否支持地理定位,支持则获取经纬度
      navigator.geolocation.getCurrentPosition(
        (res) => {
          const locationRes = {
            latitude: res.coords.latitude,
            longitude: res.coords.longitude,
          };
          Store.set('location', locationRes);
          resolve(locationRes);
        },
        (err) => {
          // 获取用户位置失败返回错误
          switch (err.code) {
            case 1:
              reject('位置服务请求被拒绝');
              break;
            case 2:
              reject('暂时获取不到位置信息');
              break;
            case 3:
              reject('获取信息超时');
              break;
            case 4:
              reject('未知错误');
              break;
          }
        },
        {
          enableHighAccuracy: true, // 指示浏览器获取高精度的位置，默认为false
          // maximumAge: 3000, // 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。
          timeout: 4000, // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
        },
      );
    } else {
      reject('不支持地理定位');
    }
  });
}

enum Days {
  周日 = 0,
  周一 = 1,
  周二 = 2,
  周三 = 3,
  周四 = 4,
  周五 = 5,
  周六 = 6,
}

export function getToday(day: number) {
  const casted = day;
  return Days[casted];
}

const night = dayjs().hour() > 18 || dayjs().hour() < 6;

export const WeatherStatus = {
  Thunderstorm: night
    ? require('@/assets/weather/thunder-night.png')
    : require('@/assets/weather/thunder.png'),
  Drizzle: night
    ? require('@/assets/weather/rain-night.png')
    : require('@/assets/weather/rain-day.png'),
  Rain: night
    ? require('@/assets/weather/rain-night.png')
    : require('@/assets/weather/rain-day.png'),
  Snow: night
    ? require('@/assets/weather/snow-night.png')
    : require('@/assets/weather/snow-day.png'),
  Clear: night
    ? require('@/assets/weather/sun-night.png')
    : require('@/assets/weather/sun-day.png'),
  Clouds: night
    ? require('@/assets/weather/clouds-night.png')
    : require('@/assets/weather/clouds-day.png'),
  Atmosphere: night
    ? require('@/assets/weather/wind-night.png')
    : require('@/assets/weather/wind-day.png'),
};

export function isValidParams(
  params: string,
): params is keyof typeof WeatherStatus {
  return params in WeatherStatus;
}
