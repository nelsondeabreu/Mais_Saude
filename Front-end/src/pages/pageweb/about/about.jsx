import React from "react"   
import style from "./about.module.css"
import style2 from "../../../components/cards/cardTeam/cardTeam.module.css"
import style3 from "../../../components/PageWeb/valores/valores.module.css"
import ImageTitle from "../../../components/imagetitle/imagetitle"
import {BsBook, BsCalendar4Week, BsChatDots, BsCheckCircleFill, BsPersonBadge} from "react-icons/bs"
import img1 from "../../../assets/img/about.jpg"
import doctor1 from "../../../assets/img/IMG_E1846.JPG"
import doctor2 from "../../../assets/img/team/dji-tafinha.jpg"
import OtherAcess from "../../../components/other-access/other"
import CardTeam from "../../../components/cards/cardTeam/cardTeam"
import Valores from "../../../components/PageWeb/valores/valores"
import image_dna from "../../../assets/img/testimonial.jpg"
export default function About(){
    
    return(

        <main className={style.main}>
    
            <ImageTitle image={image_dna} title="Sobre" link="/sobre" titleLink="Sobre"/>

            <section className={style.SectionAbout}>
                <div className="container-xl" data-aos="fade-up">

                    <div className="row gy-4" data-aos="fade-up">
                        <div className="col-lg-4">
                            <img src={img1} className="img-fluid" alt=""></img>
                        </div>
                        <div className="col-lg-8">
                            <div className={`${style.content}  ps-lg-5`}>
                                <h3>Missão e valores da plataforma</h3>
                                <p>
                                    Oferecer acesso fácil e personalizado a cuidados de saúde, promovendo a colaboração entre pacientes e profissionais para uma jornada de bem-estar sustentável.
                                </p>
                                <ul>
                                    <li><BsCheckCircleFill/> Empatia.</li>
                                    <li><BsCheckCircleFill/> Acessibilidade.</li>
                                    <li><BsCheckCircleFill/> Agilidade e Eficiência.</li>
                                    <li><BsCheckCircleFill/> Educação em Saúde</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <section id="services-list" className={style3.valoresList} >
                        <div className="container-xl" data-aos="fade-up">
                            <div className="sectionheader">
                            <h2>Nossos Valores</h2>
                            </div>

                            <div className="row gy-5">

                            <Valores 
                                icone={< BsCalendar4Week />} 
                                conteudo="Colocamos o paciente no centro de tudo o que fazemos, demonstrando compreensão e empatia em cada interação." 
                                titulo="Empatia"
                            />
                            <Valores 
                                icone={<BsPersonBadge />} 
                                conteudo="Fomentamos uma abordagem colaborativa entre profissionais de saúde, pacientes e tecnólogos para criar soluções holísticas e eficazes." 
                                titulo="Acessibilidade"
                            />
                            <Valores 
                                icone={<BsChatDots />} 
                                conteudo="Priorizamos a segurança e privacidade dos dados dos usuários, implementando medidas rigorosas para proteger informações sensíveis." 
                                titulo="Agilidade e Eficiência"
                            />
                        
                            <Valores 
                                icone={<BsBook />} 
                                conteudo="Comprometemo-nos a oferecer serviços ágeis e eficientes, proporcionando respostas rápidas e soluções prontas para as necessidades de saúde dos usuários." 
                                titulo="Educação em saúde"
                            />
                            
                            </div>
                        </div>
                    </section>


                </div>
            </section>

            <OtherAcess/>
            
            <section className={style2.SectionTeam}>
                <div className="container-xl" data-aos="fade-up">

                    <div className={style2.sectionHeader}>
                        <h2>Nossa equipa</h2>
                    </div>

                    <div class="row gy-4" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10rem"}}>
                        <CardTeam 
                            img={doctor1} 
                            nome="Domingos M. Vinté" 
                            cargo="Programador"
                        />
                        <CardTeam 
                            img={doctor2} 
                            nome="Nelson de Abréu" 
                            cargo="Programador"
                        />
                    </div>
                </div>    
            </section>   
            
              
        </main>
    )
}
