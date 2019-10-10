import React from "react";
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import styled from "@material-ui/core/styles/styled";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import green from '@material-ui/core/colors/green';

const StyledTextField = styled(TextField)(({theme}) => ({
    '&': {
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    '& label': {
        color: '#fff',
        position: 'relative',
        '& > span:last-child': {
            visibility: 'hidden'
        }
    },
    '& label + div': {
        marginTop: '3rem'
    },
    '& label + div:before': {
        borderBottomColor: '#fff',
        borderBottomWidth: '2px'
    },
    '& input, & select': {
        color: '#fff',
    },
    '& select, & option': {
        textTransform: 'capitalize'
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

const StyledCheckBox = styled(Checkbox)(({theme}) => ({
    '&, & svg': {
        color: green['A700'],
    }
}));
const CheckComponent = ({required, id, onChange, ...props}) => (
    <StyledCheckBox
        {...props}
        required={required}
        id={id}
        onChange={onChange}
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
    />
);

const StyledFormControlLabel = styled(FormControlLabel)(({theme}) => ({
    '&': {
        textTransform: 'capitalize',
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'space-between'
    }
}));
export const InputCheckBox = ({required, id, name, label, value, onChange, ...options}) => (
    <StyledFormControlLabel
        {...options}
        control={<CheckComponent required={required} value={value} name={name} id={id} onChange={onChange} />}
        label={label}
        labelPlacement="start"
    />
);
