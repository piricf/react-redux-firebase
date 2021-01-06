import React from 'react'
import { Link } from "react-router-dom"

type Props = OwnProps;

interface OwnProps {
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
            <div className="row home__hero-row">
               <div className="col">
                    <div className="home__hero-text-wrapper">
                        <div className="top-line">{topline}</div>
                        <h1 className="heading">{headline}</h1>    
                        <p className="description">{description}</p>
                        <Link to="/sign-up">
                            <button>{buttonLabel}</button>
                        </Link>
                    </div>   
                </div> 
                <div className="col">
                    <div className="home__hero-img-wrapper">
                       <img src={img} alt={alt} className="home__hero-img" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CarGroup
