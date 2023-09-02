import React from "react";
import { Link } from 'react-scroll';
import { Link as LinkRout } from "react-router-dom";

import Button from "./Button";
import TooltipItem from "./TooltipItem";
import Wraper from "./Wraper";
import tooltipArray from "../constants/tooltipArray";

import "../styles/tooltip.scss";

import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


const Tooltip: React.FC = () => {
    const steps = useAppSelector(state => state.step);

    return (
        <Wraper classes="tooltip">
            <div className="tooltip__contailer">
                <div>
                    <h2 className="tooltip__title">Platinum digital credit card</h2>
                    <p className="tooltip__text">
                        Our best credit card. 
                        Suitable for everyday spending and shopping.
                        Cash withdrawals and transfers without commission and interest.
                    </p>
                    <div className="tooltip_info">
                        {tooltipArray.map(item => {
                            return <TooltipItem key={item.title} title={item.title} text={item.text} hint={item.hint} />
                        })}
                    </div>
                    {steps.step !== 3 && <Link activeClass="active"
                        to="applyForm"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={800}
                    >
                        <Button text={steps.step === 1? 'Apply for card' : 'Choose an offer'} />
                    </Link>}
                    {steps.step === 3 && <LinkRout to='/loan/applicationId'>
                        <Button text='Continue registration' />
                    </LinkRout>}
                </div>
                <div className="tooltip__foto">
                    <img src="images/credit-card.png" alt="" />
                </div>
            </div>
        </Wraper>
    )
}

export default Tooltip;