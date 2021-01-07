import React from "react"
import CarGroup from "../components/CarGroup"
import {carGroupData} from "../data/CarGroupData"



const HomePageView: React.FC = () => {
    return (
        <div>
           {carGroupData.map((item, key) => ( 
               <CarGroup {...item} key={key}/>
           ))}
        </div> 
    )
}

export default HomePageView
