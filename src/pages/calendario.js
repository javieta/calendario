import React, { Component } from 'react'
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap'
import { formatJson, monthsShare } from '../Utils.js'
import Empleado from '../components/empleado'
import Dia from '../components/dia'
import Volver from '../components/volver'

class Calendario extends Component {
  constructor(props){
    super(props)
    this.state = { 
      empleados:JSON.parse(localStorage.getItem('empleados')) || [],
      date: formatJson(),
      meses:monthsShare()
    }
  }

  getData = (val) => {
    this.state.empleados.map(empleado=>{
      if(empleado.name === val.name) empleado.days = val.days
    })
    this.setState({ empleados:this.state.empleados })
    localStorage.setItem('empleados', JSON.stringify(this.state.empleados))
  } 

  render(){
    return(
      <Container fluid="md">
        <Row className="justify-content-md-center mt-3">
          <Col md="auto">
            <h4>Calendario de empleados</h4>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            {
              this.state.empleados.map((empleado, i)=>{
                return(
                  <Accordion key={i}>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} className="w-100" variant="link" eventKey="0">

                          <Empleado empleado={empleado} />

                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>

                          {
                            empleado.days.map((mes, numMes)=>{
                              return (
                                <Accordion key={numMes}>
                                  <Card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                      {this.state.meses[numMes+1]}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                      <Card.Body>
                                        {
                                          mes.map((dia, x)=>{
                                            return <Dia key={x} dia={dia} empleado={empleado} sendData={this.getData} />
                                          }) 
                                        } 
                                      </Card.Body>
                                    </Accordion.Collapse>
                                  </Card>
                                </Accordion>
                              )
                            })
                          }

                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                )
              })
            }
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

export default Calendario
