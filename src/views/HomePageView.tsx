import React from "react"
import CarGroup from "../components/CarGroup"
import {carGroupData} from "../data/CarGroupData"



const HomePageView: React.FC = () => {
    return (
        <div>
           {carGroupData.map((item) => ( 
               <CarGroup {...item} />
           ))}
        </div> 
    )
}

export default HomePageView
