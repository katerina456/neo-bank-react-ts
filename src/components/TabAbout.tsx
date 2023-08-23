import React from "react";

import "../styles/tabAbout.scss";

const TabAbout: React.FC = () => {
    let contentArray: {img: string, title: string, text: string, long: boolean}[] = [
        {
            img: 'icons/Money_duotone.svg',
            title: 'Up to 50 000 ₽',
            text: 'Cash and transfers without commission and percent',
            long: false
        }, 
        {
            img: 'icons/Calendar_duotone.svg',
            title: 'Up to 160 days',
            text: 'Without percent on the loan',
            long: false
        }, 
        {
            img: 'icons/Clock_duotone.svg',
            title: 'Free delivery',
            text: 'We will deliver your card by courier at a convenient place and time for you',
            long: false
        }, 
        {
            img: 'icons/Bag_duotone.svg',
            title: 'Up to 12 months',
            text: 'No percent. For equipment, clothes and other purchases in installments',
            long: true
        }, 
        {
            img: 'icons/Credit_card_duotone.svg',
            title: 'Convenient deposit and withdrawal',
            text: 'At any ATM. Top up your credit card for free with cash or transfer from other cards',
            long: true
        }, 
    ];

    return (
        <div className="tabAbout">
            {
                contentArray.map(item => {
                    return (
                        <div className={`tabAbout__item ${item.long? 'tabAbout__item-long' : ''}`} key={item.title}>
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