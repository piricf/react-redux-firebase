import React, { useState } from "react"
import { Link } from "react-router-dom"
import { AiOutlineCar } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/Navbar.css"
import Button from "./Button";

const Navbar: React.FC = () => {
   const [click, setClick] = useState(false)
   const [button, setButton] = useState(true)
    
    const closeMobileMenu = () => setClick(false)

    const handleClick = (e: any) => {
        e.preventDefault()
        setClick(!click)
    }

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    window.addEventListener("resize", showButton)

    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <AiOutlineCar className="navbar-icon" />
                        VEHICLES
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars />}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home 
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/audi" className="nav-links" onClick={closeMobileMenu}>
                              Audi
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/bmw" className="nav-links" onClick={closeMobileMenu}>
                                Bmw
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/mercedes" className="nav-links" onClick={closeMobileMenu}>
                                Mercedes
                            </Link>
                        </li>
                        <li className="nav-btn">
                            <Link to="/sign-up" className="btn-link">
                                <Button buttonSize="medium" buttonStyle="btn-outline" buttonColor="primary"  onClick={closeMobileMenu} >Sign Up</Button>
                                {button}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar