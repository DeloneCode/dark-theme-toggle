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

function App() {
  return (
    <StyledApp >
      <SunIcon />
      <Switch />
      <MoonIcon />
      <h1>Code Delone</h1>
      <p>Email: delonecode@gmail.com</p>
    </StyledApp>
  );
}

export default App;
