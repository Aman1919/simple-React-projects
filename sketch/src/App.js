import { Nav } from "./components/navbar/navComponents";
import styled from "styled-components";
import { FirstDiv } from "./components/Content/firstdiv";
import { Main } from "./components/Content/content";
import { Footer } from "./components/footer/footerComponents";
const Contanier = styled.div`
  width: 1200px;
  max-width: 90%;
  margin: 0 auto;
`;
function App() {
  return (
    <div className="w-100 bg-light">
      <Contanier>
        <Nav />
        <FirstDiv />
        <Main />
        <Footer />
      </Contanier>
    </div>
  );
}

export default App;
