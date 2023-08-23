import React from "react";
import tabAboutArray from "../constants/tabAbout";

import "../styles/tabAbout.scss";

const TabAbout: React.FC = () => {
    const generateKey = (str:string) => {
        return `${str}_${ new Date().getTime() }`;
    }

    return (
        <div className="tabAbout">
            {
                tabAboutArray.map(item => {
                    return (
                        <div className={`tabAbout__item ${item.long? 'tabAbout__item-long' : ''}`} key={generateKey(item.title)}>
                            <div className="tabAbout__image">
                                <img src={item.img} alt="" />
                            </div>
                            <h2 className="tabAbout__title">{item.title}</h2>
                            <p className="tabAbout__text">{item.text}</p>
                        </div>
                    )
                })
            }  
        </div>
    )
}

export default TabAbout;