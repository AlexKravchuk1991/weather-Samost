import SerchBar from "../../components/serchBar/SerchBar";
import WetherCard from "../../components/wetherCard/WetherCard";
import { useWether } from "../../contex/wetherContex";
import style from './homepage.module.css'




export default function HomePage() {
    const{wetherData}=useWether()
//     const {wetherData,setWetherData,addToHistory}=useWether()

//     const fetchWeather = async (cityName:string)=>{
//      const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=37f859bf29fc2bc5da76bc1c663d4da7`);
    
//     const data = await result.json()
//     setWetherData(data)
//     addToHistory(data) 
// console.log(data);
// }

  return (
    <div className={style.mainContentConteiner}>
      <SerchBar/>

      <div>
        {wetherData.name&& (
        //     <><p>{wetherData.name}</p>
        // <p>{(wetherData.main.temp - 273).toFixed(1) } °C</p>
        //     </>
        <WetherCard weather={(wetherData.main.temp-273).toFixed(1)} city={wetherData.name} icon={wetherData.weather[0].icon}/>
            )}
      </div>
    </div>
  )
}
