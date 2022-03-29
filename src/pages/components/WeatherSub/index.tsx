import styles from './index.less';
import humidityWhite from '@/assets/humidity-white.png'
import rainWhite from '@/assets/rain-white.png'
import windWhite from '@/assets/wind-white.png'

const list = [{
  id: 1,
  title: '降水量',
  src: rainWhite,
  value: '6%',
}, {
  id: 2,
  title: '湿度',
  src: humidityWhite,
  value: '90%',
}, {
  id: 3,
  title: '风速',
  src: windWhite,
  value: '19 km/h',
}]

export default function WeatherSub() {
  return (
    <div className={styles.weatherSub}>
      <div className={styles.weatherSubInner}>
        {
          list.map((item) => <div key={item.id}>
            <div>
              <img src={item.src} alt={item.title} />
              <span className={styles.title}>{item.title}</span>
            </div>
            <span className={styles.value}>{item.value}</span>
          </div>)
        }
      </div>
    </div>
  );
}
