import styles from './index.less';

export default function Loading(props: { loading: boolean }) {
  const { loading } = props;

  return (
    <div className={loading ? styles.loadingWrapper : ''}>
      <div className={styles.spin}>
        <span className={`${styles.spinDot} ${styles.spinDotSpin}`}>
          <i className={styles.dotItem}></i>
          <i className={styles.dotItem}></i>
          <i className={styles.dotItem}></i>
          <i className={styles.dotItem}></i>
        </span>
      </div>
    </div>
  );
}
