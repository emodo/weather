import { history, useLocation } from 'umi';
import styles from './detail.less';
import Sun from '@/assets/weather/sun-day.png';
import Back from '@/assets/back.png';
import WeatherSubTagStyle from './components/WeatherSubTagStyle';
import Charts from './components/Charts';
import Hours from './components/Hours';
import Weeks from './components/Weeks';
import { useEffect, useState } from 'react';
import { queryParams, weatherInfoDetailTypes, weatherInfoTypes } from '@/types';
import { getWeather } from '@/service/weather';
import type { Location } from 'umi';
import { isValidParams, WeatherStatus } from '@/utils';

export default function DetailPage() {
  const location = useLocation() as Location & {
    query: queryParams;
  };

  const { latitude, longitude, city, province } = location.query;

  const [weatherInfo, setWeatherInfo] = useState<weatherInfoDetailTypes>({
    humidity: 0,
    wind_speed: 0,
    rain: 0,
    temp: 0,
    main: 'Clear',
    mainList: [],
    daily: [],
    hourly: [],
  });

  const handleBack = () => {
    history.push('/');
  };

  const init = async () => {
    const weather = await getWeather({
      lat: Number(latitude),
      lon: Number(longitude),
      exclude: 'minutely',
    });

    setWeatherInfo({
      temp: weather.current.temp,
      humidity: weather.current.humidity,
      wind_speed: weather.current.wind_speed,
      rain: weather.current.rain ? weather.current.rain['1h'] : 0,
      main: weather.current.weather[0].main,
      mainList: weather.current.weather,
      daily: weather.daily,
      hourly: weather.hourly,
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.back}>
        <img onClick={handleBack} src={Back} alt="back" />
      </div>
      <div className={styles.weatherIcon}>
        <img
          width={150}
          src={
            isValidParams(weatherInfo.main) && WeatherStatus[weatherInfo.main]
          }
        />
      </div>
      <div className={styles.location}>
        <div>{city ? `${city},` : ''}</div>
        <div className={styles.province}>{province}</div>
      </div>
      <div className={styles.temperature}>
        {weatherInfo.temp}
        <span>°C</span>
      </div>
      <WeatherSubTagStyle
        humidity={weatherInfo.humidity}
        wind_speed={weatherInfo.wind_speed}
        rain={weatherInfo.rain}
      />
      <Charts hourList={weatherInfo.hourly} />
      <Hours hourList={weatherInfo.hourly} />
      <Weeks weekList={weatherInfo.daily} />
    </div>
  );
}
