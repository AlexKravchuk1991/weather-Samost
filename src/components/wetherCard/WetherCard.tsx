import { useState } from "react"
import { useWether } from "../../contex/wetherContex"
import style from './wetherCard.module.css'
import { useLocation } from "react-router-dom"

interface IWeatherProps{
    weather?:string | undefined
    city?: string   |undefined
    icon?: string   | undefined
}

export default function WetherCard({weather,city,icon}:IWeatherProps) {
    const {addToHistory, wetherData, clearHistory}=useWether()
    const [isBtnActive, setBtnActive]=useState<boolean>(false)
    const location = useLocation()

    const handleAddToHistory = () => {
        
        if (city && weather !== undefined) {
            addToHistory(wetherData);
            setBtnActive(true)
            console.log(location.pathname);
            
        }   
    };

    const handleCLearHistory=()=>{
        clearHistory()
    }
  return (
    <div className={style.mainCardContainer}>
        <div className={style.topConteinar}>
            <div className={style.tempContent}>
            <div className={style.wetherGrad}>{weather} °</div>
            <div className={style.cityCont}>{city} </div> 
            </div>
            <div className={style.imgCont}>
             <img src={`https://openweathermap.org/img/w/${icon}.png`} alt="" />
            <img src={`https://openweathermap.org/img/w/${icon}.png`} alt="" />
            <img src={`https://openweathermap.org/img/w/${icon}.png`}alt="" />
            </div>
            
            
        </div>
        <div className={style.buttonConteiner}>
         {location.pathname==="/" ? <button disabled={isBtnActive}  onClick={handleAddToHistory}>save</button>:''}
        {location.pathname==='/'? <button onClick={handleCLearHistory}>delete</button>:<button onClick={handleCLearHistory}>delete </button>}
        </div>
        
    </div>
  )
}
