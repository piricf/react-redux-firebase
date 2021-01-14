import React from "react"
import "../css/ImageSlider.css"

type Props =  ImageSliderItem

interface ImageSliderItem {
    goLeft:any,
    goRight: any,
    x: any,
    sliderArr: Array<string>,
}

const ImageSlider: React.FC<Props> = ({
    goLeft,
    goRight,
    x,
    sliderArr,
}) => {
    return (
        <div className="slider">
            {sliderArr.map((item: any, index: any) => {
                return(
                    <div className="slide" key={index} style={{transform: `translateX(${x})`}} >
                        {item}
                    </div>
                )
            })}
            <button id="goLeft" onClick={() => goLeft}>
                <i className="fas fa-chevron-left">left</i>
            </button>
            <button id="goRight" onClick={() => goRight}>
                <i className="fas fa-chevron-right"></i> 
            </button>
        </div>
    )
}

export default ImageSlider