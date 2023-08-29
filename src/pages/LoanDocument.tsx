import React from "react";
import Document from "../components/Document";
import Wraper from "../components/Wraper";

import "../styles/scoringSection.scss";
import "../styles/main.scss";

const LoanDocument: React.FC = () => {
    return (
        <main>   
            <Wraper classes="scoringSection"> 
                <Document />
            </Wraper> 
        </main>
    )
}

export default LoanDocument;