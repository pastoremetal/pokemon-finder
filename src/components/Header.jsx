import React from "react";
import styled from "@material-ui/core/styles/styled";
import logo from "../assets/pokemon-logo.png";
import finder from "../assets/finder.png";

const StyledHeader = styled('header')(({theme}) => ({
    '&': {
        textAlign: 'center',
        '& > img:first-child': {
            width: '100%'
        }
    }
}));

const Header = () => (
    <StyledHeader>
        <img src={logo} alt="Pokémon Logo" />
        <img src={finder} alt="Finder" />
    </StyledHeader>
);

export default Header;
