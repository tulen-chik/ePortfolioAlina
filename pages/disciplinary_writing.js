import { useLayoutEffect } from "react";
import gsap from "gsap";
import Paragraph from "../components/Paragraph";
import HomeArrow from "../components/HomeArrow";
import ImageContainer from "../components/ImageContainer";

const disciplinary_writing = () => {
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
        <h1>disciplinary writing</h1>
      </header>
      <div className="paragraphs">
        <Paragraph
          idClass={"a"}
          header={"Usage of Artificial Intelligence(AI) in every day life"}
        >
          Artificial intelligence (AI) has become an integral part of our daily
          lives, revolutionizing the way we interact with technology. From voice
          assistants to personalized recommendations, Artificial Intelligence
          has penetrated into various aspects of society, increasing
          convenience, efficiency and productivity. Today I will try to take a
          closer look at the fields of application of artificial intelligence
          and its impact on us.
        </Paragraph>

        <Paragraph idClass={"aias"} header={"Healthcare"}>
          According to Forbes, AI has transformed the healthcare industry,
          improving diagnostics, treatment, and patient care. AI-powered
          algorithms can analyze vast amounts of medical data, aiding in the
          early detection of diseases and the development of personalized
          treatment plans. Intelligent virtual assistants can also provide
          patients with accurate information and support, streamlining
          healthcare delivery and reducing the burden on healthcare
          professionals.
        </Paragraph>

        <Paragraph idClass={"aiasds"} header={"Transport"}>
          According to Forbes, AI has transformed the healthcare industry,
          improving diagnostics, treatment, and patient care. AI-powered
          algorithms can analyze vast amounts of medical data, aiding in the
          early detection of diseases and the development of personalized
          treatment plans. Intelligent virtual assistants can also provide
          patients with accurate information and support, streamlining
          healthcare delivery and reducing the burden on healthcare
          professionals.
        </Paragraph>

        <Paragraph idClass={"aiaswedcccds"} header={"Learning"}>
          EdTech Magazine explores the role of AI in education. Adaptive
          learning platforms utilize AI algorithms to personalize educational
          content, catering to the unique needs and learning styles of students.
          AI-powered virtual tutors can provide immediate feedback and guidance,
          enhancing student engagement and performance. Furthermore, AI-powered
          analytics enable educators to gain insights into student progress and
          identify areas for improvement, fostering a more effective learning
          environment.
        </Paragraph>

        <Paragraph idClass={"aiawedsds"} header={"Retail"}>
          The Harvard Business Review delves into the impact of AI in the retail
          sector. AI-powered recommendation systems analyze customer data,
          enabling personalized product suggestions and enhancing the shopping
          experience. Virtual shopping assistants can provide real-time
          assistance, answer queries, and offer tailored recommendations.
          AI-powered inventory management systems optimize stock levels and
          predict consumer demand, leading to improved efficiency and customer
          satisfaction.
        </Paragraph>

        <Paragraph idClass={"aiopas"} header={"Sources"}>
          <a href="https://www.forbes.com/sites/forbesbusinesscouncil/2023/11/28/how-ai-is-transforming-healthcare-risk-adjustment/?sh=28236bd250c1">
            <i>1)"How AI is Transforming Healthcare"(Forbes)</i>
          </a>
          <br></br>
          <a href="https://www.technologyreview.com/2023/09/14/1079458/this-driverless-car-company-is-using-chatbots-to-make-its-vehicles-smarter/">
            <i>
              2)"AI and the Future of Transportation"(MIT Technology Review)
            </i>
          </a>
          <br></br>
          <a href="https://edtechmagazine.com/higher/article/2017/11/ai-boosts-personalized-learning-higher-education">
            <i>
              3)"AI in Education: The Power of Personalized Learning"(EdTech
              Magazine)
            </i>
          </a>
          <br></br>
          <a href="https://www.forbes.com/sites/forbesbusinesscouncil/2023/11/28/how-ai-is-transforming-healthcare-risk-adjustment/?sh=28236bd250c1">
            <i>
              4)"AI in Retail: The Era of Personalized Shopping"(Harvard
              Business Review)
            </i>
          </a>
          <br></br>
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
        header:first-letter {
          color: #755ab2;
        }
        a {
          color: white;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
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

export default disciplinary_writing;
