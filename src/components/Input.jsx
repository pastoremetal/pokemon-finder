import React from "react";
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import styled from "@material-ui/core/styles/styled";

const StyledTextField = styled(TextField)(({theme}) => ({
    '&': {
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    '& label': {
        color: '#fff',
        '& > span:last-child': {
            visibility: 'hidden'
        }
    },
    '& label + div': {
        marginTop: '3.5rem'
    },
    '& label + div:before': {
        borderBottomColor: '#fff',
        borderBottomWidth: '2px'
    },
    '& input, select': {
        color: '#fff',
    }
}));

const Label = ({label}) => <Typography variant='h6' component='span'>{label}</Typography>;

export const InputText = ({required, id, label, onChange, select, SelectProps, children}) => (
    <StyledTextField
        select={select}
        onChange={onChange}
        required={required}
        id={id}
        label={<Label label={label} />}
        fullWidth
        SelectProps={SelectProps}
        InputLabelProps={{
            shrink: true,
        }}
    >
        {children}
    </StyledTextField>
);

