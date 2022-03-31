import { hourlyTypes, hourTypes } from '@/types';
import styles from './index.less';
import useHoursTemp from '../../hooks/useHoursTemp';

export default function Hours(props: { hourList: hourlyTypes[] }) {
  const [hourList] = useHoursTemp(props.hourList);

  return (
    <div className={styles.hours}>
      <div className={styles.hoursInner}>
        <ul>
          {hourList?.map((item) => (
            <li key={item.id}>
              <div className={styles.temp}>
                {item.temp}
                <span>°C</span>
              </div>
              <div className={styles.time}>{item.time}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
