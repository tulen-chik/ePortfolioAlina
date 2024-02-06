import { useLayoutEffect } from "react";
import gsap from "gsap";
import Paragraph from "../components/Paragraph";
import HomeArrow from "../components/HomeArrow";

const about = () => {
  useLayoutEffect(() => {
    gsap.from("header", {
      opacity: 0,
      translateX: -200,
      duration: 1,
    });
  });
  return (
    <main>
      <link
        href="https://fonts.cdnfonts.com/css/evolventa"
        rel="stylesheet"
      ></link>

      <header>
        <h1>about</h1>
      </header>
      <div className="paragraphs">
        <Paragraph idClass={"a"}>
          Learning English has been an incredible journey for me. It hasn't
          always been easy, but I've had the best companions on this adventure –
          my supportive friends and engaging teachers. They made sure that
          learning English was never boring, finding creative ways to make the
          lessons fun and interesting.
        </Paragraph>

        <Paragraph idClass={"f"}>
          English has become a part of who I am. It has opened up a whole new
          world of connections and friendships with fascinating people from
          different countries. These international friends have been there for
          me, cheering me on as I navigate the intricacies of the language.
        </Paragraph>

        <Paragraph idClass={"c"}>
          Not only has English enriched my personal life, but it has also played
          a significant role in shaping my career. Thanks to my English skills,
          I was able to make my dream come true and enroll in EHU University. It
          has given me the confidence and abilities I needed to pursue my
          ambitions.
        </Paragraph>

        <Paragraph idClass={"b"}>
          Looking back, I cherish the memories of late-night study sessions with
          my friends. We turned learning into an adventure, tackling challenges
          together and celebrating every milestone. Overcoming obstacles in
          mastering the language has given me a sense of pride and
          accomplishment that continues to fuel my desire for growth.
        </Paragraph>
      </div>
      <style jsx>{`
        header {
          width: 100%;
          text-align: center;
          font-size: 64px;
          color: shite;
          font-family: "Evolventa", sans-serif;
        }
        .paragraphs > div {
          margin-bottom: 50px;
        }
        @media (max-width: 1000px) {
          header {
            font-size: 45px;
          }
        }
        @media (max-width: 450px) {
          header {
            font-size: 35px;
          }
        }
      `}</style>
      <HomeArrow />
    </main>
  );
};

export default about;
