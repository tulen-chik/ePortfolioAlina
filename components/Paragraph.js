import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from "../public/css/Paragraph.module.css";

export default (props) => {
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
      <div className={styles.paragraph}>
        <div className={styles.header}>
          <strong>{props.header}</strong>
        </div>
        <div className={styles.innner_text}>{props.children}</div>
      </div>
      <style jsx>
        {`
          ul {
            padding-left: 40px;
            margin-top: 1em;
            margin-bottom: 1em;
            display: flex;
            flex-direction: column;
            gap: 5px;
          }
          il::before {
            content: "✰";
            font-size: 25px;
            margin-right: 15px;
          }
        `}
      </style>
    </div>
  );
};
