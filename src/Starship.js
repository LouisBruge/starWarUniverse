import React from 'react'
import Loading from './Loading'
const URL_STARSHIP = 'https://swapi.co/api/starships/'

export default class Starship extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: true,
      starship: {}
    }
  }

  _fetchStarship (id) {
    fetch(URL_STARSHIP + id)
      .then(function (response) {
        return response.json()
      })
      .then((myJSON) => {
        this.setState({
          starship: myJSON,
          isLoading: false
        })
        console.log(this.state.startship)
      })
  }

  componentWillMount () {
    this._fetchStarship(this.props.match.params.id)
  }

  render () {
    if (this.state.isLoading) {
      return (
        <Loading />
      )
    } else {
      console.log(this.state.starship.name)
      return (
        <div>
          <h2> {this.state.starship.name} </h2>
          <p> Class : {this.state.starship.starship_class} </p>
          <p> Manufacturer : {this.state.starship.manufacturer} </p>
        </div>)
    }
  }
}
