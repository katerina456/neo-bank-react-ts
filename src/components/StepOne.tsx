import React from "react";
import { Element } from 'react-scroll';

import PrescoringForm from "./PrescoringForm";
import Offer from "./Offer";
import StepMessage from "./StepMessage";

import "../styles/prescoring.scss";

const StepOne: React.FC = () => {
    const [step, setStep] = React.useState(1)

    return (
        <>       
            <Element name="applyForm" className="element" />
            {step === 1 && <PrescoringForm handleClick={setStep} />}
            {step === 2 && <Offer handleClick={setStep} />}
            {step === 3 && <StepMessage />}
        </>
    )
}

export default StepOne;