import React from "react";
import style from './especialistas.module.css'
import doctorImage from "../../../../../../assets/img/medicos/icone.jpg"
import { CardAlgunsEspecialista, CardEntityEspecialista } from "../../../../../../components/cards/cardEspecialista/cardAlgunsEspecialistas/cardAlgunsEspecialistas";
import * as Dialog from "@radix-ui/react-dialog"
import { Link, useParams } from "react-router-dom";
import { useUser } from "../../../../../../hooks/contextApi";
import { UseGetDataEntity } from "../../../../../../hooks/useGetDataEntity";
import api from "../../../../../../apiService";
import { toast } from "sonner";
import Input from "../../../../../../components/form/Input";
import { useForm } from "react-hook-form";
import { Form } from "../../../../../../components/form";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { UseGetAllUsers } from "../../../../../../hooks/useGetAllUsers";
import { UseGetAllEspecialists } from "../../../../../../hooks/useGetAllEspecialists";
import { useSocket } from "../../../../../../hooks/contextApi/useSocketContext";


const createEspecialistSchema = z.object({
    name: z.string()
        .nonempty({message:"Campo obrigatorio"}),
    crm:z.string()
        .nonempty({message:"Campo obrigatorio"})
        .regex(/^\d{6}$/, {message:"Insira um crm válido"}),
    especiality:z.string()
        .nonempty({message:"Campo obrigatorio"}),
    sexo:z.string()
        .nonempty({message:"Campo obrigatorio"}),
    typeConsulta:z.string()
        .nonempty({message:"Campo obrigatorio"})

    })


export default function EspecialistasHospital() {

    const params = useParams()
    const {user} = useUser()
    const {dataEntity} = UseGetDataEntity()
    const [entity,setEntity] = React.useState([])

    React.useEffect(()=>{
        setEntity(dataEntity)
    },[dataEntity])

    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver:zodResolver(createEspecialistSchema)
    })


    async function createEspecialist (data) {
        
        const entidadeID = params.id;
        
        const found = (await api.post("especialistaSistema/findByCrm",{crm:data.crm})).data
        if(!found){
            await api.post("especialistaSistema/create", {
                nome:data.name,
                crm:data.crm,
                especialidade:data.especiality,
                entidadeID,
                sexo:data.sexo,
                tipo_De_Consulta:data.typeConsulta
            })
            
            toast.success("Especialista Cadastrado")
            window.location.reload()
        }else{
            toast.error("Já existe um especialista com esse crm")
            
        }
        
    }

    const {allUsers} = UseGetAllUsers()
    const [especialistUserID,setEspecialistUserID] = React.useState([])
    const {socket} = useSocket()

    React.useEffect(()=>{
        socket && socket.on("notificationConsulta", (data)=>{
            toast.info(data)
        })

        socket && socket.on("myEspecialists", (data)=>{
            console.log(data,"entidades");
            setEntity(data)
        })

    },[socket])

    React.useEffect(()=>{
        allUsers && allUsers.map(user=>{
            const crm = user.crm
            entity.especialista && entity.especialista.forEach(data => {
                if (data.crm === crm){
                    setEspecialistUserID(user.id)
                }
            })
        })
    },[allUsers])

    return (
        
        <main>
                        
            <div className={style.info}>

                <Dialog.Root>
                    <div className={style.btnCreate}>
                         <h5 className={style.card_title}>Especialistas</h5>

                        {
                            dataEntity.cnpj === user.cnpj && (<Dialog.Trigger className={style.btnAdd}>Adicionar</Dialog.Trigger>)
                        }

                    </div>
                        
                        <Dialog.Overlay style={{inset:"0",background:"#000",opacity:"60%", position:"fixed", zIndex:"1002"}}/>
                        <Dialog.Portal >
                            <Dialog.Content className={style.dialogContent} >
                                <form onSubmit={handleSubmit(createEspecialist)}>

                                    <h3 style={{color:"rgba(1, 66, 112, 0.6)", textAlign:"center",marginBottom:"2rem"}}>Adicionando Especialista...</h3>
                            
                                    <Form.Field>
                                        <Form.Label name="Nome"/>
                                        <Form.Input regist={register} name="name"/>
                                        <Form.ErrorMessage error={errors.name}/>
                                    </Form.Field>

                                    <Form.Field>
                                        <Form.Label name="Crm"/>
                                        <Form.Input regist={register} name="crm"/>
                                        <Form.ErrorMessage error={errors.crm}/>
                                    </Form.Field>

                                    <div style={{display:"flex",flexDirection:"column",justifyContent:"start",marginTop:".8rem",height:"60px"}}>
                                        <label>Sexo</label>
                                        <select className="form-select form-select-lg mb-3" style={{height:"35px",fontSize:".9rem",position:"absolute",right:"6%",width:"19.5rem"}} {...register("sexo")}>
                                            <option >Masculino</option>
                                            <option >Feminino</option>
                                        </select>
                                        <Form.ErrorMessage error={errors.sexo}/>
                                    </div>

                                    <Form.Field>
                                        <Form.Label name="Especialidade"/>
                                        <Form.Input regist={register} name="especiality"/>
                                        <Form.ErrorMessage error={errors.especiality}/>
                                    </Form.Field>

                                    <Form.Field>
                                        <Form.Label name="Tipo de consulta"/>
                                        <Form.Input regist={register} name="typeConsulta"/>
                                        <Form.ErrorMessage error={errors.typeConsulta}/>
                                    </Form.Field>

                                    <div className="text-center">
                                        <button type="submit" className={style.btnAdd} >Adicionar</button>
                                    </div>

                                </form>
                            </Dialog.Content>
                        </Dialog.Portal>
                    
                        
                </Dialog.Root>
            </div>
            {
                entity.especialista && entity.especialista.map(especialist => (
                    <CardEntityEspecialista 
                        doctorNome={especialist.nome} 
                        especiality={especialist.especialidade} 
                        hospital={entity.name} 
                        image={especialist.foto}
                        hide={true}
                        id={entity.id}
                        crm={especialist.crm}
                        block={especialist.bloqueado}
                    />
                )) 
            }
        </main>
    )

}