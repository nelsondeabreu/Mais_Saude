import React from "react";
import style from './editEntidade.module.css'
import image from '../../../../../../assets/img/hospitais/null.jpg'
import { UseGetDataEntity } from "../../../../../../hooks/useGetDataEntity";
import {z} from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import api from "../../../../../../apiService";
import {toast} from "sonner"
import { useSocket } from "../../../../../../hooks/contextApi/useSocketContext";
import { Save, Trash2, UploadCloud } from "lucide-react";

const editEntitySchema = z.object({
    email: z.string()
        .nonempty({message:"Campo Obrigatorio!"})
        .email({message:"Email invalido!"}),
    contact: z.string()
        .nonempty({message:"Campo Obrigatorio!"})
        .min(9, {message:"São necessario 9 digitos!"})
        .max(9, {message:"São necessario 9 digitos!"}),
    adress: z.string()
        .nonempty({message:"Campo Obrigatorio!"}),
    name: z.string()
        .nonempty({message:"Campo Obrigatorio!"}),
    about: z.string()
        .nonempty({message:"Campo Obrigatorio!"}),
    type: z.string()
        .nonempty({message:"Campo Obrigatorio!"})
    
})

export default function EditEntidade() {
    
    const {
        register,
        handleSubmit,
        formState:{errors},
        setValue
    } = useForm({
        resolver:zodResolver(editEntitySchema)
    })

    const {dataEntity} = UseGetDataEntity()
    const [file,setFile] = React.useState()

    async function EditAdress(id,adress){
        const editAdress = await api.put("enderecoSistem/editAdress",{id,adress})
         console.log(editAdress);
    }

    async function EditContact(id,contacto,entidadeID,usuarioID){
        const editContact = await (await api.put("contactoSistem/edit", {id,contacto,entidadeID,usuarioID})).data
        console.log(editContact);
    }   


    React.useEffect(() => {
        if (dataEntity) {
            setValue("name", dataEntity.name);
            setValue("email", dataEntity.email);
            setValue("contact", dataEntity.contactos[0].contacto);
            setValue("adress", dataEntity.endereco.adress);
            setValue("about", dataEntity.sobre);
            setValue("type", dataEntity.tipo_entidade);
            
        }
    }, [dataEntity]);

    async function EditEntity(data){
        const id = dataEntity.id
        const name = data.name;
        const tipo_entidade = data.type;
        const email = data.email;
        const sobre = data.about;
        const adress = data.adress
        const ContactID = dataEntity.contactos.map(e=>e.id).join()
        EditAdress(dataEntity.endereco.id,adress)
        const edit = await api.put("entidadeSistem/editEntity", {id,name,tipo_entidade,email,sobre})
        
        EditContact(ContactID,data.contact,id,"null")

        console.log(edit);
        window.location.reload()

    }
    
    const {socket} = useSocket()

    React.useEffect(()=>{
        socket && socket.on("notificationConsulta", (data)=>{
            toast.info(data)
        })
    },[socket])

    const handleChange = (e) => {
        setFile(e.target.files[0]);
        console.log(e.target.files[0]); // Atualiza o estado com o arquivo selecionado
    };

      async function addPhoto (){
        if(file){
            const formData = new FormData()
            formData.append("foto", file)
            await api.put(`entidadeSistem/${dataEntity.id}/addImage`, formData, {headers: { 'Content-Type': 'multipart/form-data' }})
            
            window.location.reload()
        }else{
            toast.error("Insira uma foto")
        }
    }

    async function deletePhoto(){
        await api.put(`entidadeSistem/${dataEntity.id}/addImage`, {foto:null})
        window.location.reload()
    }

    return(
        
        <div>
            <h5 className={style.card_title}>Sobre</h5>
           <div className="tab-pane fade show  pt-3" id="profile-edit">

                <form onSubmit={handleSubmit(EditEntity)}>
                <div className="row mb-3">
                    <label for="profileImage" className="col-md-4 col-lg-3 col-form-label">Imagem da entidade</label>
                    <div className="col-md-8 col-lg-9">
                        <img src={dataEntity.foto === null ? image : `http://localhost:2004/entidadeSistem/${dataEntity.foto}/findFoto` } alt="Profile" className={style.imageHospital}/>
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

                <div className="row mb-3">
                    <label for="name" className="col-md-4 col-lg-3 col-form-label">Nome</label>
                    <div className="col-md-8 col-lg-9">
                    <input name="name" type="text" className="form-control" {...register("name")} value={errors.name && dataEntity.name}/>
                    {errors.name && <span style={{color:"red"}}>{errors.name.message}</span>}

                    </div>
                </div>

                <div className="row mb-3">
                    <label for="name" className="col-md-4 col-lg-3 col-form-label">Tipo da entidade</label>
                    <div className="col-md-8 col-lg-9">
                    <input type="text" className="form-control" {...register("type")} />
                    {errors.type && <span style={{color:"red"}}>{errors.type.message}</span>}

                    </div>
                </div>

                <div className="row mb-3">
                    <label for="about" className="col-md-4 col-lg-3 col-form-label">Sobre</label>
                    <div className="col-md-8 col-lg-9">
                    <textarea className="form-control" {...register("about")} ></textarea>
                    {errors.about && <span style={{color:"red"}}>{errors.about.message}</span>}
                    </div>
                </div>

                <div className="row mb-3">
                    <label for="Address" className="col-md-4 col-lg-3 col-form-label">Endereço</label>
                    <div className="col-md-8 col-lg-9">
                    <input type="text" className="form-control" {...register("adress")} />
                    {errors.adress && <span style={{color:"red"}}>{errors.adress.message}</span>}
                    </div>
                </div>

                <div className="row mb-3">
                    <label for="Phone" className="col-md-4 col-lg-3 col-form-label">Telefone</label>
                    <div className="col-md-8 col-lg-9">
                    <input type="text" className="form-control" {...register("contact")}/>
                    {errors.contact && <span style={{color:"red"}}>{errors.contact.message}</span>}
                    </div>
                </div>

                <div className="row mb-3">
                    <label for="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                    <div className="col-md-8 col-lg-9">
                    <input type="email" className="form-control" {...register("email")}/>
                    {errors.email && <span style={{color:"red"}}>{errors.email.message}</span>}
                    </div>
                </div>
                
                <div className="text-center">
                    <button className="btn btn-primary">Salvar Alterações</button>
                </div>
                </form>

                </div>
        </div>
    )
}