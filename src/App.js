import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Planet from './planet.js'
import Starship from './starship'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1> Star War Univers </h1>
        <BrowserRouter>
          <Switch>
            <Route exact path='/planet' component={Planet} />
            <Route exact path='/starship' component={Starship} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
