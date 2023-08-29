import React from "react";

import "../styles/scoringMessage.scss";

const ScoringMessage: React.FC = () => {
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