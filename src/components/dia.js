import React, {Component} from 'react'

class Dia extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  addHolidays = (e) => {
    if(!this.props.dia.isChecked){
      if(this.props.empleado.gastados !== 22){
        this.props.dia.isChecked = true
        this.props.empleado.gastados ++
        this.props.sendData(this.props.empleado)
      }
    }else{
      this.props.dia.isChecked = false
      this.props.empleado.gastados --
      this.props.sendData(this.props.empleado)
    }
  }

  render(){
    let btn;
    if(this.props.dia.tipoId === 'F'){
      btn = <div className="check-f h-100"></div>
    } else if(this.props.dia.tipoId === 'S') {
      btn = <div className="check-s h-100"></div>
    } else {
      btn = <div onClick={this.addHolidays} className={this.props.dia.isChecked ? "check-l-checked h-100" : "check-l h-100"}></div>
    }

    return(
        <div className="d-flex p-2 flex-wrap text-center">
          <div className="flex-grow-1 border-bottom">Día { JSON.stringify(this.props.dia.fecha).substring(6, 8) }</div>
          <div className="flex-grow-1 ">{btn}</div>
        </div>
    )
  }
}

export default Dia
