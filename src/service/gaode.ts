import request from 'umi-request';
const key = '9beaca4a70567e0f31a65babde588854';
import { geoParams } from './gaode.d';
import Store from 'store';

export function regeo(params: geoParams) {
  return request('https://restapi.amap.com/v3/geocode/regeo', {
    method: 'get',
    useCache: true,
    timeout: 0,
    params: {
      key,
      location: params.location,
    },
  })
    .then(function (response) {
      Store.set('regeocode', response.regeocode.addressComponent);
      return response.regeocode.addressComponent;
    })
    .catch(function (error) {
      console.log(Store.get('regeocode'), '111111');

      return Store.get('regeocode');
    });
}
