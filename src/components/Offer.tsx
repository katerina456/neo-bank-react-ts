import React from "react";
import { useDispatch } from 'react-redux';

import OfferItem from "./OfferItem";
import Loader from "./Loader";
import { changeStep } from "../store/slices/stepSlice";

import "../styles/offer.scss";


interface Props {
    offers: any[],
}


const Offer: React.FC<Props> = (props) => {
    const [isLoader, setIsLoader] = React.useState(false);
    let offers = props.offers;

    const dispatch = useDispatch();

    function setNextStep(item: object) {
        setIsLoader(true);
        console.log(item);
        console.log('id',localStorage.getItem('userId'))
        console.log(localStorage.getItem('userOffers'))
        
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
            dispatch(changeStep(3))
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