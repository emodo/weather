import styles from './index.less';
import Sun from '@/assets/weather/sun-day.png';

const weekList = [
  {
    id: 1,
    title: '周一',
    img: Sun,
    tempHigh: '20',
    tempLow: '10',
  },
  {
    id: 2,
    title: '周二',
    img: Sun,
    tempHigh: '20',
    tempLow: '10',
  },
  {
    id: 3,
    title: '周三',
    img: Sun,
    tempHigh: '20',
    tempLow: '10',
  },
  {
    id: 4,
    title: '周四',
    img: Sun,
    tempHigh: '20',
    tempLow: '10',
  },
  {
    id: 5,
    title: '周五',
    img: Sun,
    tempHigh: '20',
    tempLow: '10',
  },
  {
    id: 6,
    title: '周六',
    img: Sun,
    tempHigh: '20',
    tempLow: '10',
  },
  {
    id: 7,
    title: '周六',
    img: Sun,
    tempHigh: '20',
    tempLow: '10',
  },
];

export default function Week() {
  return (
    <div className={styles.week}>
      <div className={styles.weekInner}>
        <ul>
          {weekList.map((item) => (
            <li key={item.id}>
              <div className={styles.title}>{item.title}</div>
              <div>
                <img className={styles.weekImg} src={item.img} />
              </div>
              <div className={styles.temp}>
                <span className={styles.high}>
                  {item.tempHigh}
                  <span className={styles.unit}>°C</span>
                </span>
                <span className={styles.low}>
                  {item.tempLow}
                  <span className={styles.unit}>°C</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
