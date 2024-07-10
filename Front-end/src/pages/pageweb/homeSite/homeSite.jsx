import React from 'react'
import doctor1 from "../../../assets/img/feedback.jpg"
import phone from "../../../assets/img/mobile.png"
import style from "./homeSite.module.css"
import style2 from "../../../components/PageWeb/services/servico.module.css"
import style3 from "../../../components/PageWeb/recursos/recurso.module.css"
import style4 from "../../../components/PageWeb/feedback/feedback.module.css"
import { BsBriefcase,BsChatDots,BsBrightnessHigh,BsCalendar4Week,BsLock, BsDatabaseUp, BsChatLeftDots,BsBook,BsClock,BsPersonBadge} from "react-icons/bs"
import OtherAcess from '../../../components/other-access/other'
import Servico from '../../../components/PageWeb/services/servico'
import Recurso from '../../../components/PageWeb/recursos/recurso'
import FeedBack from '../../../components/PageWeb/feedback/feedback'
import {ButtonSite} from '../../../components/button/buttonSite'

function HomeSite() {


    return (
        <main>

                        
            <section id="hero" className={`${style.bannerHome} d-flex align-items-center`}>
                <div className={`${style.container}  container-xl` } >
                    <div className="row" >
                      <div className="col-xl-4" >
                          <h2 data-aos="fade-up">Bem-vindo ao software de gestão de saúde digital </h2>
                            <blockquote data-aos="fade-up" data-aos-delay="100">
                                <p>Reformulamos a gestão de saúde, personalizando recursos para proporcionar uma experiência centrada e eficiente, elevando a jornada de cuidado a um novo patamar.</p>
                            </blockquote>
                          <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                            <ButtonSite id="btnLogin" path="/login" text="Iniciar sessão" />
                          </div>
                      </div>
                    </div>
                </div>
            </section>
                    
            <section id="services-list" className={style2.serviceslist} >
                <div className="container-xl" data-aos="fade-up">

                    <div className="sectionheader">
                      <h2>Nossos serviços</h2>
                    </div>

                    <div className="row gy-5">
                    
                    <Servico 
                        icone={< BsCalendar4Week />} 
                        conteudo="Oferecemos a conveniência de marcar consultas online. Seja paciente ou profissional de saúde, você pode agendar e gerenciar consultas de forma eficiente..." 
                        titulo="Agendamento de Consultas Online"
                    />
                    <Servico 
                        icone={<BsPersonBadge />} 
                        conteudo="Revoluciona a interação médico-paciente, proporcionando uma abordagem inovadora e acessível ao cuidado à saúde." 
                        titulo="Videoconferências"
                    />
                    <Servico 
                        icone={<BsChatDots />} 
                        conteudo="comunicação assíncrona, permitindo que pacientes tirem dúvidas, compartilhem informações e recebam orientações de forma segura." 
                        titulo="Chat entre Médicos e Pacientes"
                    />
                   
                    <Servico 
                        icone={<BsBook />} 
                        conteudo="Oferecemos recursos educativos que promovem a compreensão, incentivam a participação ativa na gestão da saúde e fortalecem a parceria entre pacientes e profissionais de saúde. " 
                        titulo="Educação em saúde"
                    />
                    <Servico 
                        icone={<BsBriefcase/>} 
                        conteudo="A plataforma não apenas otimiza processos médicos, mas também facilita recrutamentos. Conectamos profissionais qualificados a oportunidades de trabalho em hospitais..." 
                        titulo="Recrutamento e vagas de trabalho."
                    />

                     <Servico 
                        icone={<BsBrightnessHigh />} 
                        conteudo="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque " 
                        titulo="Notificações e Lembretes Automáticos"
                    />
                    </div>
                </div>
            </section>

            <OtherAcess/>

            <section id="features" className={style3.features} >
              
                <div className="container-xl" data-aos="fade-up" >
                  <div className="row">
                    <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
                      <h3>Vantagens que a plataforma <br/>fornece</h3>

                      <div className="row gy-4" >

                        <Recurso 
                          icone={<BsDatabaseUp className={style.dbRemote}/>} 
                          conteudo="Acesso Remoto"
                        />
                        <Recurso 
                          icone={<BsPersonBadge className={style.chat}/>} 
                          conteudo="Telemedicina"
                        />
                        <Recurso 
                          icone={<BsChatLeftDots className={style.comunication}/>} 
                          conteudo="Melhoria na Comunicação"
                        />
                        <Recurso 
                          icone={<BsLock className={style.lock}/>} 
                          conteudo="Segurança da Informação"
                        />
                        <Recurso 
                          icone={<BsClock className={style.penIcon}/>} 
                          conteudo="Agilidade no Atendimento"
                        />
                        <Recurso 
                          icone={<BsBook className={style.book}/>} 
                          conteudo="Educação em Saúde"
                        />
                        
                      </div>

                    </div>
                    <div className="col-lg-5 position-relative" data-aos="fade-up" data-aos-delay="200">
                      <div className={style3.phoneWrap}>
                          <img src={phone} alt="Image" className="img-fluid"/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={style3.details}>
                  <div className="container-xl" data-aos="fade-up" data-aos-delay="300">
                    <div className="row">
                      <div className="col-md-6">
                        <h4>A Plataforma está disponivél no mobile<br/></h4>
                        <p>Transforme sua saúde baixando nosso aplicativo! Agende consultas, acesse resultados e simplifique seu cuidado, tudo na palma da mão. Sua jornada de bem-estar começa com um simples download.</p>
                      </div>
                    </div>

                  </div>
                </div>


            </section>

            <section className={style4.recentposts}>
              <div className="container-xl" data-aos="fade-up">

                <div className="sectionheader">
                  <h2>Como as pessoas enxergam nossa plataforma.</h2>

                </div>

                <div className="row gy-5">

                <FeedBack 
                  img={doctor1} 
                  nome="/ Julia Parker" 
                  data="Tue, December 12" 
                  titulo="Eum ad dolor et. Autem aut fugiat debitis" 
                  conteudo="Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium. Asperiores eum ipsa est officiis. Modi qui magni est..."
                />
                
                <FeedBack 
                  img={doctor1} 
                  nome="/ Mario Douglas" 
                  data="Fri, September 05" 
                  titulo="Et repellendus molestiae qui est sed omnis" 
                  conteudo="Voluptatem nesciunt omnis libero autem tempora enim ut ipsam id. Odit quia ab eum assumenda. Quisquam omnis doloribus..."
                />  
                <FeedBack 
                  img={doctor1} 
                  nome="/ Lisa Hunter " 
                  data="Tue, July 27" 
                  titulo="Quia assumenda est et veritati" 
                  conteudo="Quia nam eaque omnis explicabo similique eum quaerat similique laboriosam. Quis omnis repellat sed quae consectetur magnam..."
                />
                <FeedBack 
                  img={doctor1} 
                  nome="/ Lisa Hunter " 
                  data="Tue, July 27" 
                  titulo="Quia assumenda est et veritati" 
                  conteudo="Quia nam eaque omnis explicabo similique eum quaerat similique laboriosam. Quis omnis repellat sed quae consectetur magnam..."
                /> 

                </div>

              </div>
            </section>
        </main>
    )
}

export default HomeSite