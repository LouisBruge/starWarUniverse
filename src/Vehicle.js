import React from 'react'
import Loading from './Loading'

const URL_VEHICLE = 'https://swapi.co/api/vehicles/'

export default class Vehicle extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      vehicle: {}
    }
  }

  _fetchVehicle (id) {
    fetch(URL_VEHICLE + id)
      .then(function (response) {
        return response.json()
      })
      .then((myJSon) => {
        this.setState({
          vehicle: myJSon,
          isLoading: false
        })
      })
  }

  componentWillMount () {
    this._fetchVehicle(this.props.match.params.id)
  }

  render () {
    if (this.state.isLoading) {
      return (
        <Loading />
      )
    } else {
      return (
        <div>
          <h2> {this.state.vehicle.name} </h2>
          <ul>
            <li> Model : {this.state.vehicle.model} </li>
          </ul>
        </div>
      )
    }
  }
}
