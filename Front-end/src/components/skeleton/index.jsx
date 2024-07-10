import React from "react"
import style from "./index.module.css"
import {ShimmerButton, ShimmerCircularImage, ShimmerThumbnail, ShimmerTitle} from "react-shimmer-effects"

export function SkeletonPost(){

  return (
    <main className={style.main}>
      <div className={style.container}>
        <div className={style.header}>
          <ShimmerCircularImage size={60} className={style.imageUser}/>
          <ShimmerTitle line={1} variant="primary" className={style.name} />
        </div>
        <div className={style.body}>
          <div className={style.space}></div>
          <div className={style.actions}>
            <ShimmerButton  size="sm" />
            <ShimmerButton size="sm"/>
            <ShimmerButton size="sm"/>
          </div>
        </div>
      </div>
    </main>
  )
}

export function SkeletonConsulta(){

  return (
    <main className={style.mainta}>
      <div className={style.containerConsulta}>
        <div className={style.divTitle}>
          <ShimmerTitle line={1} variant="primary" className={style.title} />
        </div>
        <div className={style.cardConsulta}>
          <ShimmerThumbnail height={80} rounded />
          <ShimmerThumbnail height={80} rounded />
          <ShimmerThumbnail height={80} rounded />
        </div>
      </div>
    </main>
  )
}

export function SkeletonPessoas(){

  return (
    <main>
      
    </main>
  )
}