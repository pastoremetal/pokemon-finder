import React, {useState} from "react";
import LetsGo from "./LetsGo";
import Name from  "./Name";
import Type from  "./Type";
import Result from "./Result";

const stepList = [
    LetsGo,
    Name,
    Type,
    Result
];

function getStep(step) {
    return stepList[step];
}

const Steps = ({name, pokemonType, setName, setPokemonType, typeList, pokemonList}) => {
    const [step, setStep] = useState(0  );
    const StepComponent = getStep(step);

    return (
        <StepComponent
            setStep={setStep}
            name={name}
            pokemonType={pokemonType}
            setName={setName}
            setPokemonType={setPokemonType}
            typeList={typeList}
            pokemonList={pokemonList}
        />);
};

export default Steps;
