import React from "react";
import Typography from '@material-ui/core/Typography';

import InnerBox from "../InnerBox";
import NextButton from "../NextButton";
import {InputText} from "../Input";

const Type = ({setStep, name, type, setPokemonType, typeList}) => (
    <InnerBox
        component='form'
        onSubmit={e => {
            e.preventDefault();
            setStep(3);
        }}
    >

        <Typography variant='h5' component='h1'>
            Hello, trainer {name}!
        </Typography>

        <InputText
            id='type'
            select
            label="...now tell us wich is your favorite Pokémon type:"
            required
            value={type}
                onChange={e => setPokemonType([e.target.value])}
            SelectProps={{
                native: true,
            }}
        >
            {typeList.map((el, i) => <option key={i} value={el.name}>{el.name}</option>)}
        </InputText>

        <NextButton type='submit' />
    </InnerBox>
);

export default Type;
