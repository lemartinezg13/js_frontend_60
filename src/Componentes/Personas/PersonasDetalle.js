import React, { useState } from "react";
import axios from 'axios';


const PersonasDetalle=(props)=>{

    return(
        <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              
            </div>
            <div className="card-content">
            
            <span className="card-title card-panel collection-header #1e88e5 amber darken-1 card-content white-text">
                {props.personita.nombre} {props.personita.apellido}</span>
                <p>Fecha de Nacimiento:  { props.personita.nacimiento }    </p>
                    <p>Lugar de nacimiento:   { props.personita.lugar  }    </p>
                    <p>Edad:   { props.personita.edad  }   </p>
                    <p>Altura:   { props.personita.altura }   </p>
                    <p>Posición:   { props.personita.posicion  }   </p>
                    <p>Pie:   { props.personita.pie  }   </p>
                    <p>Club Actual:   { props.personita.club }   </p>
                    <p>Fichado:   { props.personita.fichado  }   </p>
                    <p>Contrato hasta:   { props.personita.contrato_hasta }   </p>
                    <p>Proveedor:   { props.personita.proveedor  }   </p>
                    <p>Fecha de registro: { props.personita.fecha_creacion } </p>
                    </div>
            <div className="card-action ">
             
            </div>
          </div>
        </div>
      </div>
    )
}

export default PersonasDetalle