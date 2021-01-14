import React, {useState} from "react"
import "../css/ImageSlider.css"

type Props =  ImageSliderItem

interface ImageSliderItem {
    imageSrc: string[]
}

const ImageSlider: React.FC<Props> = ({
    imageSrc
}) => {

    const [x, setX] = useState(0);

    const goLeft = () => {
      x === 0 ? setX(-100 * (imageSrc.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
      x === -100 * (imageSrc.length - 1) ? setX(0) : setX(x - 100);
    };

    return (
        <div className="slider">
            {imageSrc.map((src: string, index: any) => {
                return(
                    <div className="slide" key={index} style={{transform: `translateX(${x}%)`}} >
                        <img src={src} alt="slide-img" className="car-pic"></img>
                    </div>
                )
            })}
            <button id="goLeft" onClick={goLeft}>
                <i className="fas fa-chevron-left">left</i>
            </button>
            <button id="goRight" onClick={goRight}>
                <i className="fas fa-chevron-right"></i> 
            </button>
        </div>
    )
}

export default ImageSlider