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
          <Route path='/planets' component={Planet} />
          <Route path='/personnages' Component={Personnage} />
          <Route path='/starships' Component={Starship} />
        </Switch>
      </BrowserRouter>
    )
  }
}
