import React from "react"
import { AiOutlineCar } from "react-icons/ai"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom"
import "../css/Footer.css"

const Footer: React.FC = () => {
    return (
        <div className="footer-container">
            <p className="footer-subscription-heading">
                Should you buy Audi, a BMW or a Mercedes?
            </p>
            <p className="footer-subscription-text">
                Audi, BMW and Mercedes: names we all know, brands we all recognise. UK
                car buyers can’t get enough of these German cars.
            </p>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2 className="footer-title">About </h2>
                        <Link  to="/audi">Audi</Link>
                        <Link to="/bmw">BMW</Link>
                        <Link to="/mercedes">Mercedes</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2 className="footer-title">Contact us</h2>
                        <Link to="/sign-in">Sign in</Link>
                        <Link to="/log-in">Log In</Link>
                        <Link to="/sign-up">Create an account </Link>
                    </div>
                    <div className="footer-link-items">
                        <h2 className="footer-title">Social Media</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Youtube</Link>
                    </div>
                </div>
            </div>
            <div className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            <AiOutlineCar className="navbar-icon" />
                            VEHICLES
                        </Link>
                    </div>
                    <small>VEHICLES © 2020</small>
                    <div className="social-icons">
                        <FaFacebook />
                        <FaInstagram />
                        <FaYoutube />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer