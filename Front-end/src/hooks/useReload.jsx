import React from "react"

export default function UseReload () {
  const body = document.body
  const [reload, setReload] = React.useState(false)

  body.addEventListener('load', ()=> {
    return setReload(true)
  })

  return {reload}

}