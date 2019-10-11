import React, { type Node } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import styled from "@material-ui/core/styles/styled";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import green from "@material-ui/core/colors/green";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

const StyledTextField = styled(TextField)(() => ({
  "&": {
    marginTop: "auto",
    marginBottom: "auto"
  },
  "& label": {
    color: "#fff",
    position: "relative",
    "& > span:last-child": {
      visibility: "hidden"
    }
  },
  "& label + div": {
    marginTop: "3rem"
  },
  "& label + div:before": {
    borderBottomColor: "#fff",
    borderBottomWidth: "2px"
  },
  "& input, & select": {
    color: "#fff"
  },
  "& select, & option": {
    textTransform: "capitalize"
  }
}));

const Label = ({ label }: { label: string }) => (
  <Typography variant="h6" component="span">
    {label}
  </Typography>
);

type InputTextProps = {
  required?: boolean,
  id?: string,
  label?: string,
  onChange?: ({}) => any | void,
  select?: boolean,
  SelectProps?: {},
  children: Node
};
export const InputText = ({
  required,
  id,
  label,
  onChange,
  select,
  SelectProps,
  children
}: InputTextProps) => (
  <StyledTextField
    select={select}
    onChange={onChange}
    required={required}
    id={id}
    label={<Label label={label} />}
    fullWidth
    SelectProps={SelectProps}
    InputLabelProps={{
      shrink: true
    }}
  >
    {children}
  </StyledTextField>
);
InputText.defaultProps = {
  required: false,
  id: null,
  label: null,
  onChange: null,
  select: false,
  SelectProps: {}
};

const StyledCheckBox = styled(Checkbox)(({ theme }) => ({
  "&, & svg": {
    color: green.A700
  }
}));
const CheckComponent = ({ required, id, onChange, ...props }) => (
  <StyledCheckBox
    {...props}
    required={required}
    id={id}
    onChange={onChange}
    icon={<RadioButtonUncheckedIcon />}
    checkedIcon={<CheckCircleIcon />}
  />
);

const StyledFormControlLabel = styled(FormControlLabel)(() => ({
  "&": {
    textTransform: "capitalize",
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between"
  }
}));
type InputCheckBoxProps = {
  required?: boolean,
  id?: string,
  name?: string,
  label?: string,
  value?: string,
  onChange?: ({}) => any | void
};
export const InputCheckBox = ({
  required,
  id,
  name,
  label,
  value,
  onChange,
  ...options
}: InputCheckBoxProps) => (
  <StyledFormControlLabel
    {...options}
    control={
      <CheckComponent
        required={required}
        value={value}
        name={name}
        id={id}
        onChange={onChange}
      />
    }
    label={label}
    labelPlacement="start"
  />
);
InputCheckBox.defaultProps = {
  required: false,
  id: null,
  name: null,
  label: null,
  value: null,
  onChange: () => {}
};

const StyledSearchInput = styled(InputBase)(({ theme }) => ({
  "&": {
    padding: "0.55rem 0",
    flexGrow: 1,
    "label + &": { marginTop: theme.spacing(3) }
  },
  "& input": {
    position: "relative",
    width: "100%",
    borderTopLeftRadius: "4px",
    borderBottomLeftRadius: "4px",

    "&:focus, &:focus + div": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main
    }
  },
  "& input, & input + div": {
    backgroundColor: theme.palette.common.white,
    padding: "0.625rem 0.75rem",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    border: "1px solid #ced4da"
  },
  "& input + div": {
    height: "1.1875rem",
    borderTopRightRadius: "4px",
    borderBottomRightRadius: "4px",
    margin: 0
  }
}));

export const SearchInput = ({ onChange, value }) => (
  <StyledSearchInput
    onChange={e => onChange && onChange(e)}
    value={value}
    endAdornment={(
      <InputAdornment position="end">
        <IconButton type="submit" aria-label="toggle password visibility">
          <SearchIcon />
        </IconButton>
      </InputAdornment>
    )}
  />
);
