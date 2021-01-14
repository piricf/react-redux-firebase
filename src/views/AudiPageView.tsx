import React from "react"
import ImageSlider from "../components/ImageSlider"

let imageSrc: string[] = [
    require("../assets/1.jpg").default,
    require("../assets/2.jpg").default
]

const AudiPageView: React.FC = () => {

    return (
        <div>
            <ImageSlider 
                imageSrc={imageSrc} 
            />
        </div>
    )
}

export default AudiPageView