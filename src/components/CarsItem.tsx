import React from "react"

interface ImageSliderSrc {
    src: string
}

const CarsItem: React.FC<ImageSliderSrc> = ({src}) => {
    return <img src={src} alt="slide-img" className="car-pic"></img>
}

export default CarsItem