import React from 'react'
import Planet from './planet.js'
import Starship from './Starship.js'
import Personnage from './Personnages.js'
import {Route, BrowserRouter, Switch} from 'react-router-dom'

export default class Routing extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/Starship' component={Starship} />
          <Route exact path='/Planets' component={Planet} />
          <Route exact path='/Personnage' component={Personnage} />
        </Switch>
      </BrowserRouter>
    )
  }
}
