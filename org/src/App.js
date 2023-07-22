import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario/Formulario';
import Header from './components/Header/Header';
import MiOrg from './components/MiOrg/MiOrg';
import Equipo from './components/Equipo/Equipo';
import Footer from './components/Footer/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, actualizaColaboradores] = useState([{
    equipo:"Front End",
    foto:"https://github.com/AlissonRuiz18.png",
    nombre:"Alisson Ruiz",
    puesto:"Instructora"
  }])



  const[equipos,actualizarEquipos] = useState([
    

      {
        titulo: "Programacion",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9",
        fav:true
      }
      ,
      {
        titulo: "Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF",
        fav:true
      }
      ,
      {
        titulo: "Data Science",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9",
        fav:true
      }
      ,
      {
        titulo: "Devops",
        colorPrimario: "#E06B69",
        colorSecundario: "#F0F8E2",
        fav:true
      }
      ,
      {
        titulo: "UX/UI",
        colorPrimario: "#D86EBF",
        colorSecundario: "#FAE9F5",
        fav:true
      }
      ,
      {
        titulo: "Dise;o",
        colorPrimario: "#D86EBF",
        colorSecundario: "#FAE9F5",
        fav:true
      }
      ,
      {
        titulo: "Innovacion y gestion",
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEEDF",
        fav:true
      }
  
  
    
  ])
  //Ternario --> Condicion ? seMuestra : Nosemuestra
  //condicion && seMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }


  //Registrar colaborador
  const registrarColaborador = (colaborador) =>{
    console.log("Nuevo colaborador",colaborador)
    //Spread operator
    actualizaColaboradores([...colaboradores,colaborador])
    
  }

  //Eliminar colaborador
  const eliminarColaborador = () =>{
    console.log("Eliminar colaborador")
  }


  //Actualizar color de equipo
  const actualizarColor = (color,titulo) =>{
    console.log("Actualizar:",color,titulo)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.titulo === titulo){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)



  }

  const like = (id) =>{
      console.log("like", id)
      const colaboradoresActualizados = colaboradores.map((colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav= !colaborador.fav
      }
      return colaborador
      })
  }
  return (
    <div >

      <Header />

      {mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)}
      registrarColaborador={registrarColaborador}
      />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => {

          return <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />
        })
      }
    <Footer/>
    </div >
  );


}

export default App;
