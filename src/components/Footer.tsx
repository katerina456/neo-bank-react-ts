import React from "react";

import '../styles/footer.scss';
import logo from '../images/logo.png'

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer__contacts"> 
                    <figure>
                        <a href="#"><img src={logo} alt=""/></a>
                    </figure>
                    <address>
                        <ul>
                            <li><a href="tel:+74959842513" className="footer__phone">+7 (495) 984 25 13</a></li>
                            <li><a href="mailto:info@neoflex.ru" className="footer__text">info@neoflex.ru</a></li>
                        </ul>
                    </address>
                </div>
                <ul>
                    <li><a href="#">About bank</a></li>
                    <li><a href="#">Ask a Question</a></li>
                    <li><a href="#">Quality of service</a></li>
                    <li><a href="#">Requisites</a></li>
                    <li><a href="#">Press center</a></li>
                    <li><a href="#">Bank career</a></li>
                    <li><a href="#">Investors</a></li>
                    <li><a href="#">Analytics</a></li>
                    <li><a href="#">Business and processes</a></li>
                    <li><a href="#">Compliance and business ethics</a></li>
                </ul>
                <div className="footer__cookies">
                    <p className="footer__text">
                        We use cookies to personalize our services 
                        and improve the user experience of our website. 
                        Cookies are small files containing information 
                        about previous visits to a website. 
                        If you do not want to use cookies, 
                        please change your browser settings
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;