import styled from 'styled-components'
import MoonIcon from "./components/icons/MoonIcon";
import SunIcon from "./components/icons/SunIcon";
import Switch from "./components/Switch";
import { ThemeProvider } from 'styled-components'
import { useState } from 'react';


const StyledApp = styled.div`
  min-height: 100vh;
  text-align: center;
  padding-top: 10rem;
  background-color: ${(props) => props.theme.body};
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
body: "#1C1C1C",
title: "#fff",
subtitle: "#b6b6b6",
icon: "#b6b6b6",
};

const lightTheme = {
body: "#fff",
title: "#1c1c1c",
subtitle: "#333",
icon: "#1c1c1c",

};

function App() {
const [theme, setTheme] = useState("dark");
const isDarkTheme = theme === "dark";

const toggleTheme = () => {
  setTheme(isDarkTheme ? "light" : "dark");

};


  
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
    <StyledApp >
      <SunIcon />
      <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <MoonIcon />
      <Name>Code Delone</Name>
      <Info>Email: delonecode@gmail.com</Info>
    </StyledApp>
    </ThemeProvider>
  );
}

export default App;
