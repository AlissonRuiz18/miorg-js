import './MiOrg.css'
import { useState } from 'react'

const MiOrg = (props) => {
    //estados
    //const [nombre, actualizarNombre] = useState("")
    //const [mostrar,actualizarMostrar] = useState(true)


    //const manejarClick = () => {
     //   console.log("Mostrar / Ocultar elemento",!mostrar)
      //  actualizarMostrar(!mostrar)
    ///}
    return <section className="orgSection">
        <h3 className="title">Mi organizacion</h3>

        <img src="/org/public/img/boton2.png" alt="boton" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg