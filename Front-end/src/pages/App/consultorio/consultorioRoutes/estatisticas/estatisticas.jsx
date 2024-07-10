import React from 'react';
import Chart from 'react-apexcharts';
import { UseGetAllEspecialistQueryOnly } from '../../../../../hooks/useGetAllEspecialistQueryOnly';
import { UseGetAllEspecialistQuery } from '../../../../../hooks/useGetAllEspecialistQuery';
import { format } from 'date-fns';
import {ptBR} from "date-fns/locale"
import { useSocket } from '../../../../../hooks/contextApi/useSocketContext';
import { toast } from 'sonner';
import UseGetDataUser from '../../../../../hooks/useGetDataUser';
import { UseGetDataEspecialist } from '../../../../../hooks/useGetDataEspecialist';

const Estatisticas = () => {

  const {consulta} = UseGetAllEspecialistQueryOnly()

  const {especialistaConsulta} = UseGetAllEspecialistQuery("Marcada")
  console.log(especialistaConsulta);
  const realizadas = consulta.length > 0 && consulta.filter(consulta=>consulta.status === "Realizada")
  const N_realizadas = consulta.length > 0 && consulta.filter(consulta=>consulta.status === "NRealizada")
  
  //consultas realizadas com seus respectivos meses
  const realizadasAbril = realizadas.length > 0 && realizadas.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "abril").length
  const realizadasMaio = realizadas.length > 0 && realizadas.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "maio").length
  const realizadasJunho = realizadas.length > 0 && realizadas.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "junho").length
  const realizadasJulho = realizadas.length > 0 && realizadas.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "julho").length
  const realizadasAgosto =realizadas.length > 0 &&  realizadas.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "agosto").length
  const realizadasSetembro = realizadas.length > 0 && realizadas.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "setembro").length
  const realizadasOutubro = realizadas.length > 0 && realizadas.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "outubro").length
  const realizadasNovembro = realizadas.length > 0 && realizadas.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "novembro").length
  const realizadasDezembro = realizadas.length > 0 && realizadas.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "dezembro").length

  //consultas realizadas com seus respectivos meses
  const Nao_realizadasAbril =N_realizadas.length > 0 && N_realizadas.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "abril").length
  const Nao_realizadasMaio =N_realizadas.length > 0 && N_realizadas.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "maio").length
  const Nao_realizadasJunho =N_realizadas.length > 0 && N_realizadas.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "junho").length
  const Nao_realizadasJulho =N_realizadas.length > 0 && N_realizadas.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "julho").length
  const Nao_realizadasAgosto =N_realizadas.length > 0 && N_realizadas.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "agosto").length
  const Nao_realizadasSetembro =N_realizadas.length > 0 && N_realizadas.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "setembro").length
  const Nao_realizadasOutubro =N_realizadas.length > 0 && N_realizadas.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "outubro").length
  const Nao_realizadasNovembro =N_realizadas.length > 0 && N_realizadas.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "novembro").length
  const Nao_realizadasDezembro =N_realizadas.length > 0 && N_realizadas.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "dezembro").length

  //consultas realizadas com seus respectivos meses
  const agendadaAbril = consulta.length > 0 && consulta.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "abril").length
  const agendadaMaio = consulta.length > 0 && consulta.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "maio").length
  const agendadaJunho = consulta.length > 0 && consulta.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "junho").length
  const agendadaJulho = consulta.length > 0 && consulta.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "julho").length
  const agendadaAgosto = consulta.length > 0 && consulta.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "agosto").length
  const agendadaSetembro = consulta.length > 0 && consulta.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "setembro").length
  const agendadaOutubro = consulta.length > 0 && consulta.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "outubro").length
  const agendadaNovembro = consulta.length > 0 && consulta.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "novembro").length
  const agendadaDezembro = consulta.length > 0 && consulta.filter(consulta=>format(consulta.data,"MMMM", {locale:ptBR}) === "dezembro").length
  
  const {socket} = useSocket()

  const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    series: [
      {
        name: 'Consultas Marcadas',
        data: [0, 0, 0, agendadaAbril, agendadaMaio, agendadaJunho],
      },
      {
        name: 'Consultas Realizadas',
        data: [0, 0, 0, realizadasAbril, realizadasMaio, realizadasJunho],
      },
      {
        name: 'Consultas Não Realizadas',
        data: [0, 0, 0, Nao_realizadasAbril, Nao_realizadasMaio, Nao_realizadasJunho],
      },
    ],
  };

  const data2 = {
    labels: ['Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    series: [
      {
        name: 'Consultas Marcadas',
        data: [agendadaJulho, agendadaAgosto, agendadaSetembro, agendadaOutubro, agendadaNovembro, agendadaDezembro],
      },
      {
        name: 'Consultas Realizadas',
        data: [realizadasJulho, realizadasAgosto, realizadasSetembro, realizadasOutubro, realizadasNovembro, realizadasDezembro],
      },
      {
        name: 'Consultas Não Realizadas',       
         data: [Nao_realizadasJulho, Nao_realizadasAgosto, Nao_realizadasSetembro, Nao_realizadasOutubro, Nao_realizadasNovembro, Nao_realizadasDezembro],
      },
    ],
  };

  const options2 = {
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2, 2, 2],
    },
    title: {
      text: 'Estatísticas das Consultas dos ultimos 6 meses',
    },
    xaxis: {
      categories: data2.labels,
    },
    yaxis: {
      title: {
        text: 'Consultas',
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== 'undefined') {
            return y.toFixed(0) + ' consultas';
          }
          return y;
        },
      },
    },
  };

  const options = {
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2, 2, 2],
    },
    title: {
      text: 'Estatísticas das Consultas dos primeiros 6 meses',
    },
    xaxis: {
      categories: data.labels,
    },
    yaxis: {
      title: {
        text: 'Consultas',
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== 'undefined') {
            return y.toFixed(0) + ' consultas';
          }
          return y;
        },
      },
    },
  };

  React.useEffect(()=>{
    socket && socket.on("notificationConsulta", (data)=>{
        toast.info(data)
    })
},[socket])

  return (
    <div>
      <Chart options={options} series={data.series} type="line" height={350} />
      <Chart options={options2} series={data2.series} type="line" height={350} />
    </div>
  );
};

export default Estatisticas;
