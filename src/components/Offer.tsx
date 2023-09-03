import React from "react";
import { useDispatch } from 'react-redux';

import OfferItem from "./OfferItem";
import Loader from "./Loader";
import { changePrescoringStep } from "../store/slices/stepSlice";

import "../styles/offer.scss";


interface Props {
    offers: any[],
}


const Offer: React.FC<Props> = (props) => {
    const [isLoader, setIsLoader] = React.useState(false);
    let offers = props.offers;
    
    let localOffers: any;
    if (offers.length === 0) {
        localOffers = localStorage.getItem('userOffers') ;
        offers = JSON.parse(localOffers)
    }

    const dispatch = useDispatch();

    function setNextStep(item: object) {
        setIsLoader(true);
        
        fetch('http://localhost:8080/application/apply', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                    },
            body: JSON.stringify(item)
        }) 
        .then(res => {
            setIsLoader(false);
            console.log(res.status);
            dispatch(changePrescoringStep(3));
            localStorage.setItem('userStatus', 'APPROVED');
        })
        .catch(err => {
            setIsLoader(false);
            console.log(err);
        });
    }

    return (
        <>
        {!isLoader && <div className="offer">
            {offers.map(item => {
                return <OfferItem key={item.monthlyPayment}
                        term={item.term}
                        amountRequest={item.requestedAmount}
                        amountTotal={item.totalAmount}
                        payment={item.monthlyPayment} 
                        rate={item.rate} 
                        isInsurance={item.isInsuranceEnabled} 
                        isSalary={item.isSalaryClient} 
                        handleClick={() => setNextStep(item)}
                    />
            })}
        </div>}
        {isLoader && <Loader />}
        </>
    )
}

export default Offer;