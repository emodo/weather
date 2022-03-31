import styles from './index.less';
import humidityTag from '@/assets/humidity-tag.png';
import rainTag from '@/assets/rain-tag.png';
import windTag from '@/assets/wind-tag.png';
import { weatherInfoSubTypes } from '@/types';

export default function Tag(props: weatherInfoSubTypes) {
  const { humidity, rain, wind_speed } = props;
  return (
    <div className={styles.tag}>
      <div className={styles.tagInner}>
        <ul>
          <li className={styles.blue}>
            <div>
              <img src={rainTag} />
            </div>
            <span className={styles.value}>{rain}%</span>
          </li>
          <li className={styles.blue}>
            <div>
              <img src={humidityTag} />
            </div>
            <span className={styles.value}>{humidity}%</span>
          </li>
          <li className={styles.blue}>
            <div>
              <img src={windTag} />
            </div>
            <span className={styles.value}>{wind_speed} km/h</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
