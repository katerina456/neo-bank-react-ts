import React from "react";
import Tooltip from "./Tooltip";
import Tab from "./Tab";
import Prescoring from "./Prescoring";

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