import React from "react";
import style from "./changePassword.module.css";
import { useForm } from "react-hook-form";
import { Form } from "../../../../../../components/form";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { toast } from "sonner";
import { useUser } from "../../../../../../hooks/contextApi";
import api from "../../../../../../apiService";
import UseGetDataUser from "../../../../../../hooks/useGetDataUser";
import CryptoJS from "crypto-js";

export default function ChangePassword() {

  const [message,setMessage] =React.useState(null)
  const {dataUser} = UseGetDataUser()

  const alterPassWordSchema = z.object({
    newPassWord: z.string()
      .nonempty({message:"Campo Obrigatorio!"})
      .min(8,{message:"Insira pelo menos 8 caracteres"}),
  
    confirmPassWord: z.string()
      .nonempty({message:"Campo Obrigatorio!"})
    }).refine(data=>{
    if(data.newPassWord !== data.confirmPassWord && data.confirmPassWord !== " "){
      return setMessage("As senhas devem ser iguais")
    }else{
      return setMessage(null)
    }
  },{message:"aaa"})

  const {user} = useUser()

  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver:zodResolver(alterPassWordSchema)
  })

   async function alterPassWord(data){
    console.log(data);
    /*const alterPassword = await api.put("usuarios/alterPassWord",{
      id:user.id,
      newPassWord:data.newPassWord
    })*/

  }
    return(
        <div>
            
            <div class={`tab-pane fade pt-3 show`} >
                  <form onSubmit={handleSubmit(alterPassWord)}>

                    <Form.Field>
                      <Form.Label name="Nova Senha"/>
                      <Form.Input name="newPassWord" regist={register} type="password"/>
                      <Form.ErrorMessage error={errors.newPassWord}/>
                    </Form.Field>

                    <Form.Field>
                      <Form.Label name="Confirmar Senha"/>
                      <Form.Input name="confirmPassWord" regist={register} type="password"/>
                      <Form.ErrorMessage error={errors.confirmPassWord} message={message}/>
                    </Form.Field>

                    <div class="text-center">
                      <button type="submit" class="btn btn-primary">Alterar Senha</button>
                    </div>
                  </form>

                </div>

            </div>
    )
}
