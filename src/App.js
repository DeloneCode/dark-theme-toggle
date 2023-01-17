import styled from 'styled-components'
import MoonIcon from "./components/icons/MoonIcon";
import SunIcon from "./components/icons/SunIcon";
import Switch from "./components/Switch";


const StyledApp = styled.div`
  min-Height: "100vh",
  text-Align: "center",
  padding-Top: "10rem",
  backgroundColor: ${(props) => props.theme.body};
`;

const Name = styled.h1`
 margin: 1rem;
 color: ${(props) => props.theme.title};
`;

const Info = styled.p`
margin: 1rem;
color: ${(props) => props.theme.subtitle};
`;

const darkTheme = {
body: "#1c1c1c",
title: "#fff",
subtitle: "#b6b6b6",

}

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <StyledApp >
      <SunIcon />
      <Switch />
      <MoonIcon />
      <Name>Code Delone</Name>
      <Info>Email: delonecode@gmail.com</Info>
    </StyledApp>
    </ThemeProvider>
  );
}

export default App;
