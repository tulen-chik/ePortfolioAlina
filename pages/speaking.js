import { useLayoutEffect } from "react";
import gsap from "gsap";
import Paragraph from "../components/Paragraph";
import HomeArrow from "../components/HomeArrow";
import ImageContainer from "../components/ImageContainer";
import Audio from "../components/audio/Audio";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const speaking = () => {
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
        <h1>speaking</h1>
      </header>
      <div className="paragraphs">
        <Paragraph idClass={"a"}>
          Today I would like to tell you about a very important topic for me,
          namely, what it is like to be an actor. Because many people
          underestimate what acting is like. So, I've had a desire for a long
          time to acquaint as many people as possible with how it feels to be an
          actor.
        </Paragraph>

        <ImageContainer
          href={"/images/IMG_20230620_012746_016.jpg"}
          idClass={"assad"}
        />

        <Paragraph idClass={"f"} header={"Openness"}>
          The first and most important trait for any actor is openness. I
          understand it not only as the ability to convey my personal feelings
          to another person, but also as an opportunity to open myself to the
          feelings of characters alien to myself and try to merge with them to
          achieve maximum believability on stage. This process is extremely
          energy-consuming, as it involves studying all possible patterns of
          behavior of your character, but it is also rewarded with excellent
          acting.
        </Paragraph>

        <ImageContainer
          href={"/images/IMG_20230620_234425_168.jpg"}
          idClass={"asdd"}
        />

        <Paragraph idClass={"c"} header={"Empathy"}>
          Empathy is very important in the work of an actor, it is logical, if
          you are trying to work with feelings not only your own, but also with
          the feelings of the audience who is looking at you, you need to know
          and understand how to work with them. Many young actors are too afraid
          that they don't have enough skills to elicit the right reaction from
          the audience, but this is not the case, because everyone can
          empathize, so all that is required is self-confidence and a little bit
          of skills, for which I went to EHU
        </Paragraph>

        <Paragraph idClass={"b"} header={"Social barriers"}>
          I consider breaking social barriers to be another equally important
          aspect of any actor. Like other professions involving creativity,
          acting is no exception, all the thoughts of actors are seen through
          the spotlights and the stage. This seems absurd. How can an actor who
          has to play the role of another person possibly convey his own
          thoughts? But everything is simple, communication, even in ordinary
          life, is carried out mainly not through words, but through emotions on
          the face and movements, so knowing this fact, it is not so difficult
          to understand where the ability to convey thoughts through the stage
          comes from
        </Paragraph>

        <ImageContainer
          href={
            "/images/How-much-of-Communication-is-Non-verbal-Infographic.png"
          }
          idClass={"asd"}
        />

        <Paragraph idClass={"i"} header={"Self development"}>
          As the last aspect of acting, I consider the possibility of constantly
          developing yourself as a person, this happens by itself, naturally,
          studying a new opus that you will need to stage, studying the
          character that you will need to play and, of course, choosing the
          right palette of emotions necessary to get the desired result.
          Constant reflection and mental process at every stage of character
          creation develops you as a person, helps you understand your emotions
          and the emotions of other people, teaches you patience and endurance.{" "}
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
        header:first-letter {
          color: #a073ba;
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
      <div style={{marginTop: "100px"}}></div>
      <HomeArrow />
      <AudioPlayer
        src="/Alinochka.mp3"
        onPlay={(e) => console.log("onPlay")}
        style={{position: "fixed", bottom: "0px"}}
        defaultDuration={"03:04"}
        showJumpControls={false}
      />
    </main>
  );
};

export default speaking;
