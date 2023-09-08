import React from "react";
import { useNavigate } from 'react-router-dom';
import Wraper from "../components/Wraper";
import Button from "../components/Button";

import "../styles/scoringSection.scss";
import "../styles/main.scss";
import "../styles/notFound.scss"

import image from '../images/img404.png'

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <main>   
            <Wraper classes="scoringSection"> 
                <div className="notFound">
                    <div className="notFound__info">
                        <h2 className="notFound__title">Oops....</h2>
                        <h2 className="notFound__subtitle">Page not found</h2>
                        <p className="notFound__text">This Page doesn`t exist or was removed! We suggest you go back.</p>
                        <div onClick={() => navigate(-1)}><Button text="Go back" /></div>
                    </div>
                    <div><img src={image} alt="" /></div>
                </div>
            </Wraper> 
        </main>
    )
}

export default NotFound;