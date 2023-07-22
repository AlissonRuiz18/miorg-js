
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Botton from "../Botton/Botton"
import { useState } from "react"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")


    const { registrarColaborador } = props


    const manejarEnvio = (evento) => {
        evento.preventDefault()
        console.log("Manejar envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        props.registrarColaborador(datosAEnviar)
    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>

            <CampoTexto titulo="Nombre"
                placeholder="Ingresar nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre} />

            <CampoTexto titulo="Puesto"
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto} />


            <CampoTexto titulo="Foto"
                placeholder="Ingresar link de foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto} />


            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
                
                />



            <Botton texto="crear" />
        </form>

    </section>
}
export default Formulario