import styled from "styled-components";

const NavS = styled.nav`
  display: flex;
  margin: 0;
  padding: 0;
  .menu {
    display: none;
  }
  @media screen and (max-width: 1020px) {
    z-index: 10;
    flex-direction: column;

    div,
    ul {
      flex-direction: column;
      display: none;
    }
    .menu,
    .menu div {
      display: block;
    }
    .navLogoMenu {
      flex-direction: row;

      justify-content: between;
      width: 100%;
    }
  }
`;
function menuClk(e) {
  document.querySelector(".menu").style.display = "none";
  document.querySelector(".cross").style.display = "block";
  document.querySelector("nav").style = `
display:flex;
background:rgba(255,255,255,.95);
position:absolute;
padding:1rem;
top:0;
width:50%;
bottom:0;
left:0;
margin:0;
align-items:center;
justify-content:center;

`;
  document.querySelector("nav ul").style = `
display:flex;
justify-content:center;
align-items:center;
`;
  document.querySelector("nav").style = `
flex-direction:row;
`;
  document.querySelector("nav div").style = `
display:flex;
flex-direction:column;
`;
}
function crossClk() {
  document.querySelector("nav div").style = `
flex-direction:row;
`;
  document.querySelector("nav ul").style = `
display:none;
`;
  document.querySelector(".menu").style.display = "block";
  document.querySelector(".cross").style.display = "none";
}
const cross = () => {
  return (
    <h1
      onClick={crossClk}
      className="cross"
      style={{
        transform: "rotate(45deg)",
        fontSize: "3rem",
        display: "none",
        margin: "0",
        padding: "0",
      }}
    >
      +
    </h1>
  );
};
const menu = () => {
  return (
    <div className="menu btn btn-light align-self-start" onClick={menuClk}>
      <div
        className="bg-dark rounded mt-1"
        style={{ width: "30px", height: "4px" }}
      ></div>
      <div
        className="bg-dark rounded mt-1"
        style={{ width: "30px", height: "4px" }}
      ></div>
      <div
        className="bg-dark rounded mt-1"
        style={{ width: "30px", height: "4px" }}
      ></div>
    </div>
  );
};

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

const logo = () => {
  return (
    <img
      className="btn btn-light"
      style={{ maxWidth: "50px", maxHeight: "50px" }}
      src="data:image/svg+xml;charset=utf-8,%3Csvg width='32' height='40' xmlns='http://www.w3.org/2000/svg' color='%23000'%3E%3Cpath d='m.38 11.986 6.412-8.704a.8.8 0 0 1 .556-.32l8.564-.952a.8.8 0 0 1 .176 0l8.564.951a.8.8 0 0 1 .556.32l6.413 8.705a.8.8 0 0 1-.04.997L16.455 30.475a.6.6 0 0 1-.908 0L.418 12.983a.8.8 0 0 1-.039-.997zm17.826-7.403 6.047 5.712a.4.4 0 0 0 .674-.32l-.29-4.054a.2.2 0 0 1 .392-.07l1.326 4.642a1 1 0 0 0 .645.674l2.83.943a.2.2 0 0 1-.062.39h-2.72a1 1 0 0 0-.843.463l-7.414 11.65a.3.3 0 0 1-.523-.291l5.314-10.96a.6.6 0 0 0-.54-.862H8.958a.6.6 0 0 0-.54.862l5.314 10.96a.3.3 0 0 1-.523.292l-7.414-11.65a1 1 0 0 0-.844-.464H2.148a.2.2 0 0 1-.062-.39l2.908-.945a1 1 0 0 0 .652-.677l1.325-4.637a.2.2 0 0 1 .392.07l-.29 4.054a.4.4 0 0 0 .674.32l6.047-5.712a.2.2 0 0 1 .293.272L10.03 9.848a.4.4 0 0 0 .31.652h11.32a.4.4 0 0 0 .31-.652l-4.057-4.993a.2.2 0 0 1 .293-.272z' fill='currentcolor' fill-rule='evenodd'/%3E%3C/svg%3E"
      alt="Logo"
    />
  );
};

const navitem = ["Product", "Learn", "Apps", "Pricing", "Why Sketch"];

const navul = () => {
  return (
    <List>
      {navitem.map((e, i) => (
        <li className="btn btn-light" key={i}>
          {e}
        </li>
      ))}
    </List>
  );
};
const left = () => {
  return (
    <div
      className=" d-flex navLogoMenu
justify-content-between
 align-items-center"
    >
      {cross()}
      {menu()}
      {logo()}
      {navul()}
    </div>
  );
};

const right = () => {
  return (
    <List>
      <li className="btn btn-light"> Support</li>
      <li className="btn btn-light">Sign In</li>
      <li className="btn btn-dark">Get Started for free</li>
    </List>
  );
};

const Nav = () => {
  return (
    <NavS
      className="w-95 mt-4
flex-wrap
justify-content-between align-items-center"
    >
      {left()}
      {right()}
    </NavS>
  );
};
export { Nav };
