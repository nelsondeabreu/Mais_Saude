import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logo from "../../assets/img/logo.png"
import { format } from 'date-fns';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    position:"relative"
  },
  heading: {
    marginTop:10,
    marginBottom: 10,
    fontWeight: '700',
    fontSize:14
  },
  label: {
    fontSize: 12,
    marginBottom: 5,
  },
  value: {
    fontSize: 12,
    marginBottom: 10,
  },
  logo:{
    width:80,
    height:50
  },
  image:{
    width:500,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
  },
  footer:{
    display:"flex",
    alignItems:"center",
    width:500,
    position:"absolute",
    bottom:0,
    flexDirection:"column"
  },
  doctorName:{
    fontSize:12,
  },
  remedio:{
    fontWeight:"600",
    marginBottom: 10,
    marginTop:10,
    fontSize:13
  }
});

export function ReceitaPDF ({ patientName, medications,doctorName }){
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.image}>
            <Image src={logo} style={styles.logo}/>
          </View>
          <Text style={styles.heading}>Receita Médica</Text>
          <Text style={styles.label}>Nome do Paciente: {patientName}</Text>
          <Text style={styles.heading}>Remédios:</Text>
          {medications.map((medication, index) => (
            <View key={index}>
              <Text style={styles.remedio}>Remédio {index + 1}</Text>
              <Text style={styles.value}>Nome: {medication.name}</Text>
              <Text style={styles.value}>Dosagem: {medication.dosage}</Text>
              <Text style={styles.value}>Frequência: {medication.frequency}</Text>
            </View>
          ))}
          <View style={styles.footer}>
            <Text style={styles.label}>Doctor</Text>
            <Text style={styles.doctorName}>{doctorName}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export function CartaPresencial({patientName,doctorName,hora,data}){

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      padding: 30,
    },
    image:{
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      position:"relative"
    },
    heading: {
      marginTop:10,
      marginBottom: 10,
      fontWeight: '600',
      textAlign:"center"
  
    },
    label: {
      fontSize: 12,
      marginBottom: 5,
    },
    value: {
      fontSize: 12,
      marginBottom: 10,
    },
    logo:{
      width:85,
      height:50
    },
    content:{
      marginTop:40
    },
    footer:{
      display:"flex",
      alignItems:"center",
      width:570,
      position:"absolute",
      bottom:0,
      flexDirection:"column",
    },
    doctorName:{
      fontSize:12
    },
    intro:{
      marginBottom: 10,
      marginTop:10
    },
    info:{
      fontSize:13
    },
    
  })
  return(
    <Document>
      <Page size="A4" >
        <View style={styles.section}>
        <View style={styles.image}>
          <Image src={logo} style={styles.logo}/>
        </View>
        <View style={styles.data}>
          <Text style={styles.label}>Data:</Text>
          <Text style={styles.doctorName}>{format(new Date(),"dd/MM/yyyy")}</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.intro}>
            <Text style={styles.info}>Prezado(a) {patientName}</Text>
          </View>
          <View style={styles.subject}>
            <Text style={styles.info}>Através desta, autorizamos o(a) Sr.(a) {patientName}, a realizar uma consulta presencial com o Dr.(a) {doctorName}, na data {data} às {hora}.</Text>
            <Text style={styles.info}>Solicitamos que o(a) paciente traga consigo todos os exames e documentos médicos relevantes para a avaliação especializada.</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.label}>Doctor(a)</Text>
          <Text style={styles.doctorName}>{doctorName}</Text>
        </View>
        </View>
      </Page>
    </Document>
  )
}
