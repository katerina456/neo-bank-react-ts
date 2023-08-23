import React from "react";
import ChooseDesign from "./ChooseDesign";
import Features from "./Features";
import ExchangeRate from "./ExchangeRate";
import BankMap from "./BankMap";
import News from "./News";
import Support from "./Support";

import "../styles/main.scss";

const Home: React.FC = () => {
    return (
        <main>
            <ChooseDesign />
            <Features />
            <ExchangeRate />
            <BankMap />
            <News />
            <Support />
        </main>
    )
}

export default Home;