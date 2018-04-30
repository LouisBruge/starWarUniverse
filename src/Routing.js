import React from 'react'
import Planet from './planet.js'
import Starship from './Starship.js'
import Personnage from './Personnages.js'
import Vehicle from './Vehicles.js'
import {Route, BrowserRouter, Switch} from 'react-router-dom'

export default class Routing extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/starship' component={Starship} />
          <Route exact path='/planet' component={Planet} />
          <Route exact path='/personnage' component={Personnage} />
          <Route exact path='/vehicle' component={Vehicle} />
        </Switch>
      </BrowserRouter>
    )
  }
}
