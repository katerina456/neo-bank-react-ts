import React from "react";
import tabCashBackArray from "../constants/tabCashBack";

import "../styles/tabCashback.scss";

const TabCashBack: React.FC = () => {
    const generateKey = (str:string) => {
        return `${str}_${ new Date().getTime() }`;
    }

    return (
        <div className="tabCashback">
            {
                tabCashBackArray.map((item, index) => {
                    return (
                        <div className={`tabCashback__item`} key={generateKey(index.toString())}>
                            <p className="tabCashback__text">{item.text}</p>
                            <h2 className="tabCashback__title">{item.title}</h2>
                        </div>
                    )
                })
            }  
        </div>
    )
}

export default TabCashBack;