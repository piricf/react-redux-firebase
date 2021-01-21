import React from "react"
import { carModelsData } from "../data/CarModelsData";
import "../css/CarModels.css"

type Props = CarModelsProps;

interface CarModelsProps {
    about: string,
    specifications: string,
    open?: boolean
}

const CarModels: React.FC<Props> = () => {

    const toggleSpec = (index: number) => {
        carModelsData.map((spec, i) => {
            if( i === index) {
                spec.open = !spec.open
            } else {
                spec.open = false
            }
            return spec
        })
    }

    

    return (
        <div className="car__models">
            <div className="specs">
                {carModelsData.map((spec, i) => (
                    <div className={"spec " + (spec.open ? "open" : "")} key={i}  onClick={() => toggleSpec(i)}>
                        <div className="spec-about">{spec.about}</div>
                        <div className="spec-specifications">{spec.specifications}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CarModels