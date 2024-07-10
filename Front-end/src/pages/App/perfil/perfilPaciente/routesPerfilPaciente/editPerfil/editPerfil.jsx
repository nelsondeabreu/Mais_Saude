import React from "react";
import style from './editPerfil.module.css'
import userIcone from '../../../../../../assets/img/userImage.png'
import EspecialistIcone from '../../../../../../assets/img/medicos/icone.jpg'
import { BsTrash, BsUpload } from "react-icons/bs";
import {Save, Trash, Trash2, Upload, UploadCloud} from "lucide-react"
import { useUser } from "../../../../../../hooks/contextApi";
import {z} from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import api from "../../../../../../apiService";
import { Form } from "../../../../../../components/form";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
import { format } from "date-fns";
import { useSocket } from "../../../../../../hooks/contextApi/useSocketContext";
import { toast } from "sonner";
import UseGetDataUser from "../../../../../../hooks/useGetDataUser";
import { Link } from "react-router-dom";

    const editUserSchema = z.object({
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
            }, {message:"Insira só o ultimo nome"}),
        email:z.string()
            .nonempty({message:"Campo Obrigatorio"})
            .email({message:"Email invalido!"}),
        contact: z.string()
            .nonempty({message:"Campo Obrigatorio!"})
            .regex(/^(92|99|94|95|91|93)\d{7}$/, {message:"Por favor, insira um contato válido"}),
        about:z.string()
        .nonempty("Campo Obrigatorio!"),
        date:z.string()
        .refine(dateStr => {
            const today = new Date();
            const birthDate = new Date(dateStr);
            const age = today.getFullYear() - birthDate.getFullYear();
            return age >= 15;
          }, { message: "Você deve ter 15 anos ou mais." }),
        
    })

export default function EditPerfil() {
    
    
    const {register,handleSubmit,formState:{errors},setValue} = useForm({
        resolver:zodResolver(editUserSchema)
    })
    const [contactID,setContactID] = React.useState(" ")
    const [contact,setContact] = React.useState(" ")
    const [confirm,setConfirm] = React.useState(false)
    const {user} = useUser()
    const {dataUser}  =UseGetDataUser()
    const formaData = new FormData()
    const [file,setFile] = React.useState(null)
    const {socket} = useSocket()

    React.useEffect(()=>{
        socket && socket.on("notificationConsulta", (data)=>{
            toast.info(data)
        })
    },[socket])

    formaData.append("foto", file)
    
    console.log(dataUser.contactos && dataUser.contactos.map(e=>e.contacto));

    React.useEffect(() => {
        if (user) {
            console.log();
            const Name = user.name.split(" ")
            const contacto = dataUser.contactos && dataUser.contactos.map(e=>e.contacto).join()
            setValue("firstName", Name[0]);
            setValue("lastName", Name[1]);
            setValue("email", user.email);
            setValue("contact", contacto);
            const formattedDate = format(new Date(user.nascimento), "yyyy-MM-dd");
            console.log(formattedDate);
            setValue("date", formattedDate);
            setValue("about", user.sobre);
        }
    }, [dataUser]);

    React.useEffect(()=>{
        user.contactos && user.contactos.map(c=>setContactID(c.id))
        user.contactos && user.contactos.map(c=>setContact(c.contacto))

    },[user])

    const handleChange = (e) => {
        setFile(e.target.files[0]);
        console.log(e.target.files[0]); // Atualiza o estado com o arquivo selecionado
      };

    async function addPhoto (){
        if(file){
            const photo =  await api.put(`usuarios/${user.id}/addPhoto`, formaData, {headers: { 'Content-Type': 'multipart/form-data' }})
            Cookies.set("user", CryptoJS.AES.encrypt(JSON.stringify(photo),"boaSaude"))
            window.location.reload()
        }else{
            toast.error("Insira uma foto")
        }
    }

    async function EditContact (id,contacto){

        try{
            const editContact = await api.put("contactoSistem/edit", {
                id,
                contacto,
                entidadeID:" ",
                usuarioID:user.id
            })
            console.log(editContact);
        }catch(error){
            console.log(error);
        }

    }

    function parseDate(value) {
        const parsedDate = new Date(value);
        // Verifica se o valor é um objeto Date válido
        if (isNaN(parsedDate.getTime())) {
            throw new Error('Data inválida');
        }
        return parsedDate;
    }

    async function EditProfile(data){
        const editUser = await api.put("usuarios/editUser",{
            id:user.id,
            name:data.firstName + " " + data.lastName,
            email:data.email,
            sobre:data.about,
            nascimento:parseDate(data.date)
        })
        console.log(data);

        if(contact !== data.contact){
            EditContact(contactID,data.contact)
        }

        Cookies.set("user", CryptoJS.AES.encrypt(JSON.stringify(editUser.data),"boaSaude"))
        window.location.reload()
    }

    async function deletePhoto(){
        const photo =  await api.put(`usuarios/${user.id}/addPhoto`, {foto:null})
        Cookies.set("user", CryptoJS.AES.encrypt(JSON.stringify(photo),"boaSaude"))
        window.location.reload()
    }

    return(
        <main>
           <div className={`tab-pane fade show  pt-3`}>

                <form onSubmit={handleSubmit(EditProfile)}>
                <div className="row mb-3">
                    <label for="profileImage" className="col-md-4 col-lg-3 col-form-label">Imagem de Perfil</label>
                    <div className="col-md-8 col-lg-9">
                        
                        <Link to={`http://localhost:2004/uploads/${user.foto}/findImage`}>
                            <img src={user.foto ? `http://localhost:2004/uploads/${user.foto}/findImage` : user.crm && EspecialistIcone } alt="Profile" style={{width:"100px", height:"100px"}}/>
                        </Link>
                    <div className={`${style.icons} pt-3`}>
                    <label htmlFor="file-input" className="file-input-label" style={{cursor:"pointer"}}>
                        <input
                            id="file-input"
                            type="file"
                            style={{ display: 'none' }}
                            onChange={handleChange}
                        />
                        <div className={style.uploadIcon}><UploadCloud/></div>
                    </label>
                        <div className={style.trashIcon} onClick={deletePhoto}><Trash2/></div>
                        {file && <div className={style.btn} onClick={addPhoto}><Save/></div>}
                    </div>
                    </div>
                </div>

                <Form.Field>
                    <Form.Label name="Nome"/>
                    <Form.Input name="firstName" regist={register}/>
                    <Form.ErrorMessage error={errors.firstName}/>
                </Form.Field>

                <Form.Field>
                    <Form.Label name="Sobre-Nome"/>
                    <Form.Input name="lastName" regist={register}/>
                    <Form.ErrorMessage error={errors.lastName}/>
                </Form.Field>

                <Form.Field>
                    <Form.Label name="Sobre"/>
                    <Form.Input name="about" place="Insira uma frase para a biografia do seu perfil" regist={register}/>
                    <Form.ErrorMessage error={errors.about}/>
                </Form.Field>

                <Form.Field>
                    <Form.Label name="Email"/>
                    <Form.Input name="email" regist={register}/>
                    <Form.ErrorMessage error={errors.email}/>
                </Form.Field>
                
                <Form.Field>
                    <Form.Label name="Contacto"/>
                    <Form.Input name="contact" regist={register}/>
                    <Form.ErrorMessage error={errors.contact}/>
                </Form.Field>

                <Form.Field>
                    <Form.Label name="Nascimento"/>
                    <Form.Input type="date" name="date" regist={register}/>
                    <Form.ErrorMessage error={errors.date}/>
                </Form.Field>

                <div className="text-center">
                    <button type="submit" className={style.btnSave}>Salvar Alterações</button>
                </div>

                </form>
           </div>
        </main>
    )
}