import React from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from "../public/css/ImageContainer.module.css";

const ImageContainer = (props) => {
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
      <div className={styles.container}>
        <img src={props.href} alt={"image"} />
      </div>
    </div>
  );
};

export default ImageContainer;
