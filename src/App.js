import styled from 'styled-components'
import MoonIcon from "./components/icons/MoonIcon";
import SunIcon from "./components/icons/SunIcon";
import Switch from "./components/Switch";


const StyledApp = styled.div`
  min-Height: "100vh",
  text-Align: "center",
  padding-Top: "10rem",
  backgroundColor: "#f5f5f5",
`;

const Name = styled.h1`
 margin: 1rem;
`;

const Info = styled.p`
margin: 1rem;
`;

function App() {
  return (
    <StyledApp >
      <SunIcon />
      <Switch />
      <MoonIcon />
      <Name>Code Delone</Name>
      <Info>Email: delonecode@gmail.com</Info>
    </StyledApp>
  );
}

export default App;
