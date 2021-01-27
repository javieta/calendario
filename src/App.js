import React, {Component} from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Calendario from './pages/calendario'
import Formulario from './pages/formulario'
import {NotFound} from './pages/notfound'
import {Index} from './pages/index'

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Index} />
            <Route path='/calendar' component={Calendario} />
            <Route path='/form' component={Formulario} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
