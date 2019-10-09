import React from "react";
import Typography from '@material-ui/core/Typography';
import InnerBox from "../InnerBox";
import NextButton from "../NextButton";
import {InputText} from "../Input";

const LetsGo = ({setStep, name, type, setPokemonType}) => (
    <InnerBox
        component='form'
        onSubmit={e => {
            e.preventDefault();
            setStep(2);
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
            onChange={e => setPokemonType(e.target.value)}
            SelectProps={{
                native: true,
            }}
        >
            <option key='1' value='adfasd'>asdfasdfa</option>
        </InputText>

        <NextButton type='submit' />
    </InnerBox>
);

export default LetsGo;