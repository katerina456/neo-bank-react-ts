import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

import surprise from '../images/surprise.png';

import "../styles/success.scss";

const Success: React.FC = () => {
    return (
        <div className="success">
            <div className="success__image"><img src={surprise} alt="" /></div>
            <h2 className="success__title">
                Congratulations! You have completed your new credit card.
            </h2>
            <p className="success__text">
                Your credit card will arrive soon. Thank you for choosing us!
            </p>
            <Link to="/" className="success__button">
                <Button text="View other offers of our bank" />
            </Link>
        </div>
    )
}

export default Success;