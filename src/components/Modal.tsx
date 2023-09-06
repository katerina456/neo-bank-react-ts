import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

import Button from "./Button";

import '../styles/modal.scss';

import { changeScoringStep, changeDocumentStep, changePrescoringStep } from "../store/slices/stepSlice";


interface Props {
    handleClick: Function
}

const text = [
    'You exactly sure, you want to cancel this application?', 
    'Your application has been deny!'
]

const Modal: React.FC<Props> = (props) => {
    const dispatch = useDispatch();

    function closeModal() {
        props.handleClick();
    }

    const [isDeny, setIsDeny] = useState(false);

    function denyPage() {
        setIsDeny(true);
        localStorage.clear();
        dispatch(changeScoringStep(1));
        dispatch(changeDocumentStep(1));
        dispatch(changePrescoringStep(1));
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
                    <div onClick={closeModal}>
                        <Button text="Send" />
                    </div>
                    </>}
                    {isDeny && <Link to="/" ><Button text="Go home" /></Link>}
                </div>
            </div>
        </div>
    )
}

export default Modal;