import React from "react";
import style from "./cadastro.module.css"
import {FormProvider, useForm} from "react-hook-form"
import slide1 from '../../../assets/img/banner/slide1.jpg'
import { LogoLogin } from "../../../components/logos/logos";
import Title from "../../../components/title/title";
import { Input, Input1 } from "../../../components/input/Input";
import { ButtonLog } from "../../../components/button/buttonSite";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { Link } from "react-router-dom";
import api from "../../../apiService"
import { toast } from "sonner";

const createUserSchema = z.object({
    firstName:z.string()
        .nonempty({message:"Campo Obrigatorio"})
        .min(3, {message:"Nome com mais de 3 caracteres!"})
        .refine(name => {
            return name.trim().split(" ").length === 1 
        }, {message:"Insira só o primeiro nome"}),
    lastName:z.string()
        .nonempty({message:"Campo Obrigatorio"})
        .min(3, {message:"Nome com mais de 3 caracteres!"})
        .refine(name => {
            return name.trim().split(" ").length === 1 
        }, {message:"Insira só o sobre-nome"}),
    email:z.string()
        .nonempty({message:"Campo Obrigatorio"})
        .email({message:"Email invalido!"}),
    password:z.string()
        .nonempty({message:"Campo Obrigatorio!"})
        .min(8,{message:"No minimo 8 caracteres"}),
    contact: z.string()
        .nonempty({message:"Campo Obrigatorio!"})
        .regex(/^(92|99|94|95|91|93)\d{7}$/, {message:"Por favor, insira um contato válido"}),
    date:z.string()
        .nonempty({message:"Campo Obrigatorio"})
        .refine(dateStr => {
            const today = new Date();
            const birthDate = new Date(dateStr);
            const age = today.getFullYear() - birthDate.getFullYear();
            return age >= 15;
          }, { message: "Você deve ter 15 anos ou mais para se cadastrar" }),
    sexo:z.string()
        .nonempty({message:"Campo Obrigatorio!"})

        
})

export function Cadastro (){

    const [output, setOutput] = React.useState("")
    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver:zodResolver(createUserSchema)
    })

    async function createUser(data){

        const userAlredyExist = await api.post("usuarios/cadastro", {
            name: data.firstName + " " + data.lastName,
            email:data.email,
            senha:data.password,
            sexo:data.sexo,
            nascimento: new Date(data.date)
        })

        
        await api.post("contactoSistem/create", {
            contacto:"923541932",
            entidadeID:" ",
            usuarioID:userAlredyExist.data.id
        })

        setInterval(()=>{
            toast.success("Cadastrado com sucesso")
        },3000)

        window.location.href="/login"
        console.log(data);
        setOutput(JSON.stringify(data,null,2))
    }

    return(
        
        <main className= {style.main}>
            <img src={slide1} alt=""/>
            <div className={style.container}>
                <FormProvider {...useForm()}>
                <form onSubmit={handleSubmit(createUser)}>
                    <Title title="Cadastrar no" logo={<LogoLogin/>}/> 
                    
                    <div className={style.boxInputs}>
                        <Input1 
                            label='Nome'  
                            name="firstName" 
                            regist={register} 
                            error={errors.firstName}
                        />
                        <Input1 
                            label='Sobre-nome' 
                            name="lastName" 
                            regist={register} 
                            error={errors.lastName} 
                        />
                    </div>
                        <Input 
                            label="Email" type="email"  
                            name="email" 
                            regist={register} 
                            error={errors.email}
                        />
                        <Input 
                            label="Contacto" type="number"  
                            name="contact" 
                            regist={register} 
                            error={errors.contact}
                        />

                        <div style={{display:"flex",flexDirection:"column",justifyContent:"start",marginTop:".8rem",height:"60px"}}>
                            <label>Sexo</label>
                            <select className="form-select form-select-lg mb-3" style={{width:"416px"}} {...register("sexo")}>
                                <option >Masculino</option>
                                <option >Feminino</option>
                            </select>
                        </div>

                        <Input 
                            label="Nascimento" 
                            type="date"  name="date" 
                            regist={register} 
                            error={errors.date}
                        />
                        <Input 
                            label="Senha" 
                            type="password" name="password" 
                            regist={register} 
                            error={errors.password}
                        />
                        <ButtonLog text="Cadastrar"/>
                        <p>Já tens uma conta?<Link to="/login" className={style.forget}>Iniciar Sessão</Link></p>
                   
                </form>
                </FormProvider>
            </div>
            
        </main>
    )
}

export function CadastroProfissional(){
    return(
        <>
        </>
    )
}