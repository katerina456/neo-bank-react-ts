import React from "react";

import "../styles/tabRates.scss";

const TabRates: React.FC = () => {
    let contentArray: {title: string, text: string[]}[] = [
        {
            title: 'Card currency',
            text: ['Rubles, dollars, euro']
        }, 
        {
            title: 'Interest free period',
            text: ['0% up to 160 days']
        }, 
        {
            title: 'Payment system',
            text: ['Mastercard, Visa']
        }, 
        {
            title: 'Maximum credit limit on the card',
            text: ['600 000 ₽']
        }, 
        {
            title: 'Replenishment and withdrawal',
            text: ['At any ATM. Top up your credit card for free with cash or transfer from other cards']
        }, 
        {
            title: 'Max cashback per month',
            text: ['15 000 ₽']
        }, 
        {
            title: 'Transaction Alert',
            text: ['60 ₽ — SMS or push notifications', '0 ₽ — card statement, information about transactions in the online bank']
        }, 
    ];

    return (
        <div className="tabRates">
            {
                contentArray.map((item, index) => {
                    let paragraphs = item.text
                    return (
                        <div className="tabRates__item" key={index*Math.random()}>
                            <p className="tabRates__title">{item.title}</p>
                            <div className="tabRates__paragraphs">
                            {
                                paragraphs.map((element, index) => 
                                    <p className="tabRates__text" key={index*Math.random()}>
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