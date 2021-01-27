import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'

export const Index = () => (
	<Container fluid="md">
	  <Row className="mt-3">
	    <Col>

	    	<Card className="text-center">
			  <Card.Header>Lorem ipsum dolor sit amet</Card.Header>
			  <Card.Body>
			    <Card.Title>Panel de control</Card.Title>
			    <Card.Text>
			      Añade o elimina trabajadores para asignarles un calendario.
			    </Card.Text>
			    <Link to='/form'><Button variant="primary">Acceder</Button></Link>
			  </Card.Body>
			  <Card.Footer className="text-muted">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Footer>
			</Card>

		</Col>
	  </Row>
	  <Row className="mt-4">
	    <Col>

	    	<Card className="text-center">
			  <Card.Header>Lorem ipsum dolor sit amet</Card.Header>
			  <Card.Body>
			    <Card.Title>Calendario</Card.Title>
			    <Card.Text>
			      Comprueba y modifica los días de vacaciones de los trabajadores.
			    </Card.Text>
			    <Link to='/calendar'><Button variant="primary">Acceder</Button></Link>
			  </Card.Body>
			  <Card.Footer className="text-muted">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Footer>
			</Card>

		</Col>
	  </Row>
	</Container>
)