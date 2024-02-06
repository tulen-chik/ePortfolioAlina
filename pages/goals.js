import { useLayoutEffect } from "react";
import gsap from "gsap";
import Paragraph from "../components/Paragraph";
import HomeArrow from "../components/HomeArrow";
import ImageContainer from "../components/ImageContainer";

const goals = () => {
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
        <h1>goals</h1>
      </header>
      <div className="paragraphs">
        <Paragraph idClass={"a"} header={"Travel"}>
          I consider travel to be one of the biggest goals, in my opinion, they
          help not only to learn English, communicate with local residents, but
          also for general personal growth.
        </Paragraph>

        <ImageContainer href={"/images/turizm.jpg"} idClass={"assad"} />

        <Paragraph idClass={"aias"} header={"C1 English"}>
          In my opinion, this is the simplest, but no less important goal,
          because English is extremely important to me for communicating with
          people in everyday life, with colleagues at future jobs and other
          places. And in general, we can never know where else we might need
          knowledge of advanced English, so it definitely won't be superfluous.
        </Paragraph>

        <ImageContainer href={"/images/levels.jpg"} idClass={"assiuad"} />

        <Paragraph idClass={"aiopas"} header={"Cinema"}>
          In the world of cinema, where dreams come true, any aspiring actor
          wants to get into a feature film, I was no exception. The fascination
          of winning the hearts and captivating the audience with my
          performances fuels my relentless pursuit. So I consider it my biggest
          dream at the moment.
        </Paragraph>

        <ImageContainer href={"/images/kino.jpeg"} idClass={"assiuhuad"} />
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

export default goals;
