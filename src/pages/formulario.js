import React, { Component } from 'react'
import { formatJson } from '../Utils.js'
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap'
import Volver from '../components/volver'

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
    if(this.inputName.value){
      this.state.empleados.push({"name":this.inputName.value, "days":formatJson(), "gastados":0})
      this.setState({empleados: this.state.empleados, inputName: ""})
      localStorage.setItem('empleados', JSON.stringify(this.state.empleados))
    }
  }

  handleDelete = (empleado) => {
    this.setState({empleados: this.state.empleados.filter(emp => emp !== empleado)})
    localStorage.setItem('empleados', JSON.stringify(this.state.empleados))
  }

  render(){
    return(
      <Container fluid>

        <Row className="justify-content-md-center mt-5">
          <Col md="auto">
            <h4>Panel de control</h4>
          </Col>
        </Row>

        <Row className="justify-content-md-center mt-5">
          <Col md="auto">
            <Form>
              <Form.Row className="align-items-center">
                <Col xs="auto">
                  <Form.Label htmlFor="inlineFormInput" srOnly>
                    Nombre
                  </Form.Label>
                  <Form.Control
                    className="mb-2"
                    id="inlineFormInput"
                    placeholder='introduce el nombre'
                    ref={inputElement => this.inputName=inputElement}
                    value={this.state.inputName}
                    onChange={e=>this.setState({inputName:e.target.value})}
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit" className="mb-2" onClick={this.handleSubmit}>
                    Añadir empleado
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
        </Row>

        <Row className="justify-content-md-center mt-5">
          <Col md="auto">
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Empleado</th>
                  <th>Días</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.empleados.map((empleado, i)=>{
                    return(
                      <tr key={i}>
                        <td>{i+1}</td>
                        <td>{empleado.name}</td>
                        <td>{empleado.gastados}/22</td>
                        <td><Button variant="primary" onClick={() => { this.handleDelete(empleado) }}>Borrar</Button></td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </Col>
        </Row>

        <Row className="justify-content-md-center mt-5">
          <Col md="auto">
            <Volver />
          </Col>
        </Row>

      </Container>
    )
  }
}

export default Formulario
