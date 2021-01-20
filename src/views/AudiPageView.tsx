import React, {useState} from "react"
import ImageSlider from "../components/ImageSlider"
import audiLogo from "../assets/audiLogo.jpg"
import Button from "../components/Button"
import "../css/VehiclePageView.css"

let imageSrc: string[] = [
    require("../assets/audiSlider1.jpg").default,
    require("../assets/audiSlider2.jpg").default,
    require("../assets/audiSlider3.jpg").default,
    require("../assets/audiSlider4.jpg").default
]

const AudiPageView: React.FC = () => {
    const [showInfo, setShowInfo] = useState(false)

    const toggleInfo = () => {
        setShowInfo(!showInfo)
    }

    return (
        <div className="vehicle-container">
            <h1 className="vehicle-tittle">Audi</h1>
            <img src={audiLogo} alt="AudiLogo" className="vehicle-logo" />
            <div className="vehicle__btn-wrapper">
                <Button buttonColor="red" buttonSize="btn-medium" buttonStyle="btn-outline" onClick={toggleInfo}>
                    <span>About Audi</span>
                </Button>
            </div>
            <div className="vehicle__info">
                {showInfo ? (
                    <div>
                        <p className="vehicle__info-text">
                            Audi Sport has stood behind the successful motor racing
                            involvement of AUDI AG for 40 years.Nowadays, the Ingolstadt
                            manufacturer markets its most sporty Audi models and accessories
                            under the label Audi Sport. The first motor racing activities of
                            the Audi brand began in the late 1970s under the tagline Audi
                            Motorsport. With its entry into the World Rally Championship in
                            1980, the brand changed the name of its motorsport department to
                            Audi Sport. Even then, works-run motorsport at Audi was part of
                            the Technical Development (TE) department. This close connection
                            guarantees the technology transfer between motorsport and series
                            production. Traditionally, this is a decisive reason for Audi
                            taking on top-level motorsport.The specified fuel consumption and emission data have been determind according to the measurement procedures prescribed by law. Since 1st September 2017, certain new vehicles are already being type-approved according to the Worldwide Harmonized Light Vehicles Test Procedure (WLTP), a more realistic test procedure for measuring fuel consumption and CO2 emissions. Starting on September 1st 2018, the New European Driving Cycle (NEDC) will be replaced by the WLTP in stages. Owing to the more realistic test conditions, the fuel consumption and CO2 emissions measured according to the WLTP will, in many cases, be higher than those measured according to the NEDC. Therefore, the usage of CO2 emission values measured according to WLTP for vehicle taxation from 1st September 2018 on can cause changes in this regards as well.
                        </p>
                    </div>
                ): null}
            </div>
            <div> 
            <ImageSlider 
                imageSrc={imageSrc} 
            />
            </div>
        </div>
    )
}

export default AudiPageView