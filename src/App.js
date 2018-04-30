import React from 'react'
import Planet from './planet.js'
import Navbar from './Navbar.js'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1> Star War Univers </h1>
        <Navbar />
        <Planet />
      </div>
    )
  }
}
