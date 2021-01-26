import React, {Component} from 'react';

class Empleado extends Component {
  
  render(){
    return(
      <td>{ this.props.empleado.name }  { this.props.empleado.gastados }/22</td>
    )
  }
}

export default Empleado
