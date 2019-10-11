import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import TypeList from "./TypeList";

const ResultFilter = ({setIsOrdered, isOrdered, pokemonType, typeList, typeExpanded,setTypeExpanded, setPokemonType}) => {
    return (
        <Box flexGrow={0} mx={['-1rem', 0]}>
            <Typography variant='h5' component='h1' align='center'>
                Pokémon Finder
            </Typography>
            <TypeList
                pokemonType={pokemonType}
                typeList={typeList}
                typeExpanded={typeExpanded}
                setTypeExpanded={setTypeExpanded}
                setPokemonType={setPokemonType}
            />
            {!typeExpanded && (
                <Card square align='right'>
                    <CardContent component={Box} py='0.5rem !important'>
                        <Button onClick={() => setIsOrdered(!isOrdered)} endIcon={isOrdered ? <ArrowDownward /> : <ArrowUpwardIcon />}>
                            <Typography variant='caption'>
                                Order
                            </Typography>
                        </Button>
                    </CardContent>
                </Card>
            )}
        </Box>
    );
};

export default ResultFilter;
