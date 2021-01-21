import React from 'react'
import { Link } from "react-router-dom"
import Button from "./Button"
import "../css/CarGroup.css"

type Props = CarGroupProps;

interface CarGroupProps {
    topline: string,
    headline: string,
    description: string,
    buttonLabel: string,
    img: string,
    alt: string,
}

const CarGroup: React.FC<Props> = ({
    topline,
    headline,
    description,
    buttonLabel,
    img,
    alt,
}) => {
    return (
        <div>
            <div className="container">
            <div className="row home-row">
               <div className="col">
                    <div className="home-text-wrapper">
                        <div className="top-line">{topline}</div>
                        <h1 className="heading">{headline}</h1>    
                        <p className="description">{description}</p>
                        <Link to="/sign-up" className="home-btn-link">
                            <Button buttonSize="medium" buttonStyle="btn-outline" buttonColor="red">{buttonLabel}</Button>
                        </Link>
                    </div>   
                </div> 
                <div className="col">
                    <div className="home-img-wrapper">
                       <img src={img} alt={alt} className="home-img" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CarGroup
