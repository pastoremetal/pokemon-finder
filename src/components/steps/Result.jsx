import React from "react";
import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';
import InnerBox from "../InnerBox";
import PokemonCard from "../PokemonCard";

const Result = ({setStep, name, pokemonType, setPokemonType, typeList, pokemonList}) => (
    <InnerBox
        component='form'
        onSubmit={e => {
            e.preventDefault();
            setStep(2);
        }}
    >

        <Typography variant='h5' component='h1' align='center'>
            Pokémon Finder
        </Typography>

        <Box flexGrow={1} mx={['-1rem', 0]}>
            {pokemonList.map((el, i) => {console.log(el);return (
                el.type.includes(pokemonType) && <PokemonCard key={i} pokemon={el} />
            )}) }
        </Box>

    </InnerBox>
);

export default Result;
