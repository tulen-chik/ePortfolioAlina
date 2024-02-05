import Navigation from "../components/Navigation";

const App = () => {
  const nav = [
    { id: "about", text: "about", href: "/about", img: "/images/logo1.jpg" },
    { id: "goals", text: "goals", href: "/goals" },
    {
      id: "personal_writing",
      text: "personal writing",
      href: "/personal_writing",
    },
    {
      id: "disciplinary_writing",
      text: "disciplinary writing",
      href: "/disciplinary_writing",
    },
    { id: "speaking", text: "speaking", href: "/speaking" },
    { id: "reflection", text: "reflection", href: "/reflection" },
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
            gap: 99px;
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
