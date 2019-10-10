import React, {useState} from 'react';
import styled from "@material-ui/core/styles/styled";
import Container from '@material-ui/core/Container';
import 'typeface-roboto';
import './App.css';
import Steps from "./components/steps";
import bg2x from "./assets/bg@2x.png";
import bg3x from "./assets/bg@3x.png";
import {getPokemonTypes, getPokemonList} from "./components/utils";

const StyledApp = styled(Container)(({theme}) => ({
  '&': {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    paddingTop: '3rem',
    paddingBottom: '1.5rem',
    color: '#fff',
    [theme.breakpoints.up('sm')]: {
      backgroundImage: `url(${bg2x})`,
      flexDirection: 'row'
    },
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${bg3x})`
    }
  }
}));

function App() {
  const [name, setName] = useState(null);
  const [pokemonType, setPokemonType] = useState(['normal', 'flying']);
  const [typeList] = useState(getPokemonTypes());
  const [pokemonList] = useState(getPokemonList());

  return (
    <StyledApp className="App">
      <Steps
          name={name}
          pokemonType={pokemonType}
          setName={setName}
          setPokemonType={setPokemonType}
          typeList={typeList}
          pokemonList={pokemonList}
      />
    </StyledApp>
  );
}

export default App;
