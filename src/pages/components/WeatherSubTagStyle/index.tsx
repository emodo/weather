import styles from './index.less';
import humidityTag from '@/assets/humidity-tag.png';
import rainTag from '@/assets/rain-tag.png';
import windTag from '@/assets/wind-tag.png';

const list = [
  {
    id: 1,
    src: rainTag,
    value: '6%',
    color: 'blue',
  },
  {
    id: 2,
    src: humidityTag,
    value: '90%',
    color: 'pink',
  },
  {
    id: 3,
    src: windTag,
    value: '19 km/h',
    color: 'purple',
  },
];
export default function Tag() {
  return (
    <div className={styles.tag}>
      <div className={styles.tagInner}>
        <ul>
          {list.map((item) => (
            <li className={styles[item.color]} key={item.id}>
              <div>
                <img src={item.src} />
              </div>
              <span className={styles.value}>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
