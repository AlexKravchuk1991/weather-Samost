import WetherCard from "../../components/wetherCard/WetherCard"
import { IWetherData, useWether } from "../../contex/wetherContex"
import style from './historyPage.module.css'


export default function HistoryPage() {
  const{history}=useWether()
  return (
    <div className={style.historyPageContainer}>
      {history.map(wether=>(
        <WetherCard city={wether.name} weather={(wether.main.temp-273).toFixed(1)} icon={wether.weather[0].icon}/>
      ))}
        
    </div>
  )
}
