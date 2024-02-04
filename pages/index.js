import Navigation from "../components/Navigation";

const App = () => {

  const nav = [
    { id: "about", text: "about", href: "/about" },
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
            <Navigation key={index} text={nav_elem.text} href={nav_elem.href} idName={nav_elem.id} />
          );
        })}
      </div>
      <style jsx>
        {`
          .navigation {
            display: flex;
            flex-direction: column;
            gap: 120px;
            justify-content: center;
            text-align: center;
            padding: 10%;
          }
        `}
      </style>
    </div>
  );
};

export default App;
