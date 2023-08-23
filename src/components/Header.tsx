import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import '../styles/header.scss';

const Header: React.FC = () => {
    let location = useLocation();
    
    return (
        <header>
            <div className="container">
                <div className="header">
                    <Link to="/" className="logo">
                        <div >
                            <p>NeoBank</p>
                        </div>
                    </Link>
                    
                    <input className="checkbox" type="checkbox" name="" id="burger" />
                    <nav className="navigation">
                        <ul>
                            <li className="navigation__item">
                                <Link to="/loan" 
                                    className={location.pathname === '/loan'? 'navigation__active' : ''}
                                >
                                    Credit card
                                </Link>
                            </li>
                            <li className="navigation__item">
                                <Link to="#" >Product</Link>
                            </li>
                            <li className="navigation__item">
                                <Link to="#" >Account</Link>
                            </li>
                            <li className="navigation__item">
                                <Link to="#" >Resources</Link>
                            </li>
                        </ul>
                    </nav>

                    <label htmlFor="burger" className="hamburger"> 
                        <span className="hamburger__line1"></span>
                        <span className="hamburger__line2"></span>
                        <span className="hamburger__line3"></span>
                    </label>

                    <Button text='Online Bank' />
                </div>
            </div>
        </header>
    )
}

export default Header;