import React from 'react';
import {styled} from "@material-ui/core/styles";
import 'typeface-roboto';
import './App.css';
import bg2x from "./assets/bg@2x.png";
import bg3x from "./assets/bg@3x.png";

import Header from "./components/Header";


const StyledApp = styled('div')(({theme}) => ({
  '&': {
    [theme.breakpoints.up('sm')]: {
      backgroundImage: `url(${bg2x})`,
    },
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${bg3x})`,
    },
  }
}));

function App() {
  return (
    <StyledApp className="App">
      <Header/>
    </StyledApp>
  );
}

export default App;
