import React from 'react'

const URL_SPECIES = 'https://swapi.co/api/species'

export default class Species extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      species: {}
    }
  }

  _fetchSpecies () {
    fetch(URL_SPECIES + '3')
      .then(function (response) {
        return response.json()
      })
      .then(myJSON => {
        this.setState({
          isLoading: false,
          species: myJSON
        })
      })
  }

  componentWillMount () {
    this._fetchSpecies()
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
          <h2> {this.state.species.name} </h2>
          <ul>
            <li> Language : {this.state.species.language} </li>
            <li> Classification : {this.state.species.classification} </li>
          </ul>
        </div>
      )
    }
  }
}
