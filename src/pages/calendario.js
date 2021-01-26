import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import days from '../json/calendario.json';
import Empleado from '../components/empleado'
import Dia from '../components/dia'

class Calendario extends Component {
  constructor(props){
    super(props)

    this.state = { 
      empleados:JSON.parse(localStorage.getItem('empleados')) || [],
      date:days.datos
    }
  }

  getData = (val) => {
    this.state.empleados.map(empleado=>{
      if(empleado.name === val.name) empleado.days = val.days
    })
    this.setState({ empleados:this.state.empleados })
    localStorage.setItem('empleados', JSON.stringify(this.state.empleados));
  } 

  render(){
    return(
      <div>
        <h4>Calendario de vacaciones</h4>

        <table>

            <thead>
              <tr>

                <td>Empleados</td>
                  {
                    this.state.date.map((dia, i)=>{
                      return(
                        <td key={i}>
                          {JSON.stringify(dia.fecha).substring(6, 8)}
                        </td>
                      )
                    })
                  }

              </tr>
            </thead>

            <tbody>
              {
                this.state.empleados.map((empleado, i)=>{
                  return(

                    <tr key={i}>
                      <Empleado empleado={empleado} />
                      {
                        empleado.days.map((dia, y)=>{
                          return(
                            
                              <Dia key={y} dia={dia} empleado={empleado} sendData={this.getData} />
                            
                          )
                        })
                      }
                    </tr>

                  )
                })
              }
            </tbody>

        </table>

        <Link to='/' className="button is-primary">Volver</Link>

      </div>
    )
  }
}

export default Calendario
