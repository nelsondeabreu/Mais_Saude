import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import style from "./formReceita.module.css"
import Label from '../form/Label.jsx';
import { Plus } from 'lucide-react';
import { useUser } from '../../hooks/contextApi/index.jsx';
import {CartaPresencial, ReceitaPDF} from "../receitaPdf/receitaPdf.jsx"
import {z} from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { UseGetAllEspecialists } from '../../hooks/useGetAllEspecialists.jsx';

const schemaForm=z.object({
  remedio:z.string()
    .nonempty({message:"Preencha o campo"}),
  dosagem:z.string()
    .nonempty({message:"Preencha o campo"}),
  frequencia:z.string()
    .nonempty({message:"Preencha o campo"})
})

export function FormReceita ({pacienteNome}){
  const [prescriptionData, setPrescriptionData] = React.useState(null);
  const [scroll, setScroll] = React.useState(false);
  const [newStyle, setNewStyle] = React.useState(null);
  const {user} = useUser()
  const {formState:{errors},register,handleSubmit} = useForm({
    resolver:zodResolver(schemaForm)
  })
  const styles ={
    "overflow-y": scroll && "scroll",
    "height": scroll && "44rem"
  } 
  React.useEffect(()=>{
    console.log(scroll);
      setNewStyle()
  },[scroll])

  return (
    <div className={style.container} style={styles}>
      <h1 style={{textAlign:"center"}}>Formulário de Receita</h1>
      <Formik
        initialValues={{
          patientName: pacienteNome,
          medications: [{ name: '', dosage: '', frequency:""}],
          doctorName: user.name
        }}
        onSubmit={(values) => {
          setPrescriptionData(values);
        }}
      >
        {({ values }) => (
          <Form className={style.form}>
            
            <FieldArray name="medications">
              {({ push, remove }) => (
                <div>
                  {
                    values.medications.length > 2 && setScroll(true)
                  }
                  {values.medications.map((medication, index) => (
                    <div key={index}>
                      <div className='row mb-3'>
                        <Label name="Remédio:"/>
                        <div className='col-md-8 col-lg-9'>
                          <Field {...register("remedio")} name={`medications.${index}.name`} type="text" className="form-control"/>
                        </div>
                      </div>
                      <div className='row mb-3'>
                        <Label name="Dosagem:"/>
                        <div className='col-md-8 col-lg-9'>
                          <Field {...register("dosagem")} name={`medications.${index}.dosage`} type="text" className="form-control" />
                        </div>
                      </div>
                      <div className='row mb-3'>
                      <Label name="Frequência:"/>
                        <div className='col-md-8 col-lg-9'>
                          <Field {...register("frequência")} name={`medications.${index}.frequency`} type="text" className="form-control" />
                        </div>
                      </div>
                      <div className={style.divDelete}>
                        <button type="button" onClick={() => remove(index)} className={style.btnRemove}>Remover</button>
                      </div>
                    </div>
                  ))}
                  <button type="button" className={style.btnAdd} onClick={() => push({ name: '', dosage: '', frequency:'' })}><Plus/> Remédio</button>
                </div>
              )}
            </FieldArray>
                <button type="submit" className={style.btnSubmit}>Visualizar Receita</button>
          </Form>
        )}
      </Formik>
      {prescriptionData && (
        <div>
          <PDFViewer width="1000" height="750" className={style.pdf}>
            <ReceitaPDF {...prescriptionData} />
          </PDFViewer>
          <PDFDownloadLink document={<ReceitaPDF {...prescriptionData} />} fileName="prescription.pdf">
          </PDFDownloadLink>
        </div>
      )}
    </div>
  );
};

export function FormPresentialCard({pacienteNome}){
  const {user} = useUser()
  const [prescriptionData, setPrescriptionData] = React.useState(null);
  const {allEspecialist} = UseGetAllEspecialists()
  const [especialist,setEspecialist] = React.useState(null)
  const index = allEspecialist.filter((doctor)=>doctor.crm === user.crm)
  

  React.useEffect(()=>{
    if(allEspecialist.length > 0){
      setEspecialist(index.map(doctor=>doctor.especialidade).join());
    }
    
  },[allEspecialist])
  console.log(especialist);
  return(
    <main className={style.container2}>
      <h1 style={{textAlign:"center"}}>Formulário para consulta presencial</h1>
      <Formik
        initialValues={{
          patientName: pacienteNome,
          doctorName: user.name,
          data:"",
          hora:"",
          especiality:especialist
        }}
        onSubmit={(values)=> {
          setPrescriptionData(values)
        }}
      >
        <Form className={style.form}>
          <FieldArray>
            <div>
              <div className='row mb-3'>
                <Label name="Data:"/>
                <div className='col-md-8 col-lg-9'>
                  <Field  name="data" type="date" className="form-control"/>
                </div>
              </div>
              <div className={`${style.inputHour} row mb-3`}>
                <Label name="Hora:"/>
                <div className='col-md-8 col-lg-9'>
                  <Field name="hora" type="time" className="form-control"/>
                </div>
              </div>
            </div>
          </FieldArray>
          <button type="submit" className={`${style.btnSubmit} ${style.btnSub}`}>Visualizar carta</button>
        </Form>
      </Formik>
      {prescriptionData && (
        <div>
          <PDFViewer width="1000" height="750" className={style.pdf}>
            <CartaPresencial {...prescriptionData} />
          </PDFViewer>
          <PDFDownloadLink document={<CartaPresencial {...prescriptionData} />} fileName="prescription.pdf">
          </PDFDownloadLink>
        </div>
      )}
    </main>
  )
}

