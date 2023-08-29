import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

import '../styles/modal.scss';


interface Props {
    handleClick: Function
}

const text = [
    'You exactly sure, you want to cancel this application?', 
    'Your application has been deny!'
]

const Modal: React.FC<Props> = (props) => {
    function closeModal() {
        props.handleClick()
    }

    const [isDeny, setIsDeny] = useState(false);

    function denyPage() {
        setIsDeny(true);
    }

    return (
        <div className="modal">
            <div className="modal__message">
                <div className="modal__title">
                    <p>Deny application</p>
                    {!isDeny && <div onClick={closeModal}>
                        <img src="../../icons/Close_square.svg" alt="" />
                    </div>}
                    { isDeny && <Link to="/" >
                        <img src="../../icons/Close_square.svg" alt="" />
                    </Link>}
                </div>
                <p className="modal__question">{isDeny? text[1] : text[0]}</p>
                <div className="modal__buttons">
                    {!isDeny && <>
                    <div onClick={denyPage}>
                        <Button text="Deny" color='pink' />
                    </div>
                    <Button text="Send" />
                    </>}
                    {isDeny && <Link to="/" ><Button text="Go home" /></Link>}
                </div>
            </div>
        </div>
    )
}

export default Modal;