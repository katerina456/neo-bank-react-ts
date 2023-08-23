import React from "react";

interface Props {
    title: string,
    value: string,
}

const ExchangeRateItem: React.FC<Props> = (props) => {
    return (
        <div className="exchangeRate-item">
            <p className="exchangeRate__text-bold"><span>{props.title}:</span></p>
            <p className="exchangeRate__text-bold">{props.value}</p>
        </div>
    )
}

export default ExchangeRateItem;