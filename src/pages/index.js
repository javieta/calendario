import React from 'react'
import {Link} from 'react-router-dom'

export const Index = () => (
  <div>
  	<Link to='/calendaar' className="button is-primary">Calendario</Link>
  	<Link to='/form' className="button is-primary">Formulario</Link>
  </div>
)
