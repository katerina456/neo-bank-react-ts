import React from "react";
import '../styles/button.scss';

interface Props {
    type?: "button" | "submit",
    text: string,
} 

const Button: React.FC<Props> = (props) => {
    return (
        <button className="button" type={props.type}>
            <span>{props.text}</span>
        </button>
    )
}

export default Button;