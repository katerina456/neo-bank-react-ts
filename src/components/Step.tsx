import React from "react";

import "../styles/step.scss";

interface Props {
    number: string,
    classes: string,
    text: string,
}

const Step: React.FC<Props> = (props) => {
    return (
        <div>
            <div className="steps__item">
                <div className="steps__number"><span>{props.number}</span></div>
                <hr />
            </div>
            <div className={props.classes}>
                <p className="steps__text">{props.text}</p>
            </div>
        </div>
    )
}

export default Step;