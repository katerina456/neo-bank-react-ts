import React from "react";
import OfferItem from "./OfferItem";
import offerArray from "../constants/offers";
import Loader from "./Loader";

import "../styles/offer.scss";


interface Props {
    handleClick: Function,
}

const Offer: React.FC<Props> = (props) => {
    const [isLoader, setIsLoader] = React.useState(false);

    function setNextStep() {
        setIsLoader(true);
        
        fetch('http://localhost:8080/application/apply', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                    },
            body: JSON.stringify('val')
        }) 
        .then(res => {
            setIsLoader(false);
            console.log(res.status);
            props.handleClick(3);
        })
        .catch(err => {
            setIsLoader(false);
            console.log(err);
            props.handleClick(3);
        });
    }

    return (
        <>
        {!isLoader && <div className="offer">
            {offerArray.map(item => {
                return <OfferItem key={item.payment*item.rate}
                        payment={item.payment} 
                        rate={item.rate} 
                        isInsurance={item.isInsurance} 
                        isSalary={item.isSalary} 
                        handleClick={setNextStep}
                    />
            })}
        </div>}
        {isLoader && <Loader />}
        </>
    )
}

export default Offer;