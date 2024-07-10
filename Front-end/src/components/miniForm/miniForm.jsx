import React from "react";
import style from "./miniForm.module.css"
import * as Dialog from "@radix-ui/react-dialog"
import Cookies from "js-cookie";
import api from "../../apiService";
import {z} from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { useUser } from "../../hooks/contextApi";
import { toast } from "sonner";
import CryptoJS from "crypto-js"
import { UseGetAllEspecialists } from "../../hooks/useGetAllEspecialists";
import { UseGetAllEspecialistsMinsa } from "../../hooks/useGetAllEspecialistMinsa";
import { UseGetAllUsers } from "../../hooks/useGetAllUsers";


const addCnpjSchema = z.object({
  cnpj: z.string()
      .nonempty({message:"Insira o Cnpj"})
      .min(16,{message:"Insira um cnpj válido"})
      .regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,{message:"Cnpj inválido"})
})

const crmSchema = z.object({
      crm: z.string()
      .nonempty({message:"Insira um crm"})
      .regex(/^\d{6}$/, {message:"Crm inválido"})
})

export function MiniFormHospital() {
  const {allUsers} = UseGetAllUsers()
  
  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver:zodResolver(addCnpjSchema)
  })

    const {user} = useUser()
    const id = user.id

    async function CreateAdress (adress) {
        
        const createAdress = await api.post("enderecoSistem/create", {adress})

        return createAdress.data.id
    }

    async function CreateEntity (name,cnpj,tipo_entidade,enderecoID,email) {
        const createEntity = await api.post("entidadeSistem/create", {name,cnpj,tipo_entidade,enderecoID,email})
        return createEntity.data.id
    }

    async function CreateContact (contacto, entidadeID) {
        const usuarioID = "nada"
        contacto.forEach(async (contacto) => {
          const newContact = await api.post("contactoSistem/create", {contacto,entidadeID,usuarioID})
          console.log(newContact.data);
        });
    }


    async function handleFindByCnpj(data){

        const cnpj = data.cnpj;

        try{

            if(user.cnpj === null){
                const index = allUsers.findIndex(user=>(user.cnpj === data.cnpj))
                alert(index)
                if(index === -1){
                  const entityfound = await api.post("entidadeMinsa/findbycnpj", {cnpj})
                
                console.log(entityfound.data);
                const adress = entityfound.data.endereco.adress
            
                const enderecoID = await CreateAdress(adress);
                    
                const entityID = await CreateEntity(
                
                    entityfound.data.name,
                    entityfound.data.cnpj,
                    entityfound.data.type,
                    enderecoID,
                    entityfound.data.email
                )
                
                
                const contacto = entityfound.data.contacto.map(contacto=>(contacto.numero))
                console.log(contacto);
                CreateContact(contacto,entityID)

                const userChanged = entityfound && (await api.put("usuarios/addCnpj", {id,cnpj})).data
                console.log(userChanged);
                
                Cookies.set("user", CryptoJS.AES.encrypt(JSON.stringify(userChanged), "boaSaude").toString());
                
                toast.success("Entidade encontrada!")
                }else{
                  toast.warning("Já foi inserido esse cnpj")
                }
                
            }else{
                toast.error("Já és Admin de uma entidade!")               
            }
            
        }
        catch (error){
            console.log(error);
            toast.error("Entidade inexistente!")
        }

    }

    return(
      <Dialog.Content className={style.container}>
        <h2>Criar Entidade</h2>
    
        <form onSubmit={handleSubmit(handleFindByCnpj)}>
            <input placeholder="Insira o CNPJ" {...register("cnpj")} />
            {errors.cnpj && <span style={{color:"red"}}>{errors.cnpj.message}</span>}
            <button className={style.btnCreate}>Enviar</button>
        </form>

      </Dialog.Content>
    )
 
}

export function MiniFormProfile() {
  const {user} = useUser()
  const {allEspecialist} = UseGetAllEspecialists()
  const {allEspecialistMinsa} = UseGetAllEspecialistsMinsa()
  console.log(allEspecialistMinsa);
  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver:zodResolver(crmSchema)
  })

   async function findCrm(data) {

    try{

      if(user.crm === null){
        const index = allEspecialist.findIndex(doctor=>doctor.crm === data.crm)
        if(index !== -1){
          const userChanged = await api.put("usuarios/addCrm",{
            id:user.id,
            crm:data.crm
          })
          Cookies.set("user", CryptoJS.AES.encrypt(JSON.stringify(userChanged.data), "boaSaude").toString());
          toast.success("Agora és um especialista")
          window.location.reload()
        }
        
      }

    }
    catch(error){
      toast.error("O crm inserido já foi usado")
    }
  }
  
  return(
    
    <Dialog.Content className={`${style.container} ${style.content}`}>
      <h2>Mudar para Especialista</h2>
  
      <form onSubmit={handleSubmit(findCrm)}>
          <input placeholder="Insira o crm" {...register("crm")}/>
          {errors.crm && <small style={{color:"red"}}>{errors.crm.message}</small>}
          <button className={style.btnCreate}>Enviar</button>
      </form>
    </Dialog.Content>
  )

}