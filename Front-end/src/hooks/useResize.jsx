import React from "react";



export function UseResize () {
  const body = document.body
  const [size, setSize] = React.useState(false);
  let scrollPosition = 0

  window.addEventListener("resize", ()=>{
    scrollPosition = window.innerWidth
    if(scrollPosition <= 1198){
      setSize(true)
    }else{
      setSize(false)  
    }
  })

  return {size}
  
}