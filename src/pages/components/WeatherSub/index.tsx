import styles from './index.less';
import humidityWhite from '@/assets/humidity-white.png';
import rainWhite from '@/assets/rain-white.png';
import windWhite from '@/assets/wind-white.png';
import { weatherInfoSubTypes } from '@/types';

export default function WeatherSub(props: weatherInfoSubTypes) {
  const { humidity, rain, wind_speed } = props;

  return (
    <div className={styles.weatherSub}>
      <div className={styles.weatherSubInner}>
        <div>
          <div>
            <img src={rainWhite} />
            <span className={styles.title}>降水量</span>
          </div>
          <span className={styles.value}>{rain}%</span>
        </div>
        <div>
          <div>
            <img src={humidityWhite} />
            <span className={styles.title}>湿度</span>
          </div>
          <span className={styles.value}>{humidity}%</span>
        </div>
        <div>
          <div>
            <img src={windWhite} />
            <span className={styles.title}>风速</span>
          </div>
          <span className={styles.value}>{wind_speed} km/h</span>
        </div>
      </div>
    </div>
  );
}
