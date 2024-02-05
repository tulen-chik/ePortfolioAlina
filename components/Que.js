import styles from "../public/css/Que.module.css";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Que = (props) => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.from("." + props.idClass, {
      opacity: 0,
      translateX: -200,
      duration: 2,
      scrollTrigger: {
        trigger: "." + props.idClass,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <div className={props.idClass}>
      <div className={styles.header}>{props.header}</div>
      <div className={styles.main}>
        <hr />
        <div className={styles.text}>
          <i>{props.children}</i>
        </div>
      </div>
      <div className={styles.footer}>{props.footer}</div>
    </div>
  );
};

export default Que;
