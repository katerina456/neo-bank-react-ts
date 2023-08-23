import React from "react";
import ChooseDesign from "../components/ChooseDesign";
import Features from "../components/Features";
import ExchangeRate from "../components/ExchangeRate";
import BankMap from "../components/BankMap";
import News from "../components/News";
import Support from "../components/Support";

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