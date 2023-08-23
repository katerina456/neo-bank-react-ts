import React from "react";
import Wraper from "./Wraper";

import "../styles/features.scss";

const Features: React.FC = () => {
    return (
        <Wraper classes="features">
            <div className="features__container">
                <div className="features__foto">
                    <img src="images/Illustration.png" alt=""/>
                </div>
                <div className="features__item">
                    <h2 className="features__title">We Provide Many Features You Can Use</h2>
                    <p className="features__text">
                        You can explore the features that we provide 
                        with fun and have their own functions each feature
                    </p>
                    <ul>
                        <li className="features__text">Powerfull online protection.</li>
                        <li className="features__text">Cashback without borders.</li>
                        <li className="features__text">Personal design</li>
                        <li className="features__text">Work anywhere in the world</li>
                    </ul>
                </div>
            </div>
        </Wraper>
    )
}

export default Features;