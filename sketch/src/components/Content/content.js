import styled from "styled-components";

const data = [
  {
    way: false,
    img: "https://sketch-cdn.imgix.net/assets/pages/apps/app-images/desktop/macapp-image-updated%404x.png?ixlib=rb-4.1.0&w=587&q=95&fm=png&auto=format&s=a886f311b31cc626b39f1bd6c5d40832",
    h1: "Design on you",
    p: "Design, prototype, and illustrate in a truly native macOS app, online or offline. Work in private or collaborate with others, in real time.",
    btn: "Download for macOS",
  },
  {
    way: true,
    img: "https://sketch-cdn.imgix.net/assets/pages/apps/app-images/desktop/webapp-image-updated%404x.png?ixlib=rb-4.1.0&w=587&q=95&fm=png&auto=format&s=8e9f8c274930e1180b3114a9087d9e16",
    h1: "Explore in your browser",
    p: "Browse documents, inspect designs, export assets, discuss feedback, manage users, and invite guests — on any computer, in any browser.",
    btn: "Open the web App",
  },
  {
    way: false,
    img: "https://sketch-cdn.imgix.net/assets/pages/apps/app-images/desktop/iphoneapp-image%404x.png?ixlib=rb-4.1.0&w=587&q=95&fm=png&auto=format&s=647d1050facbd578f9fb1e81c1c04654",
    h1: "Preview on iPhone",
    btn: "Download on the App Store",
    p: "View your documents on the go, play prototypes on a real device, and mirror designs as you edit them on your Mac.",
  },
];
const InnerDiv = styled.div`
  display: flex;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  margin: auto;
  flex-wrap: wrap;
  z-index: 1;
  flex-direction: ${(props) => (props.way ? "row-reverse" : "")};
`;

const firstdiv = (Content, i) => {
  const { img, h1, p, btn, way } = Content;
  const clasname = "d-flex pb-5  w-100 flex-wrap m-auto";

  return (
    <InnerDiv way={way} key={i} className={clasname}>
      <img style={{ maxWidth: "95%" }} className="w-45" src={img} alt="" />
      <div className="w-45  m-auto pt-3" style={{ maxWidth: "95%" }}>
        <h2
          className="h2"
          style={{
            fontSize: "2rem",
            lineHeight: "2.5rem",
            marginBottom: ".5rem",
            fontWeight: "700",
          }}
        >
          {h1}
        </h2>
        <p
          className="leading mt-3"
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
            width: "400px",
            maxWidth: "90%",
          }}
        >
          {p}
        </p>
        <button className="btn mt-3 btn-dark">{btn}</button>
      </div>
    </InnerDiv>
  );
};

const Contanier = styled.main`
  & {
    width: 100%;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
    padding: 0.2rem;
    border-radius: 10px;
    position: relative;
    z-index: 1;
    top: -40%;
  }
  &:after {
    content: "";
    background: linear-gradient(160deg, purple, yellow);
    width: 50%;
    z-index: -1;
    bottom: 0px;
    top: -40%;
    margin: auto;
    right: -260px;
    height: 100%;
  }
  &:before {
    content: "";
    z-index: -1;
    bottom: 0px;
    top: 0px;
    margin: auto;
    left: -260px;
    background: linear-gradient(140deg, purple, pink);
    width: 50%;
    height: 100%;
  }
`;

const Main = () => {
  return (
    <Contanier>
      <div style={{ width: "95%", margin: "auto" }}>
        {data.map((e, i) => firstdiv(e, i))}
      </div>
    </Contanier>
  );
};
export { Main };
