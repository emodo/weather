import { history } from 'umi';
import styles from './detail.less';
import Sun from '@/assets/weather/sun-day.png';
import Back from '@/assets/back.png';
import WeatherSubTagStyle from './components/WeatherSubTagStyle';
import Charts from './components/Charts';
import Hours from './components/Hours';
import Weeks from './components/Weeks';

export default function DetailPage() {
  const handleBack = () => {
    history.push('/');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.back}>
        <img onClick={handleBack} src={Back} alt="back" />
      </div>
      <div className={styles.weatherIcon}>
        <img width={240} src={Sun} alt="sun" />
      </div>
      <div className={styles.location}>
        <div>杭州市，</div>
        <div>浙江省</div>
      </div>
      <div className={styles.temperature}>
        15<span>°C</span>
      </div>
      <WeatherSubTagStyle />
      <Charts />
      <Hours />
      <Weeks />
    </div>
  );
}
