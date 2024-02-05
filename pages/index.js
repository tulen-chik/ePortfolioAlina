import Navigation from "../components/Navigation";

const App = () => {
  const nav = [
    { id: "about", text: <div style={{display: "flex", justifyContent: "center"}}><div style={{color: "#85bfee"}}>a</div><div style={{color: "#ffffff"}}>bout</div></div>, href: "/about", img: "/images/logo1.jpg" },
    { id: "goals", text: <div style={{display: "flex", justifyContent: "center"}}><div style={{color: "#85bfee"}}>g</div><div style={{color: "#ffffff"}}>oals</div></div>, href: "/goals", img: "/images/logo2.jpg" },
    {
      id: "personal_writing",
      text: <div style={{display: "flex", justifyContent: "center"}}><div style={{color: "#a073ba"}}>p</div><div style={{color: "#ffffff"}}>ersonal writing</div></div>,
      href: "/personal_writing",
      img: "/images/logo3.jpg",
    },
    {
      id: "disciplinary_writing",
      text: <div style={{display: "flex", justifyContent: "center"}}><div style={{color: "#a073ba"}}>d</div><div style={{color: "#ffffff"}}>isciplinary writing</div></div>,
      href: "/disciplinary_writing",
      img: "/images/logo4.jpg",
    },
    { id: "speaking", text: <div style={{display: "flex", justifyContent: "center"}}><div style={{color: "#b2a0dc"}}>s</div><div style={{color: "#ffffff"}}>peaking</div></div>, href: "/speaking", img: "/images/logo5.jpg", },
    { id: "reflection", text: <div style={{display: "flex", justifyContent: "center"}}><div style={{color: "#b2a0dc"}}>r</div><div style={{color: "#ffffff"}}>eflection</div></div>, href: "/reflection", img: "/images/logo6.jpg", },
  ];

  return (
    <div className="main">
      <link
        href="https://fonts.cdnfonts.com/css/evolventa"
        rel="stylesheet"
      ></link>

      <div className="navigation">
        {nav.map((nav_elem, index) => {
          return (
            <div>
              <div className="bg">
                <img src={nav_elem.img} />
              </div>
              <div className="text">
                <Navigation
                  key={index}
                  text={nav_elem.text}
                  href={nav_elem.href}
                  idName={nav_elem.id}
                />
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>
        {`
          .navigation {
            display: flex;
            flex-direction: column;
            gap: 49px;
            justify-content: center;
            text-align: center;
          }
          .bg {
            position: absolute;
            width: 100%;
            height: 215px;
            z-index: -100;
          }
          .bg > img {
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
            z-index: -100;
          }
          .text {
            padding-top: 70px;
          }
        `}
      </style>
    </div>
  );
};

export default App;
