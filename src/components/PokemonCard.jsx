import React from "react";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {styled} from "@material-ui/core";
import Card from '@material-ui/core/Card';

export const StyledCard = styled(Card)(({theme}) => ({
    '& > div': {
        display: 'flex',
        alignItems: 'center',
        '& > h2': {
            paddingLeft: '1rem'
        }
    }
}));


const PokemonCard = ({pokemon}) => (
    <StyledCard square>
        <CardContent>
            <CardMedia
                image={pokemon.thumbnailImage}
                title={pokemon.thumbnailAltText}
                component={Avatar}
            />
            <Typography gutterBottom component="h2">
                {pokemon.name}
            </Typography>
        </CardContent>
    </StyledCard>
);

export default PokemonCard;
