import React from "react";
import tabRatesArray from "../constants/tabRates";

import "../styles/tabRates.scss";

const TabRates: React.FC = () => {
    const generateKey = (str:string) => {
        return `${str}_${ new Date().getTime() }`;
    }

    return (
        <div className="tabRates">
            {
                tabRatesArray.map((item, index) => {
                    let paragraphs = item.text
                    return (
                        <div className="tabRates__item" key={generateKey(index.toString())}>
                            <p className="tabRates__title">{item.title}</p>
                            <div className="tabRates__paragraphs">
                            {
                                paragraphs.map((element, index) => 
                                    <p className="tabRates__text" key={generateKey(index.toString())}>
                                        {element}
                                    </p>)
                            }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TabRates;