import React from "react";
import axios from 'axios';

class PersonasForm extends React.Component{

    constructor( props ){
        super(props)
        this.state={}
    }
    
    submitNuevaPersona(event){
        event.preventDefault();
        //hacer la peticion via axios
        axios.post('http://localhost:5000/personas/',{

        nombre:this.refs.nombre.value,
        apellido:this.refs.apellido.value,
        edad:this.refs.edad.value
        
        
        }).then(respuesta => console.log(respuesta.data))
        .catch(error => console.log(error))
    }

    render(){
        return(
      
  <div className="center row ">
      <h3 className="nav-wrapper #1e88e5 #ffab00 amber accent-4 card-content white-text">Agregar Futbolista</h3>
    <form className="col s11 " onSubmit={this.submitNuevaPersona.bind(this)}>
      <div className="row">
        <div className="input-field col s6">
          <input  id="nombre" ref="nombre" type="text"  />
          <label htmlFor="nombre">Nombre</label>
        </div>
        <div className="input-field col s6">
          <input  id="apellido" ref="apellido" type="text"  />
          <label htmlFor="apellido">Apellido</label>
        </div>
        <div className="input-field col s6">
          <input  id="edad" ref="edad" type="number"  />
          <label htmlFor="edad">Edad</label>
        </div>
        <div className="input-field col s12">          
            <button class="btn waves-effect waves-light #1e88e5 amber accent-4
" type="submit" name="action">
                Registrar
            </button>
        </div>
      </div>
    </form>
  </div>
        )
    }
}

export default PersonasForm