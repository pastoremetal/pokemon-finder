import React from "react";
import Typography from '@material-ui/core/Typography';
import InnerBox from "../InnerBox";
import NextButton from "../NextButton";
import {InputText} from "../Input";

const LetsGo = ({setStep, name, setName}) => (
    <InnerBox
        component='form'
        onSubmit={e => {
            e.preventDefault();
            setStep(2);
        }}
    >

        <Typography variant='h5' component='h1'>
            Let's meet each other first?
        </Typography>

        <InputText
            id='name'
            label="First we need to know your name..."
            required
            value={name}
            onChange={e => setName(e.target.value)}
        />

        <NextButton type='submit' />
    </InnerBox>
);

export default LetsGo;