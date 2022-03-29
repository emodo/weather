import styles from './index.less';
import logoSrc from '../assets/logo.png'
import Nav from './components/Nav';
import WeatherMain from './components/WeatherMain';

export default function IndexPage() {
  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src={logoSrc} alt="logo" />
      <Nav />
      <WeatherMain />
    </div>
  );
}
