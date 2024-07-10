import React from "react";
import CardServices from "../../../components/cards/cardServices/cardServices";
import hospital1 from "../../../assets/img/hospitais/hospital1.jpg"
import hospital2 from "../../../assets/img/hospitais/hospital2.jpg"
import hospital3 from "../../../assets/img/hospitais/hospital3.jpg"
import hospital4 from "../../../assets/img/hospitais/hospital4.jpg"
import style from "../../../components/cards/cardServices/cardServices.module.css"
import ImageTitle from "../../../components/imagetitle/imagetitle";

export default function CentrosMedicos(){
    
    return(
        <main>            
            <ImageTitle image={hospital1} link="/centrosmedicos" title="Centros Médicos" titleLink="Centros Médicos"/>
            <section  className={style.servicesCards}>
                <div className="container-xl" data-aos="fade-up">

                    <div className="row gy-4">

                        <CardServices 
                            image={hospital1} 
                            titulo="Centro Médico Jumper&Filhos" 
                            conteudo="O Hospital Josina Machel (HJM) é uma unidade de saúde angolana, 
                                        localizado na cidade de Luanda, considerado o maior e mais antigo hospital 
                                        público do pais, referência em cuidados gerais e diversas especialidades... "
                        />
                        <CardServices 
                            image={hospital2} 
                            titulo="Hospital Geral de Luanda " 
                            conteudo="Sunt deserunt maiores voluptatem autem est rerum perferendis rerum 
                                        blanditiis. Est laboriosam qui iste numquam laboriosam voluptatem architecto. 
                                        Est laudantium sunt at quas aut hic. Eum dignissimos. "
                        />
                        <CardServices 
                            image={hospital3} 
                            titulo="Centro Médico do Prenda" 
                            conteudo="Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim molestiae 
                                        facilis numquam quae quaerat ipsam omnis. Neque debitis ipsum at architecto 
                                        officia laboriosam odit. Ut sunt temporibus nulla culpa. "
                        />
                        <CardServices 
                            image={hospital4} 
                            titulo="Centro Médico Américo Boa Vida " 
                            conteudo="Aut est quidem doloremque voluptatem magnam quis excepturi vero quia. 
                                        Eum eos doloremque architecto illo at beatae dolore. Fugiat suscipit et sint 
                                        ratione dolores. Aut aliquid ea dolores libero nobis. "
                        />
                    
                    </div>
                </div>
            </section>
        </main>
    )
}