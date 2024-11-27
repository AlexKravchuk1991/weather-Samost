import { useWether } from "../../contex/wetherContex"
import style from './wetherCard.module.css'

interface IWeatherProps{
    weather?:string | undefined
    city?: string   |undefined
    icon?: string   | undefined
}

export default function WetherCard({weather,city,icon}:IWeatherProps) {
    const {addToHistory, wetherData}=useWether()

    const handleAddToHistory = () => {
        
        if (city && weather !== undefined) {
            addToHistory(wetherData);
        }
    };
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
        <div>
         <button onClick={handleAddToHistory}>save</button>
        <button>delete</button>
        </div>
        
    </div>
  )
}
