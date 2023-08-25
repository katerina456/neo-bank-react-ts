import React from "react";
import { Link } from 'react-scroll';
import Button from "./Button";
import TooltipItem from "./TooltipItem";
import Wraper from "./Wraper";

import "../styles/tooltip.scss";


const Tooltip: React.FC = () => {
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
                        <TooltipItem title='Up to 160 days' text='No percent' 
                                     hint='When repaying the full debt up to 160 days.' />
                        <TooltipItem title='Up to 600 000 ₽' text='Credit limit'
                                     hint='Over the limit willaccrue percent'  />
                        <TooltipItem title='0 ₽' text='Card service is free' 
                                     hint='Promotion valid until December 31, 2022.' />
                    </div>
                    <Link activeClass="active"
                        to="applyForm"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={800}
                    >
                        <Button text='Apply for card' />
                    </Link>
                </div>
                <div className="tooltip__foto">
                    <img src="images/credit-card.png" alt="" />
                </div>
            </div>
        </Wraper>
    )
}

export default Tooltip;