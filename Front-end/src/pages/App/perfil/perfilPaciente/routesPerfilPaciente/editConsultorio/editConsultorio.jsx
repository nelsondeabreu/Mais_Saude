import React from "react";
import style from "./editConsultorio.module.css"
import { Form } from "../../../../../../components/form";
import {useForm} from "react-hook-form"
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { CalendarConsultaInsert } from "../../../../../../components/calendarConsulta/calendarConsulta";
import api from "../../../../../../apiService";
import { UseGetDataEspecialist } from "../../../../../../hooks/useGetDataEspecialist";
import { useSocket } from "../../../../../../hooks/contextApi/useSocketContext";
import { toast } from "sonner";

const valueSchema = z.object({
  valueConsult:z.string()
    .nonempty({message:"Insira o valor da consulta"})

})
export default function EditConsultorio () {

  const {dataEspecialist} = UseGetDataEspecialist()
  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver:zodResolver(valueSchema)
  })
  const {socket} = useSocket()
  React.useEffect(()=>{
    socket && socket.on("notificationConsulta", (data)=>{
        toast.info(data)
    })
},[socket])

  async function addValue (data){
     const addValue = await api.put("especialistaSistema/addValue",{
      id:dataEspecialist.id,
      valor:data.valueConsult
    })
    console.log(addValue);
  }

  return(
    <main>
           <div className={` tab-pane fade show  pt-3`}>

                <form onSubmit={handleSubmit(addValue)}>
                <Form.Field>
                    <Form.Label name="Valor da Consulta"/>
                    <Form.Input name="valueConsult" regist={register} place="Exemplo 5000kz"/>
                    <Form.ErrorMessage error={errors.valueConsult}/>
                </Form.Field>

                <button className={style.btnSave}>Salvar</button>
                </form>

                <div className={style.divCalendar}>
                    <CalendarConsultaInsert />
                </div>

           </div>
        </main>
  )
}