import React from "react";
import Wraper from "../components/Wraper";
import FormMessage from "../components/FormMessage";
import Sign from "../components/Sign";

import "../styles/scoringSection.scss";
import "../styles/main.scss";


import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const LoanSign: React.FC = () => {
    const steps = useAppSelector(state => state.step);

    return (
        <main>   
            <Wraper classes="scoringSection"> 
                {steps.signStep === 1 && <Sign />}
                {steps.signStep === 2 && <FormMessage title='Documents have been successfully signed and sent for approval'
                    text='Within 10 minutes you will be sent a PIN code to your email for confirmation' />}
            </Wraper> 
        </main>
    )
}

export default LoanSign;