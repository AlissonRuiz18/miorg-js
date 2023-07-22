import "./CampoTexto.css"
import { useState } from "react"

const CampoTexto = (props) => {
    





    const manejarCambio = (evento) => {
        props.actualizarValor(evento.target.value)
    }
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input
            placeholder={props.placeholder}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio} />
    </div>
}


export default CampoTexto 