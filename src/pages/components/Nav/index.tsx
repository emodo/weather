import styles from './index.less';
import homeSrc from '@/assets/home.png'

const navList = [{
  id: 1,
  title: 'Home',
  img: homeSrc,
}];

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.navInner}>
        <ul>
          {
            navList.map((item) => <li key={item.id}>
              <div>
                <img className={styles.navBg} src={item.img} alt="home" />
              </div>
              <span>
                {item.title}
              </span>
            </li>)
          }
        </ul>
      </div>
    </div>
  );
}
