import React, { useState } from 'react';
import style from "./calendarConsulta.module.css"
import { eachWeekOfInterval, format, getYear, startOfMonth, eachDayOfInterval, endOfMonth } from 'date-fns';
import {ChevronLeft,ChevronRight, Trash, Trash2} from "lucide-react"
import pt from "date-fns/locale/pt"
import UseReload from '../../hooks/useReload';
import { z} from "zod"
import { toast } from 'sonner';
import api from '../../apiService';
import { UseGetDataEspecialist } from '../../hooks/useGetDataEspecialist';
import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';
import * as Popover from "@radix-ui/react-dialog"
import { useSocket } from '../../hooks/contextApi/useSocketContext';
import { UseGetAllUsers } from '../../hooks/useGetAllUsers';
import { useUser } from '../../hooks/contextApi';
import UseGetDataUser from '../../hooks/useGetDataUser';
import { UseGetAllEspecialists } from '../../hooks/useGetAllEspecialists';

export  function CalendarConsultaInsert() {
  
  const timeSchema =  z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/);

  const currentDate = new Date();
  
  const month = format(currentDate, "MM")
  const realMonth = parseInt(month.slice(1)) 
  const hoursPerPage = 16;
  const {dataEspecialist} = UseGetDataEspecialist()

  const [currentYear, setCurrentYear] = useState(getYear(currentDate));
  const [currentMonth, setCurrentMonth] = useState(realMonth);
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const [selectedDay, setSelectedDay] = useState(null);
  const [dateConsult,setdateConsult] = useState({})
  const [infoDate,setinfoDate] = useState()
  const [consultationTime, setConsultationTime] = useState('');
  const [dailyConsultations, setDailyConsultations] = useState({});
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [fleg,setFleg] = useState(0)
  const {socket} = useSocket()
  const {user} = useUser()
  const {allEspecialist} = UseGetAllEspecialists()
  const index = allEspecialist.findIndex(doctor=>doctor.crm === user.crm)
  // Function to generate weeks for a given month
  const generateWeeks = (year, month) => {
    const startDate = startOfMonth(new Date(year, month - 1)); // Primeiro dia do mês
    const endDate = new Date(year, month, 0); // Último dia do mês
    const weeks = eachWeekOfInterval({ start: startDate, end: endDate });

    const allWeeks = weeks.map((week, index) => ({
      index,
      startDate: week,
      endDate: new Date(week.getFullYear(), week.getMonth(), week.getDate() + 6)
    }));
    
    return allWeeks.filter(w=> w.index !== 0)

  };

  const [weeks, setWeeks] = useState(generateWeeks(currentYear, currentMonth))
  React.useEffect(()=>{
    currentDate.setHours(0, 0, 0, 0)
    setSelectedDay(currentDate);
  },[])

  
  const handleDayClick = async (day) => {
    setSelectedDay(day);
    
    try{

      const foundDate = await (await api.post("diasDisponiveis/findByDay",{
        date:day,
        especialistaID:dataEspecialist.id
      })).data
      console.log(foundDate);

      setinfoDate(foundDate)

      const formattedDay = format(day,"dd/MM/yyyy")
      
      const vetor = {
        ...dateConsult,
        [formattedDay]:foundDate.horasDisponiveis  
      }
      setdateConsult(vetor)
    }catch(Error){
      
    }
  };

  const handleTimeChange = (event) => {
    if(event.target.value !== " "){
      setConsultationTime(event.target.value);
    }else{
      alert("erro")
    }
  };

  //UseEffect pra fazer o calendario inicializar na semana actual
  React.useEffect(() => {
    
    const currentWeekIndex = weeks.findIndex((week) => week.startDate <= new Date() && new Date() <= week.endDate);
    
    if (currentWeekIndex !== -1) {
      setCurrentWeekIndex(currentWeekIndex);
      setFleg(currentWeekIndex)
    }else{
      setCurrentWeekIndex(0)
    }

  }, [weeks]);

  const goToNextWeek = () => {
    
    setCurrentWeekIndex((currentIndex) => {
      if (currentIndex < weeks.length - 1) {
        return currentIndex + 1;
      } else {
        if (currentMonth === 12) {
          setCurrentYear((prevYear) => prevYear + 1);
          setCurrentMonth(1);
        } else {
          setCurrentMonth((prevMonth) => prevMonth + 1);
        }
        return 0
      }
    });
  };

  const goToPrevWeek = () => {
    setCurrentWeekIndex((currentIndex) => {
      if (currentIndex > 0) {
        return currentIndex - 1;
      } else {
        // Se estivermos no início da primeira semana do mês, precisamos voltar ao mês anterior
        const previousMonth = currentMonth === 1 ? 12 : currentMonth - 1;
        const previousYear = currentMonth === 1 ? currentYear - 1 : currentYear;
        setCurrentYear(previousYear);
        setCurrentMonth(previousMonth);
        
        // Recalcula as semanas para o novo mês
        const newWeeks = generateWeeks(previousYear, previousMonth);
        // Define o índice da semana como a última semana do novo mês
        return newWeeks.length - 1;
      }
    });
  };

  const handleSave = (e) => {
    
    e.preventDefault();
    const now = new Date()
    const day = format(new Date(), "dd/MM/yyyy");
    const date = format(selectedDay,"dd/MM/yyyy");
    const hora = now.getHours();
    const minute =  now.getMinutes();
    const time = hora + ":" + minute;
    console.log(time > consultationTime);
    if(allEspecialist[index].bloqueado === "false" || allEspecialist[index].bloqueado === null){
      try {
        // Tenta validar o valor do input com o esquema
        timeSchema.parse(consultationTime);
        
        if (selectedDay && date > day) {
         
            let horaInserida = false;
          
          dateConsult[format(selectedDay, 'dd/MM/yyyy')] && dateConsult[format(selectedDay, 'dd/MM/yyyy')].forEach((element=>{
            if(element.hora === consultationTime){
              horaInserida=true
            } 
          }))
  
          dateConsult[format(selectedDay, 'dd/MM/yyyy')] ? dateConsult[format(selectedDay, 'dd/MM/yyyy')].forEach((element=>{
  
            if(!horaInserida){
                const formattedDay = format(selectedDay, 'dd/MM/yyyy');
                const consultations = dailyConsultations[formattedDay] || [];
                //Verificar se a hora inserida já existe
                if (!consultations.includes(consultationTime)) {
                  console.log(consultationTime);
                  const updatedConsultations = [...consultations, consultationTime];
                  const updatedDailyConsultations = {
                    ...dailyConsultations,
                    [formattedDay]: updatedConsultations
                  };
                  setDailyConsultations(updatedDailyConsultations);
                  setConsultationTime('');
                
                } else {
                  toast.warning("Essa hora já foi insirida.");
                }
            }else{
              setConsultationTime('');
              toast.error(`${consultationTime} já existe no seu calendario.Por favor insira um novo horário`)
            }
          })
          ): (()=>{
  
            const formattedDay = format(selectedDay, 'dd/MM/yyyy');
            const consultations = dailyConsultations[formattedDay] || [];
        
            if (!consultations.includes(consultationTime)) {
              const updatedConsultations = [...consultations, consultationTime];
              const updatedDailyConsultations = {
                ...dailyConsultations,
                [formattedDay]: updatedConsultations
              };
              setDailyConsultations(updatedDailyConsultations);
              setConsultationTime('');
            
            } else {
              toast.warning("Essa hora já foi insirida.");
            }
          })()
          horaInserida=false
  
        }else if(date < day){
          toast.warning("Não é possivél inserir horas nos dias anteriores.")
        }

        else if ( date === day && time <= consultationTime) {
            let horaInserida = false;
          
          dateConsult[format(selectedDay, 'dd/MM/yyyy')] && dateConsult[format(selectedDay, 'dd/MM/yyyy')].forEach((element=>{
            if(element.hora === consultationTime){
              horaInserida=true
            } 
          }))
  
          dateConsult[format(selectedDay, 'dd/MM/yyyy')] ? dateConsult[format(selectedDay, 'dd/MM/yyyy')].forEach((element=>{
  
            if(!horaInserida){
                const formattedDay = format(selectedDay, 'dd/MM/yyyy');
                const consultations = dailyConsultations[formattedDay] || [];
                //Verificar se a hora inserida já existe
                if (!consultations.includes(consultationTime)) {
                  console.log(consultationTime);
                  const updatedConsultations = [...consultations, consultationTime];
                  const updatedDailyConsultations = {
                    ...dailyConsultations,
                    [formattedDay]: updatedConsultations
                  };
                  setDailyConsultations(updatedDailyConsultations);
                  setConsultationTime('');
                
                } else {
                  toast.warning("Essa hora já foi insirida.");
                }
            }else{
              setConsultationTime('');
              toast.error(`${consultationTime} já existe no seu calendario.Por favor insira um novo horário`)
            }
          })
          ): (()=>{
  
            const formattedDay = format(selectedDay, 'dd/MM/yyyy');
            const consultations = dailyConsultations[formattedDay] || [];
        
            if (!consultations.includes(consultationTime)) {
              const updatedConsultations = [...consultations, consultationTime];
              const updatedDailyConsultations = {
                ...dailyConsultations,
                [formattedDay]: updatedConsultations
              };
              setDailyConsultations(updatedDailyConsultations);
              setConsultationTime('');
            
            } else {
              toast.warning("Essa hora já foi insirida.");
            }
          })()
          horaInserida=false
  
          
          
        }else{
          toast.warning("Insira hora acima da hora atual.")
        }
      } catch (validationError) {
        // Se ocorrer um erro de validação, atualize o estado do erro
        toast.warning("Por favor, insira um horário no formato HH:MM.")
      }
    }else{
      toast.info("Foste bloqueado pelo seu superior")
    }
      
  };

  React.useEffect(() => {
    setWeeks(generateWeeks(currentYear, currentMonth));
  }, [currentYear, currentMonth]);

  // Generate weeks for the current month

  const currentWeek = weeks[currentWeekIndex];
  
  React.useEffect(() => {
    const totalHours = (dailyConsultations[selectedDay?.toLocaleDateString('pt-BR')] || []).length;
    const newTotalPages = Math.ceil(totalHours / hoursPerPage);
    setTotalPages(newTotalPages);
  }, [dailyConsultations, selectedDay]);

  const startIdx = currentPage * hoursPerPage;
  const endIdx = Math.min(startIdx + hoursPerPage, (dailyConsultations[selectedDay?.toLocaleDateString('pt-BR')] || []).length);
  const currentPageHours = (dailyConsultations[selectedDay?.toLocaleDateString('pt-BR')] || []).slice(startIdx, endIdx);

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  currentPageHours.sort();

  function CreateDayAndHour (){
    const keys = Object.keys(dailyConsultations)
    const verificationKey = Object.keys(dateConsult)

    keys.forEach(async (key)=>{
        const formattedDate = key.split("/")
        const date = new Date(formattedDate[2],formattedDate[1] - 1, formattedDate[0])
        date.setHours(0,0,0,0)
        const horas = dailyConsultations[key]
       //verificando se a data já existe para não inserir de novo
        verificationKey && verificationKey.forEach(async (verif) => {
        
        if(verif !== key){

          socket && socket.emit("createDay", {
            myID:user.id,
            especialistaID:dataEspecialist.id,
            hour:horas,
            date
          })
          
        }else{
        console.log("passou aqui2");
          
          socket && socket.emit("createDay", {
            myID:user.id,
            especialistaID:dataEspecialist.id,
            hour:horas,
            dayID:infoDate.id,
            day:infoDate.date
          })
          
        }

      })

      if(verificationKey.length === 0){
        
        socket && socket.emit("createDay", {
          myID:user.id,
          especialistaID:dataEspecialist.id,
          hour:horas,
          date
        })
      }
      
    
    })

    setDailyConsultations([])
  }

  return (

    <section className={style.main}>
      <div className={style.container}>
        <h2>{currentWeek && format(currentWeek.startDate, 'MMMM yyyy', { locale: pt }) }</h2>

        <ul className={style.dayOfWeek}>
          <button 
            style={{background:"none",border:"none"}} 
            disabled={currentWeekIndex === fleg && currentMonth === realMonth}>
            <ChevronLeft 
              onClick={goToPrevWeek} 
              cursor="pointer" 
            />
          </button>
          {currentWeek && eachDayOfInterval({ start: currentWeek.startDate, end: currentWeek.endDate }).map((day, index) => (
            <li key={index} onClick={() => handleDayClick(day)} >
              <span className='dayWeek'>{format(day, 'EEE', { locale: pt })}</span> <span>{format(day, 'dd')}</span>
            </li>
          ))}

          <button 
            style={{background:"none",border:"none"}} 
          >
            <ChevronRight 
              onClick={goToNextWeek} 
              cursor="pointer" 
            />
          </button>
        </ul>

        {selectedDay && (
          <div className={style.addHour}>
              <input type="time" value={consultationTime} onChange={handleTimeChange} />
              <button type='submit' onClick={handleSave}>Salvar</button>
          </div>
        )}
            
        {selectedDay && <h6>Horários disponíveis para {format(selectedDay, 'dd/MM/yyyy')}:</h6>}
        
        {selectedDay && (
          <ul className={style.consultHours}>
          
          {currentPageHours.length !== 0 ? (
            <>
              <ChevronLeft onClick={goToPrevPage} cursor="pointer" />

              <Popover.Root>
              <li className={style.allHours}>
                {currentPageHours.map((time, index) => <div key={index} className={style.hours}>{time}</div>)}
              </li>
              </Popover.Root>

              <ChevronRight onClick={goToNextPage} cursor="pointer" />

            </>
          ):<h2>InsIra horarios de disponibidade para esse dia</h2>}
          
          </ul>
        )}
      </div>
      <div>
        <button className={style.btnSave} onClick={CreateDayAndHour}>Salvar Alterações</button>
      </div>
    </section>
  );
}

export  function CalendarConsultaPresentation() {
  
  const currentDate = new Date();
  const month = format(currentDate, "MM")
  const realMonth = parseInt(month.slice(1)) 
  const hoursPerPage = 16;
  const {dataEspecialistProfile} = UseGetDataEspecialist()
  const {allUsers} = UseGetAllUsers()
  const userCripto = Cookies.get("user")
        
  const userDescripto = CryptoJS.AES.decrypt(userCripto, "boaSaude").toString(CryptoJS.enc.Utf8)
  const userData = JSON.parse(userDescripto)

  const [currentYear, setCurrentYear] = useState(getYear(currentDate));
  const [currentMonth, setCurrentMonth] = useState(realMonth);
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const [selectedDay, setSelectedDay] = useState(null);
  const [dailyConsultations, setDailyConsultations] = useState({});
  const [verif,setVerif] = useState(false)
  const [dayHours,setDayHours] = useState([])
  const [myHours,setMyHours] = useState([])
  const [totalPages, setTotalPages] = useState(0);
  const [selectedHour,setSelectedHour] = useState("")
  const [currentPage, setCurrentPage] = useState(0);
  const [clickedHourIndex, setClickedHourIndex] = useState(null);
  const [fleg,setFleg] = useState(0)
  const {socket} = useSocket()
  const {user} = useUser()
  const {dataUser} = UseGetDataUser()

 
  // Function to generate weeks for a given month
  const generateWeeks = (year, month) => {
    const startDate = startOfMonth(new Date(year, month - 1)); // Primeiro dia do mês
    const endDate = new Date(year, month, 0); // Último dia do mês
    const weeks = eachWeekOfInterval({ start: startDate, end: endDate });

    const allWeeks = weeks.map((week, index) => ({
      index,
      startDate: week,
      endDate: new Date(week.getFullYear(), week.getMonth(), week.getDate() + 6)
    }));
    
    return allWeeks.filter(w=> w.index !== 0)

  };

  const [weeks, setWeeks] = useState(generateWeeks(currentYear, currentMonth))

  
  const handleDayClick = async (date) => {
    
    const foundDate = await (await api.post("diasDisponiveis/findByDay",{
      date:date,
      especialistaID:dataEspecialistProfile.id
    })).data

    if (foundDate){
      setDayHours(foundDate.horasDisponiveis)
    }else{
      setDayHours("")
    }

    setSelectedDay(date);
  };

  //zerar a data
  React.useEffect(()=>{
    currentDate.setHours(0,0,0,0)
    setSelectedDay(currentDate);
  },[])

  //Mostrar os horarios da data actual depois do refresh
  React.useEffect(()=>{
    async function FoundDate (){
      try{
        if(selectedDay){
        const foundDate = await (await api.post("diasDisponiveis/findByDay",{
          date:selectedDay,
          especialistaID:dataEspecialistProfile.id
        })).data
        console.log(foundDate.horasDisponiveis);
        setDayHours(foundDate.horasDisponiveis)
        }
      }catch(error){
      }
    }
    FoundDate()
  },[])

  //Achar o index da semana do mês atual
  React.useEffect(() => {
    const currentWeekIndex = weeks.findIndex((week) => week.startDate <= new Date() && new Date() <= week.endDate);
    if (currentWeekIndex !== -1) {
      setCurrentWeekIndex(currentWeekIndex);
      setFleg(currentWeekIndex)
    }
  }, [weeks]);
  
  const goToNextWeek = () => {
    
    setCurrentWeekIndex((currentIndex) => {
      if (currentIndex < weeks.length - 1) {
        return currentIndex + 1;
      } else {
        if (currentMonth === 12) {
          setCurrentYear((prevYear) => prevYear + 1);
          setCurrentMonth(1);
        } else {
          setCurrentMonth((prevMonth) => prevMonth + 1);
        }
        return 0
      }
    });
  };

  const goToPrevWeek = () => {
    setCurrentWeekIndex((currentIndex) => {
      if (currentIndex > 0) {
        return currentIndex - 1;
      } else {
        // Se estivermos no início da primeira semana do mês, precisamos voltar ao mês anterior
        const previousMonth = currentMonth === 1 ? 12 : currentMonth - 1;
        const previousYear = currentMonth === 1 ? currentYear - 1 : currentYear;
        setCurrentYear(previousYear);
        setCurrentMonth(previousMonth);
        
        // Recalcula as semanas para o novo mês
        const newWeeks = generateWeeks(previousYear, previousMonth);
        // Define o índice da semana como a última semana do novo mês
        return newWeeks.length - 1;
      }
    });
  };

  React.useEffect(() => {
    setWeeks(generateWeeks(currentYear, currentMonth));
  }, [currentYear, currentMonth]);

  // Gerar semanas do mês atual

  const currentWeek = weeks[currentWeekIndex];

  React.useEffect(() => {
    const totalHours = (dailyConsultations[selectedDay?.toLocaleDateString('pt-BR')] || []).length;
    const newTotalPages = Math.ceil(totalHours / hoursPerPage);
    setTotalPages(newTotalPages);
  }, [dailyConsultations, selectedDay]);

  React.useEffect(()=>{
    socket && socket.on("getMyDay", (data)=>{
      console.log(data);
      setDayHours(data.horasDisponiveis)
    })
  },[socket])
  
  const startIdx = currentPage * hoursPerPage;
  const endIdx = Math.min(startIdx + hoursPerPage, (dailyConsultations[selectedDay?.toLocaleDateString('pt-BR')] || []).length);
  const currentPageHours = (dailyConsultations[selectedDay?.toLocaleDateString('pt-BR')] || []).slice(startIdx, endIdx);

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };
  
  async function MarcarConsulta(){
    selectedDay.setHours(0, 0, 0, 0)
    console.log(selectedDay);
    if(dataEspecialistProfile.crm !== userData.crm){
      if(selectedHour){
        try{
          const marcarConsulta = (await api.post("consultas/create",{tipo_Da_Consulta:dataEspecialistProfile.tipo_De_Consulta,data:selectedDay,hora:selectedHour,especialistaID:dataEspecialistProfile.id,pacienteID:userData.id,status:"Marcada"})).data
          
          const indexUserEspecialist = allUsers.findIndex((user)=>user.crm === dataEspecialistProfile.crm)
          
          if(!marcarConsulta){
            toast.warning("Horário ocupado.")
          }else{
            socket && socket.emit("sendNotification", {
              receiverID:allUsers[indexUserEspecialist].id,
              userID:userData.id,
              consultaID:marcarConsulta.id,
              especialistHowUserID:allUsers[indexUserEspecialist].id,
              type:2
            })
            toast.loading("A sua Consulta está sendo agendada.")
            window.location.reload()

          }
        }catch(error){
          console.log(error);
        }
      }
    }
  } 

  currentPageHours.sort();

  async function handleHourClick(hora,index){
    setSelectedHour(hora)
    setClickedHourIndex(index)

    const find = (await api.post("consultas/findByDayAndHour",{data:selectedDay,hour:hora,especialistaID:dataEspecialistProfile.id})).data
    find && toast.warning("Horário ocupado.")
  }

  async function deleteHour (id){
    await api.post("horasDisponiveis/deleteHour",{id:id})
    window.location.reload()
  }
 

  return (

      <section className={style.sectionMain}>
        <div className={style.container}>
        <h2>{currentWeek && format(currentWeek.startDate, 'MMMM yyyy', { locale: pt }) }</h2>

        <ul className={style.dayOfWeek}>
          <button 
            style={{background:"none",border:"none"}} 
            disabled={currentWeekIndex === fleg && currentMonth === realMonth}>
            <ChevronLeft 
              onClick={goToPrevWeek} 
              cursor="pointer" 
            />
          </button>
          {currentWeek && eachDayOfInterval({ start: currentWeek.startDate, end: currentWeek.endDate }).map((day, index) => (
            <li key={index} onClick={() => handleDayClick(day)} >
              <span>{format(day, 'EEE'  , { locale: pt })}</span> <span>{format(day, 'dd')}</span>
            </li>
          ))}

          <button 
            style={{background:"none",border:"none"}} 
          >
            <ChevronRight 
              onClick={goToNextWeek} 
              cursor="pointer" 
            />
          </button>
        </ul>
            
        {selectedDay && <h6>Horários disponíveis para {format(selectedDay, 'dd/MM/yyyy')}:</h6>}
        
        {selectedDay && (
          <ul className={style.consultHours}>
          
          {dayHours.length > 0 ? (
            <>
              <ChevronLeft 
                onClick={goToPrevPage} 
                cursor="pointer" 
              />
              <Popover.Root>
                <li className={style.allHours}>
                  { dayHours.map((time, index) => (
                    <Popover.Trigger 
                      key={index} 
                      className={style.hours} 
                      onClick={() => handleHourClick(time.hora,index)}
                    >
                      {time.hora}
                      {clickedHourIndex === index && dataUser && dataUser.crm === user.crm && (
                        <Popover.Content className={style.popover}>
                          <button onClick={()=>deleteHour(time.id)}>
                            <Trash2 />
                            Eliminar
                          </button>
                        </Popover.Content>
                      )}
                    </Popover.Trigger>
                  ))}
                </li>
              </Popover.Root>
            <ChevronRight 
              onClick={goToNextPage} 
              cursor="pointer" 
            />

            </>
          ):<h2>Não é possivél marcar consultas nesse dia</h2>
          }
          
          </ul>
        )}
      </div>
      <div className={style.divButton}>
        <button className={style.btnSave} onClick={MarcarConsulta}>Marcar Consulta: {dataEspecialistProfile.valor}KZ</button>
      </div>
      </section>
  );
}


