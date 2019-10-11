import React from "react";
import styled from "@material-ui/core/styles/styled";
import logoX3 from "../assets/pokemon-logo@3x.png";
import finderX3 from "../assets/finder@3x.png";

const StyledHeader = styled('header')(({theme}) => ({
    '&': {
        textAlign: 'center',
        '& > img:first-child': {
            width: '100%'
        }
    }
}));

const Header = () => {
    return (
    <StyledHeader>
        <img src={logoX3} alt="Pokémon Logo" />
        <img src={finderX3} alt="Finder" />
    </StyledHeader>
    );
}

export default Header;
