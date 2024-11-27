import { createContext, useContext, useState } from "react"

interface IWeather  {
        id: number
        main: string
        description: string
        icon: string
      }



interface IWetherData{
    coord: {
    lon: number
    lat: number
  },
  weather: IWeather[]
   
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
  },
  visibility: number
  wind: {
    speed: number
    deg: number
  },
  clouds: {
    all: number
  },
  dt: number
  sys: {
    type: number
    id: number
    country:string
    sunrise: number,
    sunset: number
  },
  timezone: number,
  id: number,
  name: string,
  cod: number
}

const initWeather:IWetherData={
    coord: {
        lon: 0,
        lat: 0
    },
    weather: [],
    base: "",
    main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0
    },
    visibility: 0,
    wind: {
        speed: 0,
        deg: 0
    },
    clouds: {
        all: 0
    },
    dt: 0,
    sys: {
        type: 0,
        id: 0,
        country: "",
        sunrise: 0,
        sunset: 0
    },
    timezone: 0,
    id: 0,
    name: "",
    cod: 0
}

interface IWetherContex{
    wetherData: IWetherData
    setWetherData:React.Dispatch<React.SetStateAction<IWetherData>>
    history:IWetherData[]
    setHistory:React.Dispatch<React.SetStateAction<IWetherData[]>>
    addToHistory:(data:IWetherData)=>void
    clearHistory:()=>void

}

interface IAuthContexProps {
    children: React.ReactNode;
  }


export const WeatherContex = createContext<IWetherContex|undefined>(undefined)




export default function WetherProvider({children}:IAuthContexProps) {
const [wetherData, setWetherData] = useState<IWetherData>(initWeather)
const [history, setHistory] = useState<IWetherData[]>([])

const addToHistory = (data:IWetherData)=>{
    setHistory(prevHistory=>[...prevHistory,data])
}

const clearHistory=()=>{
    setHistory([])
}

  return (
    <WeatherContex.Provider value={{wetherData, setWetherData,history, setHistory,addToHistory,clearHistory }}>
        {children}
    </WeatherContex.Provider>
  )
}

export const useWether = ()=> {
 const contex= useContext(WeatherContex);
 if(!contex){
    throw new Error("no such context");
 }
 return contex;
}

