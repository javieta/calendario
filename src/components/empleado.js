import React, {Component} from 'react'

class Empleado extends Component {
  
  render(){
    return(
      <div>
	      <div className="float-left">Empleado: { this.props.empleado.name }</div>
	      <div className="float-right">Días de vacaciones: { this.props.empleado.gastados }/22</div>
      </div>
    )
  }
}

export default Empleado
