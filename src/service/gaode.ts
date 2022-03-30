import request from 'umi-request';
const key = '9beaca4a70567e0f31a65babde588854';
import { geoParams } from './gaode.d';

export function regeo(params: geoParams) {
  return request('https://restapi.amap.com/v3/geocode/regeo', {
    method: 'get',
    params: {
      key,
      location: params.location,
    },
  }).then(function (response) {
    return response.regeocode.addressComponent;
  });
}
