import React from "react";
import Wraper from "../components/Wraper";
import Code from "../components/Code";
import Success from "../components/Success";

import "../styles/scoringSection.scss";
import "../styles/main.scss";


import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const LoanCode: React.FC = () => {
    const steps = useAppSelector(state => state.step);

    return (
        <main>   
            <Wraper classes="scoringSection"> 
                {!steps.success && <Code /> }
                {steps.success && <Success /> }
            </Wraper> 
        </main>
    )
}

export default LoanCode;