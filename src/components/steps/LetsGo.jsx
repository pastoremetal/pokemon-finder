import React from "react";
import styled from "@material-ui/core/styles/styled";
import Button from '@material-ui/core/Button';
import pikachu from "../../assets/pikachu.png";
import Header from "../Header";
import InnerBox from "../InnerBox";

const StyledDiv = styled(InnerBox)(({theme}) => ({
    '& > img': {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    '& > button': {
        color: '#fff',
        margin: 'auto 0',
        marginTop: '45%',
        [theme.breakpoints.up('md')]: {
            margin: 'auto 0'
        }
    }
}));

const LetsGo = ({setStep}) => (
    <StyledDiv display="flex">
        <Header />
        <Button variant="contained" color="secondary" onClick={() => setStep(1)}>
            Let's go!
        </Button>
        <img src={pikachu} alt="Pikachu" />
    </StyledDiv>
);

export default LetsGo;