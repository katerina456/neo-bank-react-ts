import React from "react";
import { useState } from "react";
import Wraper from "./Wraper";

import "../styles/support.scss";

const Support: React.FC = () => {
    const [user, setUser] = useState('');
    const [status, setStatus] = useState(0);

    function getSubscribe(event: React.FormEvent): void {
        event.preventDefault();
        fetch('http://localhost:8080/email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: user})
        }) 
        .then(res => {
            console.log(res.status)
            window.sessionStorage.setItem('subscribe', 'ok')
            setStatus(res.status)
        })
        .catch(err => console.log(err));
    }

    return (
        <Wraper classes="support">
            <h3 className="support__subTitle">Support</h3>
            <div className="support__item">
                <h2 className="support__title">Subscribe Newsletter & get</h2>
                <h2 className="support__title"><span>Bank News</span></h2>
            </div>
            <form action='#' className="support__form" onSubmit={getSubscribe}>
                {window.sessionStorage.getItem('subscribe') === null && <div>
                    <input type="email" placeholder="Your email" value={user} required
                    className="support__input" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUser(event.target.value)}
                    />
                    <button className="support__submit" type="submit">
                        <img src="icons/send.svg" alt=""/>
                        <span>Subscribe</span>
                    </button>
                </div>}
                {window.sessionStorage.getItem('subscribe') === 'ok' && <p className="support__subTitle">
                    You are already subscribed to the bank's newsletter
                </p>}
            </form>
        </Wraper>
    )
}

export default Support;