import React from "react";
import { useEffect, useState } from 'react';
import ExchangeRateItem from "./ExchangeRateItem";
import Wraper from "./Wraper";

import "../styles/exchangeRate.scss";

const ExchangeRate: React.FC = () => {
    const [exchangeValues, setExchageValues] = useState(['60.78', '9.08', '64.78', '60.78', '0.46', '3.39']);
    
    useEffect(() => {
        getExchange();
        setInterval(getExchange, 60000);
    }, []);

    const generateKey = (str:string) => {
        return `${str}_${ new Date().getTime() }`;
    }

    const currencies = ['USD', 'CNH', 'INR', 'EUR', 'JPY', 'MXN'];

    async function getExchange() {
        Promise.all(currencies.map(async( item )=> {
            let response = await fetch(`https://currency-exchange.p.rapidapi.com/exchange?to=RUB&from=${item}&q=1.0`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "5f91ee47e9mshc8436068fd8f0a7p107f97jsn34d66fb784a5",
                "x-rapidapi-host": "currency-exchange.p.rapidapi.com"
            }
            })
            const value = await response.json();
            return (value*Math.random()).toFixed(2);
        })).then(values => {
            setExchageValues(values);
        });
    }


    return (
        <Wraper classes="exchangeRate">
            <div className="exchangeRate__container">
                <div>
                    <h2 className="exchangeRate__title">Exchange rate in internet bank</h2>
                    <p className="exchangeRate__text">Currency</p>
                    <div className="exchangeRate-currency">
                        {
                            exchangeValues.map((value, index) => {
                                return <ExchangeRateItem key={generateKey(currencies[index])} title={currencies[index]} value={value} />
                            })
                        }
                    </div>
                    <a href="#" className="exchangeRate__text-white">All courses</a>
                </div>
                <div>
                    <p className="exchangeRate__text-small">Update every 15 minutes, MSC 09.08.2022</p>
                    <div className="exchangeRate__house">
                        <img src="icons/house.svg" alt=""/>
                    </div>
                </div>
            </div>
        </Wraper>                
    )
}

export default ExchangeRate;