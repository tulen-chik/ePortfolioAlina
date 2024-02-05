import { useLayoutEffect } from "react";
import gsap from "gsap";
import Paragraph from "../components/Paragraph";
import HomeArrow from "../components/HomeArrow";

const personal_writing = () => {
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
        <h1>personal writing</h1>
      </header>
      <div className="personal writing">
        <Paragraph idClass={"a"}>
          The most important event for me recently was the choice between.
          Belarus and Lithuania. This choice does not seem so serious, but for
          me it meant everything: whether I would stay with my old friends,
          family, or whether I would follow my dream to distant and unknown
          lands. You already know what I came to, but I would still like to tell
          you about all the pros and cons that I had to weigh when making this
          decision
        </Paragraph>

        <Paragraph idClass={"b"} header={"Belarus"}>
          On the one hand, of course, I would like to tell you about my homeland.
          Belarus has always fascinated me with its people, who are kind and as
          pleasant to communicate with as possible. I would gladly choose to
          continue my studies here, it would be much easier from the monetary
          and moral side, but this is where the significant advantages end.
          Since my dream has always been to become an actress, there would be no
          future for me in Belarus, due to the lack of educational institutions
          and proper industry. But I could have given up my dream, acted like
          hundreds and thousands of my peers, joined some boring banker or
          accountant, yes, these professions would have given me a stable income
          and confidence in the future. But this is not about me, I crave
          adventure, I want more, so changing my profession to another was not
          an option.
        </Paragraph>

        <Paragraph idClass={"v"} header={"Lithuania"}>
          Firstly, of course, I would like to tell you about my homeland.
          Belarus has always fascinated me with its people, who are kind and as
          pleasant to communicate with as possible. I would gladly choose to
          continue my studies here, it would be much easier from the monetary
          and moral side, but this is where the significant advantages end.
          Since my dream has always been to become an actress, there would be no
          future for me in Belarus, due to the lack of educational institutions
          and proper industry. But I could have given up my dream, acted like
          hundreds and thousands of my peers, joined some boring banker or
          accountant, yes, these professions would have given me a stable income
          and confidence in the future. But this is not about me, I crave
          adventure, I want more, so changing my profession to another was not
          an option.
        </Paragraph>
      </div>
      <style jsx>{`
        header {
          width: 100%;
          text-align: center;
          font-size: 4rem;
          color: white;
          font-family: "Evolventa", sans-serif;
        }
        ul {
          padding-left: 40px;
          margin-top: 0.5em;
          margin-bottom: 0.5em;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        il::before {
          content: "✰";
          font-size: 25px;
          margin-right: 15px;
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

export default personal_writing;
