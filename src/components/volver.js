import React, {Component} from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Volver extends Component {
  
  render(){
    return <Link to='/'><Button variant="primary">Volver</Button></Link>
  }
}

export default Volver
