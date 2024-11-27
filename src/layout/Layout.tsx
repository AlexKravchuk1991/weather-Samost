
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import style from '../layout/layout.module.css'

export default function Layout() {
  return (
    <div className={style.mainContainer}>
   <Header/>
    <main>
        <Outlet/>
    </main>
    </div>
  )
}
