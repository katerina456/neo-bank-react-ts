import React from "react";
import Acordeon from "./Acordeon";
import { issusingArray, usingArray } from "../constants/tabFaq";


const TabFaq: React.FC = () => {
    return (
        <div className="tabFaq">
            <Acordeon title='Issuing and receiving a card' array={issusingArray} />
            
            <Acordeon title='Using a credit card' array={usingArray} />
        </div>
    )
}

export default TabFaq;