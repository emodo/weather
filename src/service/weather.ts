import request from 'umi-request';
import { weatherParams } from './weather.d';
const appid = '5329ece50e04a1bd3c4c826d6f3e2340';
import Store from 'store';

export function getWeather(params: weatherParams) {
  return request('https://api.openweathermap.org/data/2.5/onecall', {
    method: 'get',
    params: {
      appid,
      lat: params.lat,
      lon: params.lon,
      exclude: params.exclude,
      units: 'metric',
      lang: 'zh_cn',
    },
  })
    .then(function (response) {
      Store.set('weather', response);
      return response;
    })
    .catch(function (error) {
      return Store.get('weather');
    });
}
