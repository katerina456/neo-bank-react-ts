import React from "react";
import Wraper from "./Wraper";

import "../styles/map.scss";

const BankMap: React.FC = () => {
    return (
        <Wraper classes="map">
            <h2 className="map__title">You can use our services anywhere in the world</h2>
            <p className="map__text">Withdraw and transfer money online through our application</p>
            <div className="map__foto">
                <img src="images/map.png" alt=""/>
            </div>
        </Wraper>
    )
}

export default BankMap;