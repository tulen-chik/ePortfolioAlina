import Link from "next/link";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from "../public/css/Navigation.module.css";

export default function ({ text, href, idName, color }) {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.from("." + idName, {
      opacity: 0,
      translateX: -200,
      duration: 2,
      scrollTrigger: {
        trigger: "." + idName,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  return (
    <div className={idName}>
      <div className={styles.nav_div}>
        <Link className={styles.nav_element} href={href}>
          <div className={color}>{text}</div>
        </Link>
      </div>
      <style jsx>
        {`
        .blue:first-letter {
          color: #85bfee;
        }
        .purple:first-letter {
          color: #755ab2;
        }
        .last:first-letter {
          color: #a073ba;
        }
        `}
      </style>
    </div>
  );
}
