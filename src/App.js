import React, {useState} from 'react';
import styled from "@material-ui/core/styles/styled";
import Container from '@material-ui/core/Container';
import 'typeface-roboto';
import './App.css';
import Steps from "./components/steps";
import {getPokemonTypes, getPokemonList} from "./components/utils";

const StyledApp = styled(Container)(({theme}) => ({
  '&': {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    paddingTop: '3rem',
    paddingBottom: '1.5rem',
    color: '#fff',
    minHeight: '100%',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    },
  }
}));

function App() {
  const [name, setName] = useState(null);
  const [pokemonType, setPokemonType] = useState(['normal', 'flying']);
  const [typeList] = useState(getPokemonTypes());
  const [pokemonList] = useState(getPokemonList());

  return (
    <StyledApp className="App" maxWidth="sm">
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
