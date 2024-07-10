import React from "react";
import style from "./medicos.module.css"
import style2 from "../../../components/cards/cardProf/cardProf.module.css"
import ImageTitle from "../../../components/imagetitle/imagetitle";
import doctor from "../../../assets/img/medicos/medicos1.jpg"
import img2 from "../../../assets/img/users/user2.jpg"
import img3 from "../../../assets/img/users/user3.jpg"
import CardProf from "../../../components/cards/cardProf/cardProf";


export default function Medicos(){
    return(
        <main className={style.main}>
            <ImageTitle image={doctor} link="/medicos" title="Medicos" titleLink="Medicos" />
            
            <section className={style2.SectionProf}>
                <div className="container-xl" data-aos="fade-up">

                    <div className="sectionheader">
                        <h2>Cirurgiões</h2>
                    </div>

                    <div className={`${style.cards} row gy-4`}>
                        <CardProf img={doctor} nomeDoctor="Pedro Alberto" nomeHospital="Hospital do prenda"/>
                        <CardProf img={img2} nomeDoctor="Poly Carpe" nomeHospital="Maria Pia"/>
                        <CardProf img={img3} nomeDoctor="John Brown" nomeHospital="Americo boa vida"/>
                    </div>
                    
                </div>

                <div className="container-xl" data-aos="fade-up" style={{marginTop:"5%"}}>

                    <div className="sectionheader">
                        <h2>Fisioterapeutas</h2>
                    </div>

                    <div className={`${style.cards} row gy-4`}>
                        <CardProf img={doctor} nomeDoctor="Pedro Alberto" nomeHospital="Hospital do prenda"/>
                        <CardProf img={img2} nomeDoctor="Poly Carpe" nomeHospital="Maria Pia"/>
                        <CardProf img={img3} nomeDoctor="John Brown" nomeHospital="Americo boa vida"/>
                    </div>
                    
                </div>

                <div className="container-xl" data-aos="fade-up" style={{marginTop:"5%"}}>

                    <div className="sectionheader">
                        <h2>Pediatras</h2>
                    </div>

                    <div className={`${style.cards} row gy-4`}>
                        <CardProf img={doctor} nomeDoctor="Pedro Alberto" nomeHospital="Hospital do prenda"/>
                        <CardProf img={img2} nomeDoctor="Poly Carpe" nomeHospital="Maria Pia"/>
                        <CardProf img={img3} nomeDoctor="John Brown" nomeHospital="Americo boa vida"/>
                    </div>
                    
                </div>

                 <div className="container-xl" data-aos="fade-up" style={{marginTop:"5%"}}>

                    <div className="sectionheader">
                        <h2>Enfermeiros</h2>
                    </div>

                    <div className={`${style.cards} row gy-4`}>
                        <CardProf img={doctor} nomeDoctor="Pedro Alberto" nomeHospital="Hospital do prenda"/>
                        <CardProf img={img2} nomeDoctor="Poly Carpe" nomeHospital="Maria Pia"/>
                        <CardProf img={img3} nomeDoctor="John Brown" nomeHospital="Americo boa vida"/>
                    </div>
                    
                </div>
                
                    
            </section>
            
        </main>
    )
}