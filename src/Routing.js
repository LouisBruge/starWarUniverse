import React from 'react'
import Planet from './Planet.js'
import Starship from './Starship.js'
import Personnage from './Personnage.js'
import PersonnageIndex from './PersonnageIndex.js'
import Vehicle from './Vehicle.js'
import Species from './Species.js'
import Navbar from './Navbar.js'
import {Route, BrowserRouter, Switch} from 'react-router-dom'

export default class Routing extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Navbar />
          <Route exact path='/starship/:id(\d+)' component={Starship} />
          <Route exact path='/planet/:id(\d+)' component={Planet} />
          <Route exact path='/personnage/:id(\d+)' component={Personnage} />
          <Route exact path='/personnage' component={PersonnageIndex} />
          <Route exact path='/vehicle/:id(\d+)' component={Vehicle} />
          <Route exact path='/species/:id(\d+)' component={Species} />
        </Switch>
      </BrowserRouter>
    )
  }
}
