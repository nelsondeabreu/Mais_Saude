import React from 'react'
import { Link } from 'react-router-dom'
import { BsPlus } from 'react-icons/bs'
import style from './logos.module.css'

export function LogoHeader() {

  return (
    <Link to={'/'} className={style.LogoHeader}>
        <BsPlus className={style.LogoHeaderIcon}/>
        <span className={style.LogoHeaderText}>Saúde</span>
    </Link>
  )
}

export function LogoFooter() {

  return (
    <Link to={'/'} className={style.LogoFooter}>
        <BsPlus className={style.LogoFooterIcon}/>
        <span className={style.LogoFooterText}>Saúde</span>
    </Link>
  )
}

export function LogoLogin() {

  return (
    <Link to={'/login'} className={style.LogoLogin}>
        <BsPlus className={style.LogoLoginIcon}/>
        <span className={style.LogoLoginText}>Saúde</span>
    </Link>
  )
}

export function LogoDash() {

  return (
    <Link to={'/login'} className={style.LogoLogin}>
        <span className={style.LogoLoginText}>Saúde</span>
    </Link>
  )
}
