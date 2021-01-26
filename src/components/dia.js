import React, {Component} from 'react';

class Dia extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  addHolidays = (e) => {
    if(!this.props.dia.isChecked){
      if(this.props.empleado.gastados.length != 22){
        this.props.dia.isChecked = true;
        this.props.empleado.gastados ++;
        this.props.sendData(this.props.empleado);
      }
    }else{
      this.props.dia.isChecked = false;
      this.props.empleado.gastados --;
      this.props.sendData(this.props.empleado);
    }
  }

  render(){
    let btn;
    if(this.props.dia.tipoId === 'F'){
      btn = <div className="check-f">F</div>
    } else if(this.props.dia.tipoId === 'S') {
      btn = <div className="check-s">S</div>
    } else {
      btn = <div onClick={this.addHolidays} className={this.props.dia.isChecked ? "check-l-checked" : "check-l"}>L</div>
    }

    return(
        <td>{btn}</td>
    )
  }
}

export default Dia
