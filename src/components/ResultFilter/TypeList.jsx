import React, {useState} from "react";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import Collapse from '@material-ui/core/Collapse';
import {styled} from "@material-ui/core/styles"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Button from "@material-ui/core/Button";
import {InputCheckBox} from "../Input";

const StyledCard = styled(Card)(({theme}) => ({
    '& > div:first-child': {
        '& button': {
            padding: 0
        }
    },
    '& > div:nth-child(2)': {
        padding: 0,
        justifyContent: 'center'
    }
}));

const TypeList = ({pokemonType, setPokemonType, typeList, typeExpanded, setTypeExpanded}) => {
    const [selectedTypes, setSelected] = useState(Object.assign({}, ...pokemonType.map(el => ({[el]: true}))));
    const handleChange = e => {
        setSelected({...selectedTypes, [e.target.value]: e.target.checked});
    };

    const handleSubmit = () => {
        const filtered = Object.keys(selectedTypes).reduce((el, i) => {
            if(selectedTypes[i]){
                el[i] = selectedTypes[i];
            }
            return el;
        }, {});
        setPokemonType(Object.keys(filtered));
        setTypeExpanded(false);
    };

    return (
        <StyledCard square>
            <Collapse in={!typeExpanded} timeout="auto">
                <CardContent component={Box} py='0.5rem !important' display='flex' justifyContent='center' flexWrap='wrap'>
                    {pokemonType.map((el, i) => (
                        <Avatar key={i} src={typeList.find(t => t.name === el).thumbnailImage} />
                    ))}
                </CardContent>
            </Collapse>
            <CardActions>
                <IconButton onClick={() => setTypeExpanded(!typeExpanded)}>
                    {typeExpanded ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                </IconButton>
            </CardActions>
            <Collapse in={typeExpanded} timeout="auto" unmountOnExit>
                {typeList.map((el, i) => (
                    <CardContent key={i} component={Box} display='flex'>
                        <Avatar src={el.thumbnailImage} />
                        <InputCheckBox
                            checked={selectedTypes[el.name] || false}
                            label={el.name}
                            value={el.name}
                            name='type'
                            onChange={e => handleChange(e)}
                        />
                    </CardContent>
                ))}
                <CardContent component={Box} display='flex' justifyContent='center'>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleSubmit()}
                    >
                        Confirm
                    </Button>
                </CardContent>
            </Collapse>
        </StyledCard>
    );
};

export default TypeList;