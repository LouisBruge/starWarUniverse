import React, { Component } from 'react'
import Loading from './Loading'

const URL_PLANET = 'https://swapi.co/api/planets/'

export default class planet extends Component {
  constructor () {
    super()

    this.state = {
      isLoading: true,
      planet: {}
    }
  }

  _fetchPlanet (id) {
    fetch(URL_PLANET + id)
      .then(function (response) {
        return response.json()
      })
      .then((myJSON) => {
        this.setState({
          isLoading: false
        })
        this.setState({
          planet: myJSON
        })
      })
  }

  componentWillMount () {
    this._fetchPlanet(this.props.match.params.id)
  }

  render () {
    if (this.state.isLoading) {
      return (
        <Loading />
      )
    } else {
      return (
        <div>
          <h2> {this.state.planet.name}</h2>
          <ul>
            <li> Climate : {this.state.planet.climate}</li>
            <li> Terrain : {this.state.planet.terrain}</li>
            <li> Percent water surface : {this.state.planet.surface_water} </li>
            <li> Diametre : {this.state.planet.diameter} m </li>
            <li> Gravity : {this.state.planet.gravity}</li>
            <li> Rotation period : {this.state.planet.rotation_period} hours </li>
            <li> Orbital period : {this.state.planet.orbital_period} days </li>
            <li> Population : {this.state.planet.population}</li>

          </ul>
        </div>
      )
    }
  }
}
