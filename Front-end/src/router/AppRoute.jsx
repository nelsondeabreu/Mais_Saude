import React from 'react'
import { 
    BrowserRouter, 
    Route,
    Routes
} from 'react-router-dom'
import HeaderApp from '../components/header/headerApp/headerApp'
import HeaderSite from '../components/header/headerSite/headerSite'
import About from '../pages/pageweb/about/about'
import Services from '../pages/pageweb/services/services'
import FooterSite from '../components/footer/footerSite/footerSite'
import Dashboard from '../components/dashboard/dashboard'
import Login from '../pages/pageweb/login/login'
import HomeApp from '../pages/App/homeApp/homeApp'
import HomeSite from '../pages/pageweb/homeSite/homeSite'
import Forget from '../pages/pageweb/forget/forget'
import Hospitais from '../pages/pageweb/hospitais/hospitais'
import Contacto from '../pages/pageweb/contacto/contacto'
import Medicos from '../pages/pageweb/medicos/medicos'
import Perfil from '../pages/App/perfil/perfilPaciente/perfil'
import Error from '../pages/Error/error'
import HospitaisApp from '../pages/App/hospitaisApp/hospitaisApp'
import Pessoas from '../pages/App/pessoas/pessoas'
import Chat from '../pages/App/messages/chat/chat'
import PerfilEntidade from '../pages/App/perfil/perfilEntidade/perfilEntidade'
import InfoEntidade from '../pages/App/perfil/perfilEntidade/routesEntidade/infoEntidade/infoEntidade'
import EditEntidade from '../pages/App/perfil/perfilEntidade/routesEntidade/editEntidade/editEntidade'
import EspecialistasHospital from '../pages/App/perfil/perfilEntidade/routesEntidade/especialistas/especialistas'
import Sobre from '../pages/App/perfil/perfilPaciente/routesPerfilPaciente/sobre/sobre'
import EditPerfil from '../pages/App/perfil/perfilPaciente/routesPerfilPaciente/editPerfil/editPerfil'
import {Cadastro, CadastroProfissional} from '../pages/pageweb/cadastro/cadastro'
import { UserProvider } from '../hooks/contextApi'
import UseReload from '../hooks/useReload'
import Cookies from 'js-cookie'
import CryptoJS from 'crypto-js'
import ChangePassword from '../pages/App/perfil/perfilPaciente/routesPerfilPaciente/changePassword/changePassword'
import ConsultasMarcadas from '../pages/App/perfil/perfilPaciente/routesPerfilPaciente/consultasMarcadas/consultasMarcadas'
import EditConsultorio from '../pages/App/perfil/perfilPaciente/routesPerfilPaciente/editConsultorio/editConsultorio'
import MinhasConexoes from '../pages/App/perfil/perfilPaciente/routesPerfilPaciente/minhasConexoes/minhasConexoes'
import { SocketProvider } from '../hooks/contextApi/useSocketContext'
import VideoCall from '../pages/App/messages/videoCall/videoCall'
import Consultorio from '../pages/App/consultorio/consultorio'
import ConsultasRealizadas from '../pages/App/consultorio/consultorioRoutes/consultasRealizadas/consultasRealizadas'
import ConsultasMarcadasConsultorio from '../pages/App/consultorio/consultorioRoutes/consultasMarcadas/consultasMarcadas'
import Estatisticas from '../pages/App/consultorio/consultorioRoutes/estatisticas/estatisticas'
import ConsultasNaoRealizadas from '../pages/App/consultorio/consultorioRoutes/consultasNaoRealizadas/consultasNaoRealizadas'
import Peer from "simple-peer"
import io from "socket.io-client"
import { AllPessoas } from '../pages/App/routesPessoas/allPessoas/allPessoas'
import PedidoConexao from '../pages/App/routesPessoas/pedidoConexao/pedidoConexao'
import Pacientes from '../pages/App/routesPessoas/pacientes/pacientes'
import Especialistas from '../pages/App/routesPessoas/especialistas/especialistas'
import MyConnections from '../pages/App/routesPessoas/minhasConexoes/minhasConexoes'
import Search from '../pages/App/search/search'
import Seguidores from '../pages/App/perfil/perfilEntidade/routesEntidade/seguidores/seguidores'
import { Post } from '../pages/App/post/post'
import { AreaVitons } from '../pages/App/areaVitions/areaVitons'
import { AllEspecialistsProvider } from '../hooks/contextApi/useGetAllEspecialists'
import { AddAdmin } from '../pages/App/perfil/perfilEntidade/routesEntidade/addAdmin/addAdmin'
import { Posts } from '../pages/App/perfil/perfilPaciente/routesPerfilPaciente/posts/posts'

function AppRoute() {

    const {reload} = UseReload()
    
    const [userLogged,setUserLogged] = React.useState(false)
    const tokenCripto = Cookies.get("token")
    //Area da video chamada 

    const socket = io.connect('http://localhost:2004')

	const [ me, setMe ] = React.useState("")
	const [ stream, setStream ] = React.useState()
	const [ receivingCall, setReceivingCall ] = React.useState(false)
	const [ caller, setCaller ] = React.useState("")
	const [ callerSignal, setCallerSignal ] = React.useState()
	const [ callAccepted, setCallAccepted ] = React.useState(false)
	const [ nameToCall, setNameToCall ] = React.useState("")
	const [ callEnded, setCallEnded] = React.useState(false)
	const [ changeMic, setChangeMic] = React.useState(false)
	const [ change, setChange] = React.useState(false)
	const [ name, setName ] = React.useState(null)
	const myVideo = React.useRef()
	const userVideo = React.useRef()
	const connectionRef= React.useRef()
	
    
    const callUser = () => {
		
        const peer = new Peer({
        initiator: true,
        trickle: false,
        stream: stream
        }) 
        
        /*peer.on("signal", (data) => {
            socket && socket.emit("callUser", {
                IDUserToCall: friendID,
                signalData: data,
                myID:user.id
            })
        })*/
        
        peer.on("stream", (stream) => {
            userVideo.current.srcObject = stream
        })

        socket && socket.on("callAccepted", (signal) => {
        setCallAccepted(true)
        peer.signal(signal)
        })

		connectionRef.current = peer

	}

	const answerCall =() =>  {
		setCallAccepted(true)
		const peer = new Peer({
			initiator: false,
			trickle: false,
			stream: stream
		})

		peer.on("signal", (data) => {
			socket.emit("answerCall", { signal: data, to: caller })
		})
    
		peer.on("stream", (stream) => {
			userVideo.current.srcObject = stream
		})

		peer.signal(callerSignal)
		connectionRef.current = peer
	}

  //este treixo gera erro na parte do connectionRef.current.destroy()
	const leaveCall = () => {
		try{
      setCallEnded(true)
      connectionRef.current && (connectionRef.current.destroy()) 
			alert("chamada terminou sem erro")
    }catch(error){
      console.log(error);
    }
  }

  
    React.useEffect(()=>{

        const checkToken = async () => {
            try {
                if(tokenCripto){
                    const tokenDescripto = CryptoJS.AES.decrypt(tokenCripto, "boaSaude")
                    const token = tokenDescripto.toString(CryptoJS.enc.Utf8)
                    setUserLogged(true)  
                }
            }
            catch(error) {
                return console.error("Erro ao verificar autenticaçao", error)
            }
        }

        checkToken()

    },[])

   
    if (userLogged) {
        
        return (
            <BrowserRouter>
                
                <UserProvider>
            
                            <SocketProvider>
                                    <AllEspecialistsProvider>
                                    <HeaderApp/>
                                    <Routes>
                                        <Route path='/homeApp' element={<HomeApp />} />
                                        <Route path='/perfil/:id/*' element={<Perfil/>} >
                                            <Route path='' element={<Sobre/>}/>
                                            <Route path='editarperfil' element={<EditPerfil/>}/>
                                            <Route path='alterarsenha' element={<ChangePassword/>}/>
                                            <Route path='consultasmarcadas' element={<ConsultasMarcadas/>}/>
                                            <Route path='editar_Consultorio' element={<EditConsultorio/>}/>
                                            <Route path='minhasConexoes' element={<MinhasConexoes/>}/>
                                            <Route path='posts' element={<Posts/>}/>
                                        </Route>    
                                        <Route path='/hospitais' element={<HospitaisApp/>}/>
                                        <Route path='/pessoas/*' element={<Pessoas/>}>
                                            <Route path='' element={<AllPessoas/>}/>
                                            <Route path='minhas_Conexoes' element={<MyConnections/>}/>
                                            <Route path='pedidos_de_conexao' element={<PedidoConexao/>}/>
                                            <Route path='pacientes' element={<Pacientes/>}/>
                                            <Route path='especialistas' element={<Especialistas/>}/>
                                        </Route>
                                        <Route path='/perfilEntidade/:id/*' element={<PerfilEntidade/>}>
                                            <Route path='' element={<InfoEntidade/>}/>
                                            <Route path='add_admin' element={<AddAdmin/>}/>
                                            <Route path='editarEntidade' element={<EditEntidade/>}/>
                                            <Route path='especialistas' element={<EspecialistasHospital/>}/>
                                            <Route path='seguidores' element={<Seguidores/>}/>
                                        </Route>
                                        <Route path='/chat/:id' element={<Chat />}/>
                                        <Route path='/videoCall' element={<VideoCall/>}/>
                                        <Route path='/vition' element={<AreaVitons/>}/>
                                        <Route path='/post/:id' element={<Post/>}/>
                                        <Route path='/consultorio/:id/*' element={<Consultorio/>}>
                                            <Route path='editar_Consultorio' element={<EditConsultorio/>}/>
                                            <Route path='consultas_Marcadas' element={<ConsultasMarcadasConsultorio/>}/>
                                            <Route path='consultas_Realizadas' element={<ConsultasRealizadas/>}/>
                                            <Route path='consultas_Nao_Realizadas' element={<ConsultasNaoRealizadas/>}/>
                                            <Route path='' element={<Estatisticas/>}/>
                                        </Route>
                                        <Route path='/search/?' element={<Search/>}/>
                                        <Route path='*' element={<Error/>}/>
                                    </Routes>
                                    <Dashboard/>
                                    </AllEspecialistsProvider>
                            </SocketProvider>
                
                </UserProvider>
            </BrowserRouter>
        
        )
        
    } else {

        return (
            <BrowserRouter>
                <UserProvider>
                    <HeaderSite />
                    <Routes>
                        <Route path='/' element={<HomeSite/>} />
                        <Route path='/sobre' element={<About/>}/>
                        <Route path='/servicos' element={<Services/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/cadastro' element={<Cadastro/>}/>
                        <Route path='/cadastroprofissional' element={<CadastroProfissional/>}/>
                        <Route path='/esqueceu' element={<Forget/>}/>
                        <Route path='/hospitais' element={<Hospitais/>}/>
                        <Route path='/medicos' element={<Medicos/>}/>
                        <Route path='/contacto' element={<Contacto/>}/>
                    </Routes>
                    <FooterSite/>
                </UserProvider>
            </BrowserRouter>
        )
        
    }

    
    
}

export default AppRoute