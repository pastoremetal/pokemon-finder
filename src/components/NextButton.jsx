import React from "react";
import Button from "@material-ui/core/Button";
import styled from "@material-ui/core/styles/styled";
import next from "../assets/next.png";

const StyledButton = styled(Button)(({theme}) => ({
    alignSelf: 'center',
    padding: '0 25%',
    marginTop: 'auto'
}));

const NextButton = ({...props}) => (
    <StyledButton {...props}>
        <img src={next} alt='Next step' />
    </StyledButton>
);

export default NextButton;