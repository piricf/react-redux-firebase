import React from "react"
import ImageSlider from "../components/ImageSlider"
import i1 from "../assets/1.jpg"
import i2 from "../assets/2.jpg"
import useSlider from "../hooks/useSlider"
import CarsItem from "../components/CarsItem"

// type Props = sliderProps

let sliderArr: Array<string> = [
    <CarsItem src={i1} />,
    <CarsItem src={i2} />
] 

// interface sliderProps {
//     goLeft: number,
//     goRight: number,
//     x: number
// }


const AudiPageView: React.FC = () => {
     const [x, goLeft, goRight] = useSlider(sliderArr)

    return (
        <div>
            <ImageSlider 
                goLeft={goLeft}
                goRight={goRight}
                x={x}
                sliderArr={sliderArr} 
            />
        </div>
    )
}

export default AudiPageView