import styles from "../public/css/Background.module.css";

export default function () {
  return (
    <div className={styles.background}>
      <div
        className={styles.background_elem}
        style={{ backgroundImage: 'url("/images/bg1.svg")' }}
      ></div>
      <div
        className={styles.background_elem}
        style={{ backgroundImage: 'url("/images/bg2.svg")' }}
      ></div>
    </div>
  );
}
