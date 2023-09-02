import React from "react";
import Button from "./Button";

import "../styles/offerItem.scss";

interface Props {
    payment: number,
    term: number,
    amountRequest: number,
    amountTotal: number,
    rate: number,
    isInsurance: boolean,
    isSalary: boolean,
    handleClick: any,
}

const OfferItem: React.FC<Props> = (props) => {
    return (
        <div className="offerItem">
            <div>
                <div className="offerItem__image">
                    <img src="../../images/surpriseimage.png" alt="" />
                </div>
                <div className="offerItem__info">
                    <p className="offerItem__text">Requested amount: {props.amountRequest} ₽</p>
                    <p className="offerItem__text">Total amount: {props.amountTotal} ₽</p>
                    <p className="offerItem__text">For {props.term} months</p>
                    <p className="offerItem__text">Monthly payment: {props.payment} ₽</p>
                    <p className="offerItem__text">Your rate: {props.rate}%</p>
                    <div className="offerItem__block">
                        <p className="offerItem__text">Insurance included</p>
                        {props.isInsurance? <img src="../../icons/round-ok.svg" alt="" /> :
                        <img src="../../icons/round-mistake.svg" alt="" />
                        }
                        
                    </div>
                    <div className="offerItem__block">
                        <p className="offerItem__text">Salary client</p>
                        {props.isSalary? <img src="../../icons/round-ok.svg" alt="" /> :
                        <img src="../../icons/round-mistake.svg" alt="" />
                        }
                    </div>
                </div>
            </div>
            <div onClick={props.handleClick}>
                <Button text='Select' />
            </div>
            
        </div>
    )
}

export default OfferItem;