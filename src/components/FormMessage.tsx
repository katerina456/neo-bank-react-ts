import React from "react";

import "../styles/scoringMessage.scss";


interface Props {
    title: string,
    text: string,
}

const FormMessage: React.FC<Props> = (props) => {
    return (
        <div className="scoringMessage">
            <h2 className="scoringMessage__title">
                {props.title}
            </h2>
            <p className="scoringMessage__text">
                {props.text}
            </p>
        </div>
    )
}

export default FormMessage;