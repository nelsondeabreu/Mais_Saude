import React from "react"
import style from "./areaVitons.module.css"
import Main from "../../../components/main/main"
import {VitionPlayer} from "../../../components/videoPlayer/videoPlayer"
import { UseGetAllUsers } from "../../../hooks/useGetAllUsers"
import { UseGetAllPosts } from "../../../hooks/useGetAllPosts"
import video from "../../../assets/video/saude.mp4"
import CardPostGet from "../../../components/cards/cardPost/cardPostGet"

export function AreaVitons(){
  const {allPost} = UseGetAllPosts()
  return(
    <Main>
            <CardPostGet
              name="Jumper"
              legend="obdsikdnjfnk"
            />
            

    </Main>
  )

}