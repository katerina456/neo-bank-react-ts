import React from "react";
import Tooltip from "../components/Tooltip";
import Tab from "../components/Tab";
import Prescoring from "../components/Prescoring";

import "../styles/main.scss";

const Loan: React.FC = () => {
    return (
        <main>
            <Tooltip />
            <Tab />
            <Prescoring />
        </main>
    )
}

export default Loan;