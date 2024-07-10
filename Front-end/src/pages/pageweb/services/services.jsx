import React from "react"
import { BsBriefcase,BsCardChecklist,BsBarChart,BsBinoculars,BsBrightnessHigh,BsCalendar4Week, BsBook, BsChatDots, BsPersonBadge} from "react-icons/bs"
import style from "./services.module.css"
import style2 from "../../../components/PageWeb/services/servico.module.css"
import style3 from "../../../components/cards/cardServices/cardServices.module.css"
import style5 from "../../../components/PageWeb/feedback/feedback.module.css"
import ImageTitle from "../../../components/imagetitle/imagetitle"
import Servico from "../../../components/PageWeb/services/servico"
import CardServices from "../../../components/cards/cardServices/cardServices"
import agilidade from "../../../assets/img/serviços/agilidade.avif"
import remote from "../../../assets/img/serviços/acess.avif"
import telemedicina from "../../../assets/img/serviços/telemedicina.jpg"
import comunication from "../../../assets/img/serviços/comunication.jpg"
import doctor1 from "../../../assets/img/feedback.jpg"  
import imageServices from "../../../assets/img/serviços/serviços.jpg"
import FeedBack from "../../../components/PageWeb/feedback/feedback"


export default function Services(){
    
    return(

        <main className={style.main}>
           
            <ImageTitle image={imageServices} title="Serviços" link="/serviço" titleLink="Serviços"/>  

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

            <section  className={style3.servicesCards}>
                <div className="container-xl" data-aos="fade-up">

                    <div className="row gy-4">

                        <CardServices 
                        image={remote} 
                        titulo="Acesso remoto" 
                        conteudo="Ofereça consultas virtuais e acesso remoto a resultados de exames, proporcionando conveniência aos pacientes, enquanto mantém a segurança e a privacidade das informações de saúde. Integra recursos como agendamento online."
                        />
                        <CardServices 
                        image={telemedicina} 
                        titulo="Telemedicina" 
                        conteudo=" É uma abordagem de prestação de cuidados de saúde que utiliza tecnologias digitais para oferecer consultas remotas, diagnósticos e monitoramento de pacientes. "
                        />
                        <CardServices 
                        image={comunication} 
                        titulo="Melhoria na comunicação" 
                        conteudo="A plataforma visa aprimorar a comunicação médico-paciente por meio de recursos como videoconferências e mensagens seguras, promovendo uma interação mais eficiente e acessível. "
                        />
                        <CardServices 
                        image={agilidade} 
                        titulo="Agilidade no atendimento" 
                        conteudo="A plataforma enfatiza a agilidade no atendimento, proporcionando recursos como agendamento online, respostas rápidas por meio de mensagens seguras e acesso imediato a resultados de exames."
                        />
                    
                    </div>
                </div>
            </section>

            
            <section className={style5.recentposts}>
              <div className="container-xl" data-aos="fade-up">

                <div className={style5.sectionheader}>
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