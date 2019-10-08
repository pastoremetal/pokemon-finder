import React from "react";
import {styled} from "@material-ui/core";
import logo from "../assets/pokemon-logo.png";
import finder from "../assets/finder.png";

const StyledHeader = styled('header')(({theme}) => ({
    '&': {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '2rem',
        paddinBottom: '2rem',
        flexWrap: 'wrap'
    }
}));

const Header = () => (
    <StyledHeader>
        <img src={logo} alt="Pokémon Logo" />
        <img src={finder} alt="Finder" />
    </StyledHeader>
);

export default Header;
