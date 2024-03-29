import React from "react";
import Scoring from "../components/Scoring";
import FormMessage from "../components/FormMessage";
import Wraper from "../components/Wraper";

import "../styles/scoringSection.scss";
import "../styles/main.scss";


import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const LoanApplicationId: React.FC = () => {
    const steps = useAppSelector(state => state.step);

    return (
        <main>   
            <Wraper classes="scoringSection"> 
                {steps.scoringStep === 1 && <Scoring />}
                {steps.scoringStep === 2 && 
                            <FormMessage title="Wait for a decision on the application" 
                            text="The answer will come to your mail within 10 minutes" />}
            </Wraper> 
        </main>
    )
}

export default LoanApplicationId;