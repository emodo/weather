import { history } from 'umi';
import styles from './index.less';
import WeatherSub from '../WeatherSub';
import Loading from '../Loading';
import { regeo } from '@/service/gaode';
import { getWeather } from '@/service/weather';
import { useEffect, useState } from 'react';
import { getLocation, getToday, WeatherStatus, isValidParams } from '@/utils';
import { location, locationInfo, weatherInfoTypes } from '@/types';
import dayjs from 'dayjs';
import Store from 'store';
import useLoading from '@/pages/hooks/useLoading';

const currentWeek = getToday(dayjs().day());

export default function weatherMain() {
  const loading = useLoading();

  const [locationInfo, setLocationInfo] = useState<locationInfo>({
    city: '',
    province: '',
    citycode: '',
    adcode: '',
  });
  const [location, setLocation] = useState<location>({
    latitude: 0,
    longitude: 0,
  });
  const [weatherInfo, setWeatherInfo] = useState<weatherInfoTypes>({
    humidity: 0,
    wind_speed: 0,
    rain: 0,
    temp: 0,
    main: 'Clear',
    mainList: [],
  });
  const handleRoutDetail = () => {
    history.push({
      pathname: '/detail',
      query: {
        latitude: String(location.latitude),
        longitude: String(location.longitude),
        city: locationInfo.city,
        province: locationInfo.province,
      },
    });
  };

  const getRegeo = async (params: location) => {
    const res = await regeo({
      location: `${params.longitude},${params.latitude}`,
    });
    const { province, city, citycode, adcode } = res;
    setLocationInfo({
      province,
      city,
      citycode,
      adcode,
    });
  };

  const getCity = async () => {
    let res;
    try {
      res = await getLocation();
      setLocation(res);
    } catch (e) {
      res = Store.get('location');
    }

    getRegeo(res);
    return res;
  };

  const init = async () => {
    loading.setLoadingState(true);
    const res = await getCity();

    const weather = await getWeather({
      lat: res ? res.latitude : 0,
      lon: res ? res.longitude : 0,
      exclude: 'hourly,daily,minutely,alerts',
    });

    setWeatherInfo({
      temp: weather.current.temp.toFixed(0),
      humidity: weather.current.humidity,
      wind_speed: weather.current.wind_speed,
      rain: weather.current.rain ? weather.current.rain['1h'] : 0,
      main: weather.current.weather[0].main,
      mainList: weather.current.weather[0].description.split('???'),
    });
    loading.setLoadingState(false);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className={styles.weatherMain}>
      <Loading loading={loading.loading} />
      <div className={styles.weatherMainInner}>
        <div className={styles.weatherIcon}>
          <img
            width={140}
            src={
              isValidParams(weatherInfo.main) && WeatherStatus[weatherInfo.main]
            }
          />
        </div>
        <div className={styles.location}>
          {locationInfo
            ? `${
                locationInfo.city && locationInfo.city.length !== 0
                  ? `${locationInfo.city},`
                  : ''
              } ${locationInfo.province}`
            : '?????????????????????'}
        </div>
        <div className={styles.weatherInfo}>
          <div className={styles.weatherTemp}>
            <div className={styles.temperature}>
              {weatherInfo?.temp}
              <span>??C</span>
            </div>
            <div className={styles.day}>
              {currentWeek}???
              <span>
                {dayjs().hour()} {dayjs().format('a')}
              </span>
            </div>
          </div>
          <div className={styles.cloud}>
            {weatherInfo.mainList.map((item, index) => (
              <div
                key={index}
                className={`${styles.tag} ${styles[`tag${index + 1}`]}`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleRoutDetail} className={styles.btn}>
          ??????
        </button>
      </div>
      <WeatherSub
        humidity={weatherInfo.humidity}
        wind_speed={weatherInfo.wind_speed}
        rain={weatherInfo.rain}
      />
    </div>
  );
}
