import React from "react";
import Step from "./Step";
import PrescoringForm from "./PrescoringForm";
import Wraper from "./Wraper";

import "../styles/prescoring.scss";

const Prescoring: React.FC = () => {
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
                      
            <PrescoringForm />
        </Wraper>
    )
}

export default Prescoring;