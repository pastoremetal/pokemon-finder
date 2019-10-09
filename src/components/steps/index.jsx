import React, {useState} from "react";
import LetsGo from "./LetsGo";
import Name from  "./Name";
import Type from  "./Type";

const stepList = [
    LetsGo,
    Name,
    Type
];

function getStep(step) {
    return stepList[step];
}

const Steps = ({name, pokemonType, setName, setPokemonType}) => {
    const [step, setStep] = useState(2);
    const StepComponent = getStep(step);

    return (
        <StepComponent
            setStep={setStep}
            name={name}
            pokemonType={pokemonType}
            setName={setName}
            setPokemonType={setPokemonType}
        />);
};

export default Steps;