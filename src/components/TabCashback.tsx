import React from "react";

import "../styles/tabCashback.scss";

const TabCashBack: React.FC = () => {
    let contentArray: {title: string, text: string}[] = [
        {
            title: '5%',
            text: 'For food delivery, cafes and restaurants',
        }, 
        {
            title: '5%',
            text: 'In supermarkets with our subscription',
        }, 
        {
            title: '2%',
            text: "In clothing stores and children's goods",
        }, 
        {
            title: '1%',
            text: 'Other purchases and payment of services and fines',
        }, 
        {
            title: 'up to 3%',
            text: 'Shopping in online stores',
        }, 
        {
            title: '30%',
            text: 'Purchases from our partners',
        }, 
    ];

    return (
        <div className="tabCashback">
            {
                contentArray.map((item, index) => {
                    return (
                        <div className={`tabCashback__item`} key={item.title + index}>
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