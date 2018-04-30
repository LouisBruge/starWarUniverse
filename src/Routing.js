import React from 'react'
import Planet from './planet.js'
import {Route, BrowserRouter, Switch} from 'react-router-dom'

export default class Routing extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/planets' component={Planet} />
        </Switch>
      </BrowserRouter>
    )
  }
}
