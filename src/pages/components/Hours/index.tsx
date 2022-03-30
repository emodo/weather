import styles from './index.less';

const hourList = [
  {
    id: 1,
    temp: '12',
    time: '12 am',
  },
  {
    id: 2,
    temp: '12',
    time: '12 am',
  },
  {
    id: 3,
    temp: '12',
    time: '12 am',
  },
  {
    id: 4,
    temp: '12',
    time: '12 am',
  },
  {
    id: 5,
    temp: '12',
    time: '12 am',
  },
  {
    id: 6,
    temp: '12',
    time: '12 am',
  },
];

export default function Hours() {
  return (
    <div className={styles.hours}>
      <div className={styles.hoursInner}>
        <ul>
          {hourList.map((item) => (
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
