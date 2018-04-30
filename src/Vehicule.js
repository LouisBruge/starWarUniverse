import {Component} from 'react'

const URL_VEHICLE = 'https://swapi.co/api/vehicles/'

export default class Vehicle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      vehicle: {}
    }
  }

  _fetchVehicle () {
    fetch(URL_VEHICLE + '4')
      .then(function (response) {
        return response.json()
      })
      .then(function (myJSon) {
        this.setState({
          vehicle: myJSon,
          isLoading: false
        })
      })
  }

  componentWillMount () {
    this._fetchVehicle()
  }

  render () {
    if (this.state.isLoading) {
      return (
        <div>
          <p> Loading... </p>
        </div>
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
