import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "../styles/scoringMessage.scss";


const ScoringMessage: React.FC = () => {
    let location = useLocation();
    let navigate = useNavigate();

    useEffect(setNextPage, []);

    function setNextPage() {
        setTimeout(() => navigate(`${location.pathname}/document`), 5000);
    }

    return (
        <div className="scoringMessage">
            <h2 className="scoringMessage__title">
                Wait for a decision on the application
            </h2>
            <p className="scoringMessage__text">
                The answer will come to your mail within 10 minutes
            </p>
        </div>
    )
}

export default ScoringMessage;