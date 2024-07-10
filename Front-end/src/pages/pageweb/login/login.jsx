import React from "react";
import style from "./login.module.css"
import slide1 from "../../../assets/img/banner/slide1.jpg"
import {Input} from "../../../components/input/Input";
import { Link } from "react-router-dom";
import { BsGoogle, BsArrowLeft } from "react-icons/bs"
import { LogoLogin } from "../../../components/logos/logos"
import Title from "../../../components/title/title";
import { ButtonLog } from "../../../components/button/buttonSite";
import api from "../../../apiService/"
import Cookies from "js-cookie"
import CryptoJS from "crypto-js"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { toast } from "sonner";
import {LoginSocialFacebook} from "reactjs-social-login" 
import { FacebookLoginButton } from "react-social-login-buttons";


const userLogSchema = z.object({
    email:z.string()
        .nonempty({message:"Campo Obrigatorio"})
        .email({message:"Email invalido!"}),
    password:z.string()
        .nonempty({message:"Campo Obrigatorio!"})

})

export default function Login() {
   
    const [name,setName]=React.useState()
    const [email,setEmail]=React.useState()
    const [profileImg,setProfileImg]=React.useState()
    const [isLoged,setIsLoged]=React.useState(false)

    const {register, handleSubmit,formState:{errors}} = useForm({
        resolver:zodResolver(userLogSchema)
    })
    
    const chave = "boaSaude"

    
    async function handleLogin (data){
        try {
            const response = await api.post("usuarios/login", {
                email:data.email,
                senha:data.password
            })
            console.log(response);
            const userLogged = JSON.stringify(response.data.userInfo)
            Cookies.set("user", CryptoJS.AES.encrypt(userLogged, chave).toString());
            Cookies.set("token", CryptoJS.AES.encrypt(response.data.token, chave));

            window.location.href = "/homeApp"
                                      
        }catch (error) {
            console.log("Erro ao logar",error);
            toast.error("Email ou senha invalidos")
        }

       
    }

    const responseGoogle= (response) => {
        const {profileObj: name, email, imageUrl} = response
        setProfileImg(imageUrl)
        setName(name)
        setEmail(email)
        setIsLoged(true)
        console.log(response);
    }

    return (

        <main className={style.main}>
            <img src={slide1} alt="" />
            <section className={style.sectionContainer}>
                <Link to="/"><BsArrowLeft className={style.btnBack} /></Link>
                <nav className={style.navInfo}>
                    <Title title="Faça login no" logo={<LogoLogin />} />
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <nav className={style.navInputs}>
                            <Input
                                label="Email"
                                name="email"
                                error={errors.email}
                                regist={register}
                            />
                            <Input
                            type="password"
                                label="Senha"
                                name="password"
                                error={errors.password}
                                regist={register}
                            />
                        </nav>
                        <ButtonLog type="submit" text="Login" />
                        <p>Não tens uma conta?<Link to="/cadastro" className={style.forget}>Cadastra-se</Link></p>
                    </form>
                </nav>
            </section>
        </main>
    )
}