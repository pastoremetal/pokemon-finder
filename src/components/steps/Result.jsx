import React, {useState} from "react";
import Box from '@material-ui/core/Box';
import InnerBox from "../InnerBox";
import Collapse from '@material-ui/core/Collapse';
import PokemonCard from "../PokemonCard";
import ResultFilter from "../ResultFilter";

const Result = ({setStep, name, pokemonType, setPokemonType, typeList, pokemonList}) => {
    const [isOrdered, setIsOrdered] = useState(false);
    const [typeExpanded, setTypeExpanded] = useState(false);

    let filteredList = pokemonType && pokemonList.filter(el => (
        el.type.filter(n => pokemonType.includes(n)).length === pokemonType.length
    ));
    if (isOrdered) {
        filteredList.sort((a, b) => a.name > b.name);
    }

    return (
        <InnerBox
            component='form'
            onSubmit={e => {
                e.preventDefault();
                console.log(e);
                // setStep(2);
            }}
        >
            <ResultFilter
                setIsOrdered={setIsOrdered}
                isOrdered={isOrdered}
                pokemonType={pokemonType}
                typeList={typeList}
                typeExpanded={typeExpanded}
                setTypeExpanded={setTypeExpanded}
                setPokemonType={setPokemonType}
            />
            <Collapse component={Box} flexGrow={1} mx={['-1rem', 0]} in={!typeExpanded}>
                {filteredList.map((el, i) => (
                    <PokemonCard key={i} pokemon={el} />
                ))}
            </Collapse>

        </InnerBox>
    );
};

export default Result;
