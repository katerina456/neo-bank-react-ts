import React from "react";

import "../styles/stepMessage.scss";

const StepMessage: React.FC = () => {
    return (
        <div className="stepMessage">
            <h2 className="stepMessage__title">
                The preliminary decision has been sent to your email.
            </h2>
            <p className="stepMessage__text">
                The preliminary decision has been sent to your email.
            </p>
        </div>
    )
}

export default StepMessage;