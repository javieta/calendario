import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import days from '../json/calendario.json';
import Empleado from '../components/empleado'
import Dia from '../components/dia'

class Formulario extends Component {

  constructor(props){
    super(props)
    this.state = { 
      empleados:JSON.parse(localStorage.getItem('empleados')) || [],
      inputName:""
    }

  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.state.empleados.push({"name":this.inputName.value, "days":days.datos, "gastados":0})
    this.setState({empleados: this.state.empleados})
    localStorage.setItem('empleados', JSON.stringify(this.state.empleados))
  }

  handleDelete = (empleado) => {
    this.setState({empleados: this.state.empleados.filter(emp => emp !== empleado)})
    localStorage.setItem('empleados', JSON.stringify(this.state.empleados))
  }

  render(){
    return(
      <div>

        <h4>Formulario de trabajadores</h4>

        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor='name'>Nombre:</label>
            <input
              id='name'
              name='userName'
              placeholder='introduce el nombre'
              ref={inputElement => this.inputName=inputElement}
              value={this.state.inputName}
              onChange={e=>this.setState({inputName:e.target.value})}
            />
          </p>
          <p>
            <button onClick={this.handleSubmit}>Enviar</button>
          </p>
        </form>

        <div>
          <ul>
           {
              this.state.empleados.map((empleado, i)=>{
                return(
                  <li key={i}>{empleado.name} | días: {empleado.gastados}/22 <button onClick={() => { this.handleDelete(empleado) }}>Borrar</button></li>
                )
              })
            }
          </ul>
        </div>

        <Link to='/' className="button is-primary">Volver</Link>

      </div>
    )
  }
}

export default Formulario
