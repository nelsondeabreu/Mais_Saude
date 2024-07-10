import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logo from "./assets/img/logo.png"

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
    marginBottom: 10,
    fontWeight: '600',
    textAlign:"center"

  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  value: {
    fontSize: 14,
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
    marginTop:10
  }
});

const PrescriptionPDF = ({ patientName, medications,doctorName }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.image}>
            <Image src={logo} style={styles.logo}/>
          </View>
          <Text style={styles.heading}>Receita Médica</Text>
          <Text style={styles.label}>Nome do Paciente:{patientName}</Text>
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

export default PrescriptionPDF;
