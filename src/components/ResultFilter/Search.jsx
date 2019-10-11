import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import SearchIcon from '@material-ui/icons/Search';
import {styled} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import IconButton from '@material-ui/core/IconButton';
import {SearchInput} from "../Input";

const StyledContainer = styled(Container)(() => ({
    '&': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    '& > h1': {
        margin: '0 auto',
        paddingLeft: '2.1875rem',
        flexGrow: 1
    },
    '& > button': {
        color: '#fff',
        marginLeft: 'auto'
    }
}));

const Search = ({searchTerm, setSearchTerm}) => {
    const [searchOpen, setSearchOpen] = useState(false);
    const onSubmit = e => {
        e.preventDefault();
        setSearchTerm(e.target.querySelector('input[type="text"]').value);
        setSearchOpen(false);
    };

    return (
        !searchOpen
            ? (
                <StyledContainer>
                    <Typography variant='h5' component='h1' align='center'>
                        Pokémon Finder
                    </Typography>
                    <IconButton aria-label="search">
                        <SearchIcon fontSize="large" onClick={() => setSearchOpen(!searchOpen)} />
                    </IconButton>
                </StyledContainer>
            ): (
                <StyledContainer>
                    <form onSubmit={onSubmit}>
                        <SearchInput aria-label="search" />
                    </form>
                </StyledContainer>
            )
    );
};

export default Search;