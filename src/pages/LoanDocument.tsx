import React from "react";
import Document from "../components/Document";
import Wraper from "../components/Wraper";
import FormMessage from "../components/FormMessage";

import "../styles/scoringSection.scss";
import "../styles/main.scss";


import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const LoanDocument: React.FC = () => {
    const steps = useAppSelector(state => state.step);

    return (
        <main>   
            <Wraper classes="scoringSection"> 
                {steps.documentStep === 1 && <Document />}
                {steps.documentStep === 2 && <FormMessage title='Documents are formed'
                    text='Documents for signing will be sent to your email' />}
            </Wraper> 
        </main>
    )
}

export default LoanDocument;