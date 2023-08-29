import React from "react";

import "../styles/formTitle.scss";


interface Props {
    title: string,
    number: number,
}

const FormTitle: React.FC<Props> = (props) => {
    return (
        <div className="formTitle"> 
            <h2 className="formTitle__text">{props.title}</h2>
            <p className="formTitle__step">Step {props.number} of 5</p>
        </div>
    )
}

export default FormTitle;