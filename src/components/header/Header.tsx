
import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./header.module.css"

export default function Header() {
  return (
    <div className={style.footerMainContainer}>
        <div className={style.footerLogoContainer}>
        Weather App
        </div>
        <div className={style.navFooterContainer}>
             <NavLink to={'/'}>home</NavLink>
        <NavLink to={'history'}>history</NavLink>
        </div>
      
    </div>
  )
}

