import Link from "next/link";
import styles from "../public/css/HomeArrow.module.css";

export default () => {
  return (
    <Link href={"/"}>
      <div className={styles.home_div}>
        <img src="/images/arrow-left.svg" />
      </div>
    </Link>
  );
};
