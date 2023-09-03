import React from "react";
import { Element } from 'react-scroll';

import Step from "./Step";
import Wraper from "./Wraper";
import StepMessage from "./StepMessage";
import Offer from "./Offer";
import PrescoringForm from "./PrescoringForm";

import "../styles/prescoring.scss";

import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


const Prescoring: React.FC = () => {
   const [offers, setOffers] = React.useState([]);

   const steps = useAppSelector(state => state.step);

   function showOffers(data: any) {
       //console.log(data[0].applicationId);
       localStorage.setItem('userId', data[0].applicationId);
       localStorage.setItem('userOffers', JSON.stringify(data));
       localStorage.setItem('userStatus', 'PREAPPROVAL');
       setOffers(data);
    }

    return (
        <Wraper classes="prescoring">
            <h2 className="prescoring__title">How to get a card</h2>
            <div className="steps">
                <Step classes='steps__paragraph' number='1' 
                    text='Fill out an online application - you do not
                        need to visit the bank'
                />
                <Step classes='steps__paragraph-medium' number='2' 
                    text="Find out the bank's decision immediately after
                    filling out the application"
                />
                <Step classes='steps__paragraph-long' number='3' 
                    text='The bank will deliver the card free of charge, wherever
                    convenient, to your city'
                />
            </div>
                      
            {steps.prescoringStep !== 3 && <Element name="applyForm" className="element" />}
            {steps.prescoringStep === 1 && <PrescoringForm handleClick={showOffers} />}
            {steps.prescoringStep === 2 && <Offer offers={offers} />}
            {steps.prescoringStep === 3 && <StepMessage />}
        </Wraper>
    )
}

export default Prescoring;