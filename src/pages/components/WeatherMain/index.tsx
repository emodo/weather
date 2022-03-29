import { history } from 'umi';
import Sun from '@/assets/weather/sun-day.png';
import styles from './index.less';
import WeatherSub from '../WeatherSub';

export default function weatherMain() {
  const handleRoutDetail = () => {
    history.push({
      pathname: '/detail',
      query: {
        a: 'b',
      },
    });
  }

  return (
    <div className={styles.weatherMain}>
      <div className={styles.weatherMainInner}>
        <div className={styles.weatherIcon}>
          <img width={140} src={Sun} alt="sun" />
        </div>
        <div className={styles.location}>
          杭州市，浙江省
        </div>
        <div className={styles.weatherInfo}>
          <div className={styles.weatherTemp}>
            <div className={styles.temperature} >
              15<span>°C</span>
            </div>
            <div className={styles.day}>
              周日，<span>11 am</span>
            </div>
          </div>
          <div className={styles.cloud} >
              <div className={`${styles.tag} ${styles.tag1}`} >
                强风
              </div>
              <div className={`${styles.tag} ${styles.tag2}`} >
                多云
              </div>
          </div>
        </div>
        <button onClick={handleRoutDetail} className={styles.btn}>详情</button>
      </div>
      <WeatherSub />
    </div>
  );
}
