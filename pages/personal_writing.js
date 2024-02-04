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
        <h1>goals</h1>
      </header>
      <div className="personal writing">
        <Paragraph idClass={"a"}>
          Yearning for something has left me in a state of crisis, as various
          factors intertwine in my pursuit of admission to EHU and the prospect
          of moving to Lithuania. These desires have dominated my thoughts for
          quite some time, but lately, within the span of six months, new
          aspirations have emerged, and I feel compelled to share them with you.
          One such aspiration is the dream of traveling. Embarking on journeys
          has always held a special place in my heart. It is an avenue that
          broadens my horizons and grants me a unique opportunity to immerse
          myself in unfamiliar cultures. Exploring a foreign land not only
          allows me to absorb the intricacies of their language but also offers
          a chance to reinforce my existing knowledge by conversing with those
          fluent in the languages I am passionate about. The practice of
          traveling may not be a constant in my life, but I firmly believe that
          it holds the potential to bolster my confidence when utilizing my
          language skills. By venturing into an English-speaking country, I
          could engage with native speakers, further refining my abilities and
          gaining invaluable insights into their customs and way of life. In a
          world where communication is vital, being able to connect with people
          from different cultures through language is a remarkable gift. It
          fosters understanding, empathy, and a profound appreciation for the
          diversity that exists in our global society. Through my travels, I
          hope to embrace this gift and forge meaningful connections with
          individuals who share my passion for language and exploration.
        </Paragraph>

        <Paragraph idClass={"b"}>
          As an aspiring actor, my ultimate career goal is to become a versatile
          performer with the ability to portray a wide range of characters
          across various genres. To achieve this, I plan to focus on developing
          my acting skills, improving my physical fitness and appearance, and
          learning more about the industry. In terms of what I want to achieve,
          I aim to secure both lead and supporting roles in film, television,
          and theater productions. I want to work with talented directors and
          actors, and collaborate on projects that challenge me creatively and
          intellectually. To improve as an actor, I recognize the importance of
          practicing regularly and seeking feedback from industry professionals.
          I plan to attend acting classes, workshops, and seminars to refine my
          craft and stay up-to-date with industry trends. Additionally, I will
          work on improving my voice, diction, and physicality to become a more
          dynamic performer. As for what I want to learn, I am eager to gain a
          deeper understanding of the technical aspects of filmmaking and
          theater production. This includes learning about lighting, sound
          design, and stage management, as well as gaining experience in areas
          such as screenwriting and directing. I learn best through hands-on
          experience, so I plan to seek out opportunities to work on student and
          independent film projects. I also plan to network with industry
          professionals and attend industry events to gain exposure and build
          relationships. To achieve my goals, I understand that it will take
          hard work, dedication, and perseverance. I plan to stay focused and
          motivated, and to always be open to learning and growing as an actor.
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
      `}</style>
      <HomeArrow />
    </main>
  );
};

export default personal_writing;