import React from "react";
import Scoring from "../components/Scoring";
import ScoringMessage from "../components/ScoringMessage";
import Wraper from "../components/Wraper";

import "../styles/scoringSection.scss";
import "../styles/main.scss";

const LoanApplicationId: React.FC = () => {
    const [step, setStep] = React.useState(1);

    return (
        <main>   
            <Wraper classes="scoringSection"> 
                {step === 1 && <Scoring handleClick={setStep} />}
                {step === 2 && <ScoringMessage />}
            </Wraper> 
        </main>
    )
}

export default LoanApplicationId;