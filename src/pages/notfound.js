import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import Volver from '../components/volver'

export const NotFound = () => (
	<Container fluid>
	  <Row className="justify-content-md-center mt-5">
	    <Col md="auto">
    		<Card>
			  <Card.Header>¡Vaya error!</Card.Header>
			  <Card.Body>
			    <Card.Title>404!</Card.Title>
			    <Card.Text>
			      Parece ser que la página a la que intentas acceder no existe.
			    </Card.Text>
			    <Volver />
			  </Card.Body>
			</Card>
	    </Col>
	  </Row>
	</Container>
)
