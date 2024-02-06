import { useLayoutEffect } from "react";
import gsap from "gsap";
import Paragraph from "../components/Paragraph";
import HomeArrow from "../components/HomeArrow";

const reflection = () => {
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
        <h1>reflection</h1>
      </header>
      <div className="paragraphs">
        <Paragraph idClass={"a"}>
          Summing up, I think that working on my own electronic portfolio was
          very interesting and exciting, I can proudly say that each section of
          the portfolio helped me in some way. Like "goals", which helped me
          specifically define my goals for future career, language learning and
          life in general, or practice "disciplinary writing" which taught me
          writing more or less scientific papers in English.
        </Paragraph>

        <Paragraph idClass={"f"}>
          But this portfolio was marked not only by personal growth, but also by
          progress in learning English, because here I was able to use a good
          number of words from my vocabulary and learned not just to write a
          text, but to convey my emotions, my thoughts and dreams through it,
          which I consider the main thing in learning any language, not only
          English.
        </Paragraph>
      </div>
      <style jsx>{`
        header {
          width: 100%;
          text-align: center;
          font-size: 64px;
          color: white;
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

export default reflection;
